import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../components/Button';

const Score = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Result.png')}
        style={styles.background}
        resizeMode="cover"
      />
      <View style={styles.innerBox}>
        <Image source={require('../assets/Thinking.png')} />
        <View>
          <Text style={styles.text1}>40</Text>
          <Text style={styles.text2}>Points</Text>
          <Text style={styles.text3}>
            You got 40 points that's mean you have severe depression.
          </Text>
          <View style={styles.buttonsec}>
            <Button text="Book an Appointment" bgcolor="#B5DED0" />
            <Button text="Go to Home" bgcolor="#F0F8F6" />
            <Button text="More Test" bgcolor="#FFFFFF" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  innerBox: {
    paddingTop: 46,
    paddingHorizontal: 20,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
  },
  text1: {
    fontSize: 85,
    fontWeight: 600,
    lineHeight: 127,
    color: '#FF3636',
    textAlign: 'center',
  },
  text2: {
    fontSize: 38,
    fontWeight: 500,
    lineHeight: 57,
    color: '#3C3B43',
    textAlign: 'center',
  },
  text3: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 30,
    color: '#3C3B43',
    textAlign: 'center',
  },
  buttonsec: {
    paddingTop: 12,
    display: 'flex',
    gap: 8,
  },
});
