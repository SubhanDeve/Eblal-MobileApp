import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function DescriptionText(props: any) {
  const {text, textAlign} = props;
  return (
    <View>
      <Text style={[styles.innerText, {textAlign: textAlign}]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  innerText: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 21,
    color: '#61606C',
  },
});
