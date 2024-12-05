import {StyleSheet, Text} from 'react-native';
import React from 'react';

const QuestionHeading = (props: any) => {
  const {text} = props;
  return <Text style={styles.questionheading}>{text}</Text>;
};

export default QuestionHeading;

const styles = StyleSheet.create({
  questionheading: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 600,
    color: '#3C3B43',
  },
});
