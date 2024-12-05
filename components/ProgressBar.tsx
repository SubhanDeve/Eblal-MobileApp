import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

const ProgressBar = (props: any) => {
  const {divide, progress, width} = props;
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={progress}
        width={width}
        borderColor="#ffffff"
        color="#D1EBE2"
        unfilledColor="#F1F9F6"
      />
      <Text style={styles.divide}>{divide}</Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  divide: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 18,
    color: '#61606C',
  },
});
