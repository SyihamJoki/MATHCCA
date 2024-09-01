import React from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, Dimensions } from 'react-native';
import TextStyles from '../assets/fonts';
const AbiltyTestPopUp = ({visible, onClose, onPress, closeAndGoBack = false, navigation}) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const handleClose = () => {
        if (closeAndGoBack) {
            navigation.goBack(); // Navigasi kembali ke halaman sebelumnya
        } else {
            onClose(); // Hanya menutup modal
        }
    };

    return (
        <View>
            <Modal visible={visible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={{
                        position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor:'white', 
                        height:windowHeight*0.4, padding:10, borderTopStartRadius:10, borderTopEndRadius:10,
                    }}>
                        <Text style={[TextStyles.bold, {color:"black", fontSize:20, marginBottom:25, textAlign:'center'}]}>
                            Haloo Pengguna{'\n'} <Text style={[TextStyles.carubanRegular]}>MATHCCA</Text>
                        </Text>
                        <Text style={[TextStyles.regular, {fontSize:18, color:"gray", textAlign:'justify'}]}>
                            Mohon maaf anda saat ini belum mengerjakan Tes Kemampuan. Jadi saat ini anda belum bisa membuka fitur Materi dan Soal.
                        </Text>
                        <TouchableOpacity onPress={onPress} style={[styles.button, {width:windowWidth*0.8, height:windowHeight*0.06}]}>
                            <Text style={[TextStyles.bold,{ fontSize:15, color: "white" }]}>Kerjakan Tes Kemampuan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleClose} style={[styles.closeButton, {width:windowWidth*0.8, height:windowHeight*0.06}]}>
                            <Text style={[TextStyles.bold,{ fontSize:15, color: "white" }]}>Tutup</Text>
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
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    alignItems:'center',
    alignSelf:'center',
    marginTop:20,
    marginBottom:10
  },
  closeButton: {
    backgroundColor: '#c1393d',
    padding: 10,
    borderRadius: 5,
    alignItems:'center',
    alignSelf:'center'
  },
});

export default AbiltyTestPopUp;