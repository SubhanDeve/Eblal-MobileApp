import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const QuestionPageHeading = (props: any) => {
  const {text} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textbg}>{text}</Text>
    </View>
  );
};

export default QuestionPageHeading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D1EBE2',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  textbg: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 27,
    color: '#3C3B43',
  },
});
