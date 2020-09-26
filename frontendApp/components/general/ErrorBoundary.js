import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
        <View>
          <Text>Oops. something went wrong!</Text>
        </View>
      );
    } else {
      return this.props.children; 
    }
  }
}

export default ErrorBoundary
