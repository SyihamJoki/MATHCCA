const Font ={
    font:{
        regular: 'Roboto-Regular',
        bold: 'Roboto-Bold',
        semibold: 'Roboto-Medium',
        caruban: 'Caruban',
        BerkshireSwash: 'BerkshireSwash-Regular',
    },
}

import { StyleSheet } from 'react-native';

const TextStyles = StyleSheet.create({
  semiboldSmall: {
    fontFamily:Font.font.semibold,
    fontSize:15,
  },
  boldSmall: {
    fontFamily:Font.font.bold,
    fontSize:15,
  },
  regularSmall: {
    fontFamily:Font.font.regular,
    fontSize:15,
  },
  boldLarge: {
    fontFamily:Font.font.bold,
    fontSize: 24,
  },
  regularLarge: {
    fontFamily:Font.font.regular,
    fontSize: 24,
  },
  semibold: {
    fontFamily: Font.font.semibold, // Ganti dengan nama font keluarga Anda
  },
  bold: {
    fontFamily: Font.font.semibold, // Ganti dengan nama font keluarga Anda
  },
  regular: {
    fontFamily: Font.font.regular, // Ganti dengan nama font keluarga Anda
  },
  carubanRegular:{
    fontFamily: Font.font.caruban,
  },
  BerkshireSwash:{
    fontFamily: Font.font.BerkshireSwash,
  },
  carubanRegular:{
    fontFamily: Font.font.caruban,
  },
  carubanSemiBold:{
    fontFamily: Font.font.caruban,
    fontWeight:'500'
  },
  carubanBold:{
    fontFamily: Font.font.caruban,
    fontWeight:'bold'
  },
});

export default TextStyles;