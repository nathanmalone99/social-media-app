import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: 'black' }]}>
       <Text style={styles.text}>Hello World</Text>
    </View>
  );
}


