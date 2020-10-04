import React from 'react';
import { Actions } from 'react-native-router-flux'
import { StyleSheet, Dimensions, View } from 'react-native';
import { VictoryChart, VictoryLine } from 'victory-native'

const sampleData = [
  { time: new Date("2020-10-04T13:19:00Z"), moisture: 99.3 },
  { time: new Date("2020-10-04T13:20:00Z"), moisture: 98.4 },
  { time: new Date("2020-10-04T13:21:00Z"), moisture: 95.4 },
  { time: new Date("2020-10-04T13:22:00Z"), moisture: 92.1 },
  { time: new Date("2020-10-04T13:23:00Z"), moisture: 89.2 },
  { time: new Date("2020-10-04T13:24:00Z"), moisture: 88.1 },
  { time: new Date("2020-10-04T13:25:00Z"), moisture: 86.2 },
  { time: new Date("2020-10-04T13:26:00Z"), moisture: 83.5 }
]

const Graph = () => {
  const { width } = Dimensions.get("screen")
  return (
    <View style={styles.container}>
      <VictoryChart width={width - 20} height={350} scale={{ x: "time" }} >
      <VictoryLine
        style={{
          data: { stroke: "royalblue" }
        }}
        data={sampleData}
        x="time"
        y="moisture"
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