import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Heading(props: any) {
  const {text, textAlign} = props;
  return (
    <View>
      <Text style={[styles.heading, {textAlign: textAlign}]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 33,
    color: '#3C3B43',
  },
});
