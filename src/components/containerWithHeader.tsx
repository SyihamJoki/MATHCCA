import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextStyles from '../assets/fonts';

const ContainerWithHeader = ({title, children }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
    <View style={[styles.header, { width: windowWidth, height:windowHeight*0.07 }]}>
      <Text style={[TextStyles.BerkshireSwash,{color:"white", fontSize:20}]}>{title}</Text>
    </View>
    <View style={styles.content}>
        {children}
    </View>
  </View>
  )
}

export default ContainerWithHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#4F2305'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#c1393d",
    },
})