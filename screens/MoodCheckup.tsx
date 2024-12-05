import {StyleSheet, View} from 'react-native';
import React from 'react';
import CheckupButton from '../components/CheckupButton';
import Heading from '../components/Heading';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  DepressionAdult: undefined;
  AnxietyAdult: undefined;
  GeneralAnxietyAdult: undefined;
  DepressionChild: undefined;
  Score: undefined;
};

const MoodCheckup = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const buttonData = [
    {
      icon: require('../assets/social-distancing.png'),
      text: 'Social Anxiety Questionnaire for Adults',
      onPress: () => navigation.navigate('GeneralAnxietyAdult'),
    },
    {
      icon: require('../assets/traumatherapy.png'),
      text: 'Depression disorder Questionnaire for Adults',
      onPress: () => navigation.navigate('DepressionAdult'),
    },
    {
      icon: require('../assets/depression.png'),
      text: 'Depression disorder Questionnaire for child \n age 11 to 17',
      onPress: () => navigation.navigate('DepressionChild'),
    },
    {
      icon: require('../assets/anxiety.png'),
      text: 'Anxiety disorder Questionnaire for Adults',
      onPress: () => navigation.navigate('AnxietyAdult'),
    },
    {
      icon: require('../assets/loupe.png'),
      text: 'Previous Results',
      onPress: () => navigation.navigate('Score'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10}}>
        <Heading text="Mood Checkup" />
      </View>

      {buttonData.map(data => (
        <CheckupButton
          icon={data.icon}
          text={data.text}
          onPress={data.onPress}
        />
      ))}
    </View>
  );
};

export default MoodCheckup;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 80,
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: '#F0F8F6',
    height: '100%',
  },
});
