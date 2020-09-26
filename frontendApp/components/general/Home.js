import React from 'react';
import { Actions } from 'react-native-router-flux'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container} >
      <TouchableOpacity onPress={Actions.graph}>
        <Text style={styles.text}>
          View graph
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  },
  container: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
