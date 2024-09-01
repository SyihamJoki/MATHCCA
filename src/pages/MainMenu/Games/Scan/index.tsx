import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import TextStyles from '../../../../assets/fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import { AllGamesQuestion } from '../../../../data/data';
const validIds = AllGamesQuestion.map(game => game.id);

const Scan = ({route, navigation}) => {
  //const { user, onUpdate } = route.params;
  useEffect(() => {
    console.log('Scan component mounted'); // Log saat komponen dipasang
  }, []);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const { user, onUpdate } = route.params;
  console.log("Scan",user, onUpdate)
  const onSuccess = (e) => {
    const qrData = e.data;

    // Periksa apakah ID ada dalam data yang valid
    if (validIds.includes(qrData)) {
      console.log('Navigating to TaskGames with ID:', qrData);
      navigation.replace('TaskGames', { id: qrData, user:user, onUpdate:onUpdate });
    } else {
      console.log('ID tidak ditemukan dalam data:', qrData);
      Alert.alert('Error', 'ID tidak ditemukan dalam data!');
    }
  };
  const [flashEnabled, setFlashEnabled] = useState(false);



  const toggleFlash = () => {
    setFlashEnabled(!flashEnabled);
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      topViewStyle={{backgroundColor:'#c1393d', justifyContent:'center'}}
      topContent={<Text style={[TextStyles.BerkshireSwash, {fontSize:18, color:'white'}]}>Scan QR Code</Text>}
      bottomContent={
        <View>
          <TouchableOpacity onPress={toggleFlash} style={[{height:windowHeight*0.1, alignItems:'center'}]}>
              <Icon name={flashEnabled ? 'flash' : 'flash-off'} size={25} color="black"/>
              <Text style={[TextStyles.boldSmall,{color:'black'}]}>
                {flashEnabled ? 'Matikan Flash' : 'Hdupkan Flash'}
              </Text>
          </TouchableOpacity>
        </View>
      }
      bottomViewStyle={{height:windowHeight*0.25, backgroundColor:'#c1393d'}}
      flashMode={flashEnabled ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
      reactivate={true}
      reactivateTimeout={500}
    />
  );
}

export default Scan

const styles = StyleSheet.create({})