import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Container = ({ children, justifyContent }) => {
  return (
    <View style={{ flex: 1, justifyContent: justifyContent, alignItems: 'center', backgroundColor: "#c1393d" }}>
      {children}
    </View>
  );
};

export default Container

const styles = StyleSheet.create({})