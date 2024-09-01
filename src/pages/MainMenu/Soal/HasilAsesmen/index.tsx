import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../../components/container';
import Loading from '../../../../components/loading';
import TextStyles from '../../../../assets/fonts';
import { FIRESTORE_DB } from '../../../../hooks/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { calculateTingkat } from '../../../../hooks/CalculateTingkat';

const HasilAsesmen = ({route, navigation}) => {
    const {totalPoints, user, onUpdate } = route.params
    
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [loading, setLoading] = useState(false);
    let exerciseType = ''
    if (user.tingkat === "rendah") {
        exerciseType = "exercise1"
    }
    else if (user.tingkat === "sedang") {
        exerciseType = "exercise2"
    }
    else if (user.tingkat === "tinggi") {
        exerciseType = "exercise3"
    }
    const saveTotalPointToFirestore = async (uid) => {
        try {
            setLoading(true);
            const firestore = FIRESTORE_DB;
            const docRef = doc(firestore, "users", uid);

            const docSnapshot = await getDoc(docRef);
    
            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();

                await updateDoc(docRef, {
                    [exerciseType]: totalPoints,
                });

                let updatedUser = {
                    ...userData,
                    [exerciseType]: totalPoints,
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
            } else {
                console.error("Document does not exist for the given UID");
            }
        } catch (error) {
            console.error("Error saving total points to Firestore:", error);
        } finally {
            setLoading(false);
        }
    };
     
  return (
    <Container justifyContent={"center"}>
    <Loading visible={loading}/>
      <View>
        <Text style={[TextStyles.regularLarge,{color:'white', textAlign:'center', marginBottom:10}]}>Selamat anda telah menyelesaikan asesmen ini.</Text>
        <ImageBackground source={require('../../../../assets/image/bg-circle.png')} resizeMode='contain' style={{width:windowWidth*0.9, height:windowWidth*0.9, alignItems:'center', justifyContent:'center'}}>
          <Text style={[TextStyles.bold, {fontSize:45, color:'#4F2305'}]}>{totalPoints*10}</Text>
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
            <Text style={[TextStyles.bold, {color:'white', fontSize:24}]}>{10-totalPoints}</Text>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <View style={{justifyContent:'center'}}>
                <Icon name="circle" color="#FF0B0B" solid size={13}/>
              </View>
              <Text style={[TextStyles.regularSmall,{color:'white', marginStart:10,}]}>False</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{position:'absolute', bottom:0, justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity
            onPress={() => {
              const uid = user.uid;
              saveTotalPointToFirestore(uid);
            }}
           style={[styles.button,{width:windowWidth*0.85, height:windowHeight*0.06, backgroundColor:'#4F2305'}]}
        >
          <Text style={[TextStyles.boldSmall, {color:'#F9F9F9'}]}>Simpan</Text>
        </TouchableOpacity>
      </View>
  </Container>
  )
}

export default HasilAsesmen

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