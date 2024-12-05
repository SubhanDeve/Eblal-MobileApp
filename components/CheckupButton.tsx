import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CheckupButton = (props: any) => {
  const {icon, text, onPress} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.innerContainer}>
        <View style={styles.imagebg}>
          <Image source={icon} />
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View>
        <Image source={require('../assets/arrow-down.png')} />
      </View>
    </TouchableOpacity>
  );
};

export default CheckupButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 19,
    paddingVertical: 12,
    borderRadius: 12,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  imagebg: {
    backgroundColor: '#B5DED0',
    borderRadius: 100,
    padding: 9,
  },
  text: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 18,
    color: '#3C3B43',
  },
});
