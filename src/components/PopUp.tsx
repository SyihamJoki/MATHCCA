import React from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, Dimensions } from 'react-native';
import TextStyles from '../assets/fonts';
const PopUp = ({visible, onClose}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  return (
    <View>
        <Modal visible={visible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor:'white', height:windowHeight*0.4, padding:5, borderTopStartRadius:10, borderTopEndRadius:10, paddingTop:10}}>
                <Text style={[TextStyles.bold, {color:"black", fontSize:20, marginBottom:25}]}>Petunjuk Pengerjaan</Text>
                <Text style={[TextStyles.regular, {fontSize:18, color:"gray", textAlign:'left', marginStart:20}]}>1. Kerjakan sesuai kemampuan anda.</Text>
                <Text style={[TextStyles.regular, {fontSize:18, color:"gray", textAlign:'left', marginStart:20}]}>2. Kerjakan semaksimal mungkin</Text>
                <Text style={[TextStyles.regular, {fontSize:18, color:"gray", textAlign:'left', marginStart:20}]}>3. Kerjakan dengan jujur.</Text>
                <Text style={[TextStyles.regular, {fontSize:18, color:"gray", textAlign:'left', marginStart:20}]}>4. Teliti Lebih dahulu pekerjaan kamu.</Text>
                <TouchableOpacity onPress={onClose} style={[styles.closeButton, {width:windowWidth*0.8}]}>
                    <Text style={[TextStyles.bold,{ fontSize:15, color: "white" }]}>MULAI</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  spinnerTextStyle:{
    color:"#FFD911",
  },
  closeButton: {
    backgroundColor: '#c1393d',
    padding: 10,
    borderRadius: 5,
    alignItems:'center',
    position: 'absolute', bottom: 5,
    alignSelf:'center'
  },
});

export default PopUp;