import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ErrorBoundary extends Component {
  state = {
    error: null
  }
  
  static getDerivedStateFromError (error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render () {
    if(this.state.error) {
      console.error(this.state.error)
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Oops. something went wrong!</Text>
        </View>
      );
    } else {
      return this.props.children; 
    }
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ErrorBoundary
