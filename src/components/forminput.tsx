import React from 'react';
import { View, Dimensions, TextInput, StyleSheet, Text } from 'react-native';
import TextStyles from '../assets/fonts';
const FormInput = ({ value, setValue, placeholder, keyboardType }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  return (
      <View>
        <View style={[styles.container, {width:windowWidth*0.8, borderRadius:windowWidth*0.01}]}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                placeholderTextColor="#D9D9D9" // Apply custom color to the placeholder text
                style={[TextStyles.regularSmall, {color:"white"}]}
                keyboardType={keyboardType}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#573529',
    borderColor:'gray',
    borderWidth:2,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginBottom: 10,
  },
});

export default FormInput;