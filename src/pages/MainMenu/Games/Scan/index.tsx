import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
const validIds = ['2veJ4ksG0KnDbLLBzFpi', 'BpSnaS0SIO2REgDCFIS5'];
const Scan = ({route, navigation}) => {
  //const { user, onUpdate } = route.params;
  useEffect(() => {
    console.log('Scan component mounted'); // Log saat komponen dipasang
  }, []);

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
      topContent={<Text>Scan QR Code</Text>}
      bottomContent={
        <View>
          <TouchableOpacity onPress={toggleFlash} style={styles.flashButton}>
            <Text style={{color:'black'}}>
              {flashEnabled ? 'Turn off Flash' : 'Turn on Flash'}
            </Text>
          </TouchableOpacity>
        </View>
      }
      flashMode={flashEnabled ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
      reactivate={true}
      reactivateTimeout={500}
    />
  );
}

export default Scan

const styles = StyleSheet.create({})