import React from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import TextStyles from '../assets/fonts';
const Loading = ({visible}) => {
  return (
    <View>
        <Modal visible={visible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <Spinner
              visible={visible}
              textContent={'Loading...'}
              textStyle={[styles.spinnerTextStyle, TextStyles.regularSmall]}
            />
          </View>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  spinnerTextStyle:{
    color:"#FFD911",
  }
});

export default Loading;