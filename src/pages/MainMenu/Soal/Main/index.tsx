import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Container from '../../../../components/container'
import ContainerWithHeader from '../../../../components/containerWithHeader'
import TextStyles from '../../../../assets/fonts'
import AbiltyTestPopUp from '../../../../components/AbilityTestPopUp'
import Sound from 'react-native-sound'

const Main = ({route, navigation}) => {
  const {user, onUpdate} = route.params;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  useEffect(() => {
    if (!['rendah', 'sedang', 'tinggi'].includes(user.tingkat)) {
        setPopUpVisible(true);
    }
  }, [user.tingkat]);

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

  let content = '';
  if (user.tingkat === "rendah") {
      content = "Terus tingkatkan kemampuan anda!\nKerjakan soal asesmen untuk menaikkan tingkat anda, sehingga naik ke tingkat berikutnya";
  }
  else if (user.tingkat === "sedang") {
      content = "Terus tingkatkan kemampuan anda!\nKerjakan soal asesmen untuk menaikkan tingkat anda, sehingga naik ke tingkat terakhir";
  }
  else if (user.tingkat === "tinggi") {
      if (user.exercise3 >= 3) {
          content = "Anda sudah pada tahap pembelajaran terakhir. Anda bisa mengerjakan pengayaan.";
      } else {
          content = "Terus tingkatkan kemampuan anda!\nJika anda menyelesaikan asesmen tingkat terakhir ini, anda akan membuka tes pengayaan";
      }
  }

  const handleClosePopUp = () => {
      setPopUpVisible(false);
  };    

  return (
      <ContainerWithHeader title="Soal">
          <AbiltyTestPopUp navigation={navigation} closeAndGoBack={true} visible={isPopUpVisible} onClose={handleClosePopUp} onPress={() => goToPage("AbilityTest")} />
          <View style={styles.container}>
              <Text style={[TextStyles.regularLarge, {fontSize: 20, color: 'white', textAlign: 'center', marginBottom: 30}]}>
                  {content}
              </Text>
              <TouchableOpacity style={[styles.button, {width: windowWidth * 0.8, height: windowHeight * 0.07}]} onPress={() => goToPage("Latihan")}>
                  <Text style={[TextStyles.bold, {fontSize: 18, color: 'black'}]}>Kerjakan Latihan Soal</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {width: windowWidth * 0.8, height: windowHeight * 0.07}]} onPress={() => goToPage("Asesmen")}>
                    <Text style={[TextStyles.bold, {fontSize: 18, color: 'black'}]}>Kerjakan Asesmen</Text>
                </TouchableOpacity>
              {user.tingkat === 'tinggi' && user.exercise3 >= 6 && (
                  <TouchableOpacity 
                      style={[styles.button, {width: windowWidth * 0.8, height: windowHeight * 0.07}]} 
                      onPress={() => goToPage("Pengayaan")}
                  >
                      <Text style={[TextStyles.bold, {fontSize: 18, color: 'black'}]}>
                          Tes Pengayaan
                      </Text>
                  </TouchableOpacity>
              )}
          </View>
      </ContainerWithHeader>
  );
};


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