import { Pressable, TouchableOpacity, Linking, View, FlatList, useWindowDimensions, StyleSheet, Button, TextInput, Text, KeyboardAvoidingView, ScrollView, Platform, ImageBackground, Image, Alert } from 'react-native';
import React, { useLayoutEffect, useState, useRef, useEffect } from 'react';
import { DocumentData, addDoc, where, getDocs, collection, onSnapshot, orderBy, query, serverTimestamp, doc, getDoc, deleteDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../hooks/firebase';
const groupPath = 'ChatGroups/general';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TextStyles from '../../assets/fonts';
const Discuss = ({user, onUpdate, navigation}) => {
  const [messages, setMessages] = useState<DocumentData[]>([]);
  const [message, setMessage] = useState<string>('');
  const { height } = useWindowDimensions();
  const { width } = useWindowDimensions();
  const flatListRef = useRef<FlatList>(null); // Create a ref for FlatList
  const firestore = FIRESTORE_DB;
  const linkRegex = /(?:^|\s)((?:https?:\/\/)[^\s]+)/gi;
  // ... Other functions ...
  const [showScrollToBottomButton, setShowScrollToBottomButton] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollToBottom();
    }, 100); // Adjust the delay as needed
  
    return () => clearTimeout(timeout);
  }, []);
  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
    setShowScrollToBottomButton(false);
  };
  
  
  

  const renderTextWithLinks = (text) => {
    const parts = text.split(linkRegex);
    return parts.map((part, index) => {
      if (linkRegex.test(part)) {
        return (
          <Text key={index} style={{ color: '#2980b9' }} onPress={() => Linking.openURL(part)}>
            {part}
          </Text>
        );
      } else {
        return <Text key={index}>{part}</Text>;
      }
    });
  };
  
  const sendMessage = async () => {
    const msg = message.trim();
    if (msg.length === 0) return;

    const msgCollectionRef = collection(firestore, `${groupPath}/messages`);

    await addDoc(msgCollectionRef, {
      message: msg,
      sender: user.uid,
      createdAt: serverTimestamp(),
    });

    setMessage('');
  };

  useLayoutEffect(() => {
    const msgCollectionRef = collection(firestore, `${groupPath}/messages`);
    const q = query(msgCollectionRef, orderBy('createdAt', 'asc'));
  
    const unsubscribe = onSnapshot(q, async (groups: DocumentData) => {
      const messages = await Promise.all(
        groups.docs.map(async (messageDoc) => {
          const messageData = messageDoc.data();
          try {
            const userDocRef = doc(firestore, 'users', messageData.sender);
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
              const userData = userDocSnap.data();
              // Merge messageData and userData
              return { id: messageDoc.id, ...messageData, username: userData.username};
            } else {
              return { id: messageDoc.id, ...messageData, username: 'Unknown User', };
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
            // In case of error, you might choose to handle it differently or provide a fallback username.
            return { id: messageDoc.id, ...messageData, username: 'Unknown User' };
          }
        })
      );
      setMessages(messages);
    });
  
    return unsubscribe;
  }, []);

  const deleteMessage = (messageId) => {
    Alert.alert(
      'Hapus Pesan',
      'Apakah Anda yakin ingin menghapus pesan ini?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: async () => {
            try {
              const messageDocRef = doc(firestore, `${groupPath}/messages`, messageId);
              await deleteDoc(messageDocRef);
              console.log('Message deleted');
            } catch (error) {
              console.error('Error deleting message:', error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };
  

  const renderMessage = ({ item, index }: { item: DocumentData; index: number }) => {
    const myMessage = item.sender === user?.uid;
    const currentDate = new Date(item.createdAt?.toDate());
    const prevItem = index > 0 ? messages[index - 1] : null;
    const prevDate = prevItem ? new Date(prevItem.createdAt?.toDate()) : null;
    const isSameDate =
      prevDate &&
      currentDate.getDate() === prevDate.getDate() &&
      currentDate.getMonth() === prevDate.getMonth() &&
      currentDate.getFullYear() === prevDate.getFullYear();
  
    const handleLongPress = () => {
      if (myMessage) {
        Alert.alert(
          'Hapus Pesan',
          'Apakah Anda yakin ingin menghapus pesan ini?',
          [
            {
              text: 'Batal',
              style: 'cancel',
            },
            {
              text: 'Hapus',
              style: 'destructive',
              onPress: async () => {
                try {
                  const messageDocRef = doc(firestore, `${groupPath}/messages`, item.id);
                  await deleteDoc(messageDocRef);
                  console.log('Message deleted');
                } catch (error) {
                  console.error('Error deleting message:', error);
                }
              },
            },
          ],
          { cancelable: true }
        );
      }
    };
  
    return (
      <View>
        {!isSameDate && (
          <View style={styles.dateContainer}>
            <Text style={[TextStyles.regular, styles.dateText]}>
              {currentDate.toLocaleDateString('id-ID', { month: 'long', day: 'numeric', year: 'numeric' })}
            </Text>
          </View>
        )}
        <TouchableOpacity
          onLongPress={handleLongPress}
          style={[styles.messageContainer, myMessage ? styles.userMessageContainer : styles.otherMessageContainer]}
        >
          <View>
            <Text style={[TextStyles.BerkshireSwash, styles.userName, { marginTop: height * 0.015, marginEnd: width * 0.05 }]}>
              {item.username}
            </Text>
          </View>
          <View style={[myMessage ? styles.userMessageContent : styles.otherMessageContent]}>
            <Text style={[TextStyles.regular, styles.messageText]}>
              {renderTextWithLinks(item.message)}
            </Text>
            <Text style={styles.time}>
              {currentDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  

  
  return (
    <View style={{flex:1, backgroundColor:"#c1393d"}}>
        <View style={{flex: 1}}>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          onContentSizeChange={scrollToBottom}
          onLayout={scrollToBottom}
          onScroll={(event) => {
            const offsetY = event.nativeEvent.contentOffset.y;
            if (offsetY > 10) {
              setShowScrollToBottomButton(false);
            } else {
              setShowScrollToBottomButton(true);
            }
          }}
        />
        </View>
        {showScrollToBottomButton && (
          <TouchableOpacity
            onPress={scrollToBottom}
            style={[styles.buttonScrollToBottom, { width: width * 0.07, top: height * 0.8, left: width * 0.9, height: width * 0.07, borderRadius: width * 0.07 }]}
          >
            <FontAwesome5 name={'chevron-down'} size={19} color={'black'} />
          </TouchableOpacity>
        )}
        <View style={styles.inputContainer}>
          <TextInput multiline value={message} onChangeText={(text) => setMessage(text)} placeholder="Ketik Pesan.." placeholderTextColor={'black'} style={[,TextStyles.regularSmall,styles.messageInput]} />
          <TouchableOpacity onPress={sendMessage} style={{width: width*0.06, paddingTop:height*0.01,}}>
            <FontAwesome5 name={'paper-plane'} size={20} color={'black'} solid={message !== ''} />
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Discuss

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    backgroundColor: '#746555',
  },
  messageInput: {
    color:'white',
    width: '90%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
  },
  messageContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  buttonScrollToBottom:{
    position: 'absolute',
    backgroundColor:'gray',
    alignItems: 'center',
    justifyContent:'center',
  },
  userMessageContainer: {
    alignSelf: 'flex-start',
  },
  userMessageContent: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '100%',
    borderWidth: 1,
    backgroundColor: '#FF9E1F',
  },
  otherMessageContent: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '100%',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  otherMessageContainer: {
    alignSelf: 'flex-end',
  },
  userName: {
    fontSize: 14,
    color: 'white',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageText: {
    color: 'black',
  },
  time: {
    fontSize: 10,
    color: 'black',
    alignSelf: 'flex-end',
  },
  dateContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor:'gray',
    width: '40%',
    borderRadius: 20,
  },
  dateText: {
    fontSize: 10,
    color: 'white',
  },
  title:{
    color: 'white'
  },
  headerContainer: {
    padding: 10,
    backgroundColor: '#746555',
    alignItems: 'center',
  },
})