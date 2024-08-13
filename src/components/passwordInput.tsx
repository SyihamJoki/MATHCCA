import React, { useState } from 'react';
import { View, Pressable, TextInput, StyleSheet, Dimensions, Text } from 'react-native';
//import Font from '../assets/fonts/font';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TextStyles from '../assets/fonts';

const PasswordInput = ({ onPasswordChange }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);

    const handlePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        // Pass the password value to the parent component
        if (onPasswordChange) {
        onPasswordChange(text);
        }
    };

  return (
    <View>
        <View style={[styles.container, {width:windowWidth*0.8, borderRadius:windowWidth*0.01}]}>
        <TextInput
            style={[styles.input, TextStyles.regularSmall]}
            placeholder="Masukkan Password"
            placeholderTextColor={'#D9D9D9'}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry={passwordVisibility}
            value={password}
            enablesReturnKeyAutomatically
            onChangeText={handlePasswordChange} // Call the handlePasswordChange function
        />
        <Pressable onPress={handlePasswordVisibility} style={{ justifyContent: 'center' }}>
            <FontAwesome5 name={passwordVisibility ? 'eye' : 'eye-slash'} size={20} color="white" />
        </Pressable>
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
    flexDirection: 'row',
  },
  input: {
    width: '90%',
    color: 'white',
  },
});

export default PasswordInput;