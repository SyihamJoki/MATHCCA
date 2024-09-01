import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../components/container'
import TextStyles from '../../../assets/fonts'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../hooks/firebase';
import Loading from '../../../components/loading';

const Score = ({route, navigation}) => {
    const {totalPoints, user, onUpdate, questions, selectedAnswers } = route.params
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [loading, setLoading] = useState(false);
    const saveTotalPointToFirestore = async (uid) => {
      try {
        setLoading(true);
        const firestore = FIRESTORE_DB;
        const docRef = doc(firestore, "users", uid);

        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          await updateDoc(docRef, {
              abilityTest: totalPoints,
          });
        }
  
        const updatedUser = {
          ...user,
          abilityTest: totalPoints,
        };
  
        if (typeof onUpdate === 'function') {
          onUpdate(updatedUser);
        } else {
          console.error("onUpdate is not a function or is undefined");
        }

      navigation.reset({
          index: 0,
          routes: [{ name: 'MainApp', params: { user: updatedUser } }],
      });
      } catch (error) {
        console.error("Error saving total points to Firestore:", error);
      }finally{
        setLoading(false);
      }
    };
  return (
    <Container justifyContent={"center"}>
      <Loading visible={loading}/>
      <ScrollView>

        <View>
          <ImageBackground source={require('../../../assets/image/bg-circle.png')} resizeMode='contain' style={{width:windowWidth*0.9, height:windowWidth*0.9, alignItems:'center', justifyContent:'center'}}>
            <Text style={[TextStyles.bold, {fontSize:45, color:'#4F2305'}]}>{Math.round((totalPoints/15)*100)}</Text>
          </ImageBackground>
          <View style={{flexDirection:'row', width:windowWidth*0.82, alignSelf:'center', justifyContent:'space-between', marginTop: windowWidth*0.05}}>
            <View style={[styles.card, {width:windowWidth*0.4, height:windowHeight*0.12}]}>
              <Text style={[TextStyles.bold, {color:'white', fontSize:24}]}>{totalPoints}</Text>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <View style={{justifyContent:'center'}}>
                  <Icon name="circle" color="#00FD43" solid size={13}/>
                </View>
                <Text style={[TextStyles.regularSmall,{color:'white', marginStart:10,}]}>True</Text>
              </View>
            </View>
            <View style={[styles.card, {width:windowWidth*0.4, height:windowHeight*0.12}]}>
              <Text style={[TextStyles.bold, {color:'white', fontSize:24}]}>{15-totalPoints}</Text>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <View style={{justifyContent:'center'}}>
                  <Icon name="circle" color="#FF0B0B" solid size={13}/>
                </View>
                <Text style={[TextStyles.regularSmall,{color:'white', marginStart:10,}]}>False</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop:20}}>
          <Text style={[TextStyles.boldLarge, {color:'white', textAlign:'center'}]}>Pembahasan</Text>
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[index];
            const correctAnswer = question.choices.find(choice => choice.id === question.correctAnswerId);
            return (
              <View key={question.id} style={{backgroundColor:'white', width:windowWidth*0.9, paddingVertical:10, marginBottom:10, borderRadius:10, paddingHorizontal:5, borderWidth:3, borderColor:'#FF9E1F'}}>
                <Text style={[TextStyles.bold, {color:'#4F2305',fontSize:17, textAlign:'center'}]}>
                  {`Soal Nomor ${index + 1}`}
                </Text>
                <Text style={[TextStyles.regularSmall, {color:'black', marginBottom: 5}]}>
                  {question.questionText}
                </Text>
                {question.questionImage && (
                  <Image
                    source={question.questionImage} 
                    style={{width: windowWidth * 0.8, height: windowWidth * 0.4, resizeMode: 'contain', marginVertical: 5}} 
                  />
                )}
                <Text style={[TextStyles.boldSmall, {color:'black', marginTop:15}]}>Penjelasan</Text>
                {question.explainImage && (
                  <Image 
                    source={question.explainImage} 
                    style={{width: windowWidth * 0.8, height: windowWidth * 0.4, resizeMode: 'contain', marginVertical: 5}} 
                  />
                )}
                <Text style={[TextStyles.regularSmall, {color:"black", marginBottom: 10}]}>
                  {question.explain}
                </Text>
                <Text style={[TextStyles.boldSmall, {color: 'black',}]}>
                  Kunci Jawaban
                </Text>
                {correctAnswer.image ? (
                  <Image
                    source={correctAnswer.image}
                    style={{width: windowWidth * 0.8, height: windowWidth * 0.4, resizeMode: 'contain', marginVertical: 5}} 
                  />
                ) : (
                  <Text style={[TextStyles.regularSmall, {color: 'black'}]}>
                    {correctAnswer.text}
                  </Text>
                )}
                <Text style={[TextStyles.boldSmall, {color: userAnswer && userAnswer.id === correctAnswer.id ? '#08c239' : '#FF0B0B',}]}>
                  {`Jawaban Anda ${userAnswer && userAnswer.id === correctAnswer.id ? 'Benar' : 'Salah'}`}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
          <TouchableOpacity
              onPress={() => {
                const uid = user.uid;
                saveTotalPointToFirestore(uid);
              }}
             style={[styles.button,{width:windowWidth*0.85, height:windowHeight*0.06, backgroundColor:'#F9F9F9'}]}
          >
            <Text style={[TextStyles.boldSmall, {color:'#4F2305'}]}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  )
}

export default Score

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    justifyContent:'center', alignItems:'center', borderRadius:10,
    marginBottom:10
  }
})