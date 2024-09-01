import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ContainerWithHeader from '../../../../components/containerWithHeader'
import TextStyles from '../../../../assets/fonts';
import { dataTingkatan } from '../../../../data/data';
import AbiltyTestPopUp from '../../../../components/AbilityTestPopUp';
import Sound from 'react-native-sound';

const Main = ({route, navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const { user, onUpdate } = route.params;
  const sound = new Sound('button.mpeg', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('Failed to load the sound', error);
      return;
    }
  });
  const goToPage = (item) => {
    sound.play((success) => {
      if (success) {
        console.log('Sound played successfully');
        navigation.navigate(item, {
          user,
          onUpdate: (updatedUser) => {
            onUpdate(updatedUser);
          },
        });
      } else {
        console.log('Sound playback failed');
      }
    });
  };
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  useEffect(() => {
    if (!['rendah', 'sedang', 'tinggi'].includes(user.tingkat)) {
        setPopUpVisible(true);
    }
  }, [user.tingkat]);
  
    let content = ''
    if (user.tingkat === "rendah") {
      content = "Materi berikut berisi materi tigkatan awal atau rendah"
    }
    else if (user.tingkat === "sedang") {
      content = "Materi berikut berisi materi tingkat sedang"
    }
    else if (user.tingkat === "tinggi") {
      content = "Materi berikut berisi materi tingkat terakhir"
    }
    const handleClosePopUp = () => {
      setPopUpVisible(false);
    };  
  return (
    <ContainerWithHeader title="Materi">
        <AbiltyTestPopUp navigation={navigation} closeAndGoBack={true} visible={isPopUpVisible} onClose={handleClosePopUp} onPress={() => goToPage("AbilityTest")} />
        <View style={styles.container}>
          <Text style={[TextStyles.regularLarge, {fontSize:20,color:'white', textAlign:'center', marginBottom:30}]}>{content}</Text>
            <TouchableOpacity style={[styles.button, {width:windowWidth*0.8, height:windowHeight*0.07}]} onPress={() => goToPage("Video")}>
                <Text style={[TextStyles.bold,{fontSize:18,color:'black'}]}>Tonton Video Pembelajaran</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {width:windowWidth*0.8, height:windowHeight*0.07}]} onPress={() => goToPage("ContohSoal")}>
                <Text style={[TextStyles.bold,{fontSize:18,color:'black'}]}>Kerjakan Contoh Soal</Text>
            </TouchableOpacity>
        </View>
    </ContainerWithHeader>
  )
}

export default Main

const styles = StyleSheet.create({
  container:{
    flex:1, justifyContent:'center', padding:10, alignItems:'center'
  },
  button:{
    backgroundColor:'#FF9E1F',
    borderWidth:3,
    borderColor:'#4F2305',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
  },
})