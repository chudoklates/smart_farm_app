import React, { useRef, useEffect } from 'react';
import { Actions } from 'react-native-router-flux'
import { StyleSheet, Button, View, Animated } from 'react-native';
import wladek from '../../assets/itaintmuch.jpg'

const Home = () => {
  const translateAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const loop = Animated.loop(Animated.sequence([
      Animated.delay(5000),
      Animated.timing(translateAnim, {
        toValue: -360,
        duration: 5000
      }),
      Animated.delay(1000),
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 5000
      })
    ]))

    loop.start()

    return () => loop.stop()
  })

  return (
    <View style={styles.container} >
      <Button title="View graph" onPress={Actions.graph} />
      <Animated.Image
        source={wladek}
        style={[styles.image, {
          transform: [
            { translateX: translateAnim }
          ]
        }]}
      />
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  image: {
    opacity: 0.7,
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});
