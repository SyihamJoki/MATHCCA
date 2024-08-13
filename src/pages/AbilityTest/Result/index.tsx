import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../components/container'
import TextStyles from '../../../assets/fonts'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../hooks/firebase';
import Loading from '../../../components/loading';

const Result = ({route, navigation}) => {
    const {totalPoints, user, onUpdate } = route.params
    console.log("B",onUpdate)
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [loading, setLoading] = useState(false);

  return (
    <Container justifyContent={"center"}>
      <Loading visible={loading}/>
        <View>
          <Text style={[TextStyles.bold,{color:"white", fontSize:18, textAlign:'center', marginBottom:10}]}>Nilai anda sebelumnya</Text>
          <ImageBackground source={require('../../../assets/image/bg-circle.png')} resizeMode='contain' style={{width:windowWidth*0.9, height:windowWidth*0.9, alignItems:'center', justifyContent:'center'}}>
            <Text style={[TextStyles.bold, {fontSize:45, color:'#4F2305'}]}>{user.abilityTest*10}</Text>
          </ImageBackground>
          <View style={{flexDirection:'row', width:windowWidth*0.82, alignSelf:'center', justifyContent:'space-between', marginTop: windowWidth*0.05}}>
            <View style={[styles.card, {width:windowWidth*0.4, height:windowHeight*0.12}]}>
              <Text style={[TextStyles.bold, {color:'white', fontSize:24}]}>{user.abilityTest}</Text>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <View style={{justifyContent:'center'}}>
                  <Icon name="circle" color="#00FD43" solid size={13}/>
                </View>
                <Text style={[TextStyles.regularSmall,{color:'white', marginStart:10,}]}>True</Text>
              </View>
            </View>
            <View style={[styles.card, {width:windowWidth*0.4, height:windowHeight*0.12}]}>
              <Text style={[TextStyles.bold, {color:'white', fontSize:24}]}>{10-user.abilityTest}</Text>
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
          <TouchableOpacity onPress={()=>navigation.replace('AbilityTest', {user:user, onUpdate:onUpdate})} style={[styles.button,{width:windowWidth*0.85, height:windowHeight*0.06, backgroundColor:'#4F2305'}]}>
            <Text style={[TextStyles.boldSmall, {color:'#F9F9F9'}]}>Main Lagi</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => {
                navigation.goBack()
              }}
             style={[styles.button,{width:windowWidth*0.85, height:windowHeight*0.06, backgroundColor:'#F9F9F9'}]}
          >
            <Text style={[TextStyles.boldSmall, {color:'#4F2305'}]}>Kembali</Text>
          </TouchableOpacity>
        </View>
    </Container>
  )
}

export default Result

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