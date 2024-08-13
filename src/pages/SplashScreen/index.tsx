import { Image, StyleSheet, Text, View, Dimensions} from 'react-native'
import React, {useEffect} from 'react'
import Container from '../../components/container'
import TextStyles from '../../assets/fonts'
const SplashScreen = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
    useEffect(() =>{
        setTimeout(() =>{
            navigation.replace('Login')
        }, 2000);
    });
  return (
    <Container justifyContent={"center"}>
      <View>
      <Image 
          source={require("../../assets/image/Logo.png")} 
          style={[{height: windowHeight * 0.33, width: windowWidth * 0.49}]} 
          resizeMode='contain' 
        />
      <Text style={[TextStyles.carubanRegular, {fontSize:50, color:'black'}]}>MATHCCA</Text>

      </View>
    </Container>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})