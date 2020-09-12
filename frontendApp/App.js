import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Being a complete fucking retard
      </Text>
      <Image
        style={styles.wujekWladek}
        source={require('./assets/itaintmuch.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wujekWladek: {
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width,
    resizeMode: 'stretch'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  }
});
