import React from 'react';
import { Actions } from 'react-native-router-flux'
import { StyleSheet, Dimensions, View } from 'react-native';
import { VictoryChart, VictoryLine } from 'victory-native'

const sampleData = [
  { a: new Date(1982, 1, 1), b: 125 },
  { a: new Date(1987, 1, 1), b: 257 },
  { a: new Date(1993, 1, 1), b: 345 },
  { a: new Date(1997, 1, 1), b: 515 },
  { a: new Date(2001, 1, 1), b: 132 },
  { a: new Date(2005, 1, 1), b: 305 },
  { a: new Date(2011, 1, 1), b: 270 },
  { a: new Date(2015, 1, 1), b: 470 }
]

const Graph = () => {
  const { width } = Dimensions.get("screen")
  return (
    <View style={styles.container}>
      <VictoryChart width={width - 20} height={350} scale={{ x: "time" }} >
      <VictoryLine
        style={{
          data: { stroke: "tomato" }
        }}
        data={sampleData}
        x="a"
        y="b"
      />
      </VictoryChart>
    </View>
  );
}

export default Graph

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});