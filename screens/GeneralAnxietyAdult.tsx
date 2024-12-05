import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Optionsec from '../components/Optionsec';
import QuestionHeading from '../components/QuestionHeading';
import Button from '../components/Button';
import QuestionPageHeading from '../components/QuestionPageHeading';
import ProgressBar from '../components/ProgressBar';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  Score: undefined;
};

export default function GeneralAnxietyAdult() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracking index for questions
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({}); // Store selected answers by question ID

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const questionsData = [
    {
      id: 1,
      pageHeading: 'General Anxiety disorder questionnaire for adults',
      questionHeading: '1. Felt moments of sudden terror, fear, or  fright',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Never', value: 'option 1'},
        {text: 'Occasionally', value: 'option 2'},
        {text: 'Half of the time', value: 'option 3'},
        {text: 'Most of the time', value: 'option 4'},
        {text: 'All of the time', value: 'option 5'},
      ],
    },
    {
      id: 2,
      pageHeading: 'General Anxiety disorder questionnaire for adults',
      questionHeading: '2. Felt anxious, worried, or nervous',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Never', value: 'option 1'},
        {text: 'Occasionally', value: 'option 2'},
        {text: 'Half of the time', value: 'option 3'},
        {text: 'Most of the time', value: 'option 4'},
        {text: 'All of the time', value: 'option 5'},
      ],
    },
    {
      id: 3,
      pageHeading: 'General Anxiety disorder questionnaire for adults',
      questionHeading:
        '3. had thoughts of bad things happening, such  as family tragedy, ill health, loss of a job, or  accidents',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Never', value: 'option 1'},
        {text: 'Occasionally', value: 'option 2'},
        {text: 'Half of the time', value: 'option 3'},
        {text: 'Most of the time', value: 'option 4'},
        {text: 'All of the time', value: 'option 5'},
      ],
    },
    {
      id: 4,
      pageHeading: 'General Anxiety disorder questionnaire for adults',
      questionHeading:
        '4. Felt a racing heart, sweaty, trouble  breathing, faint, or shaky',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Never', value: 'option 1'},
        {text: 'Occasionally', value: 'option 2'},
        {text: 'Half of the time', value: 'option 3'},
        {text: 'Most of the time', value: 'option 4'},
        {text: 'All of the time', value: 'option 5'},
      ],
    },
    {
      id: 5,
      pageHeading: 'General Anxiety disorder questionnaire for adults',
      questionHeading:
        '5. Felt tense muscles, felt on edge or restless,  or had trouble relaxing or trouble sleeping',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Never', value: 'option 1'},
        {text: 'Occasionally', value: 'option 2'},
        {text: 'Half of the time', value: 'option 3'},
        {text: 'Most of the time', value: 'option 4'},
        {text: 'All of the time', value: 'option 5'},
      ],
    },
    {
      id: 6,
      pageHeading: 'General Anxiety disorder questionnaire for adults',
      questionHeading:
        '6. Avoided, or did not approach or enter,  situations about which I worry',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Never', value: 'option 1'},
        {text: 'Occasionally', value: 'option 2'},
        {text: 'Half of the time', value: 'option 3'},
        {text: 'Most of the time', value: 'option 4'},
        {text: 'All of the time', value: 'option 5'},
      ],
    },
    {
      id: 7,
      pageHeading: 'General Anxiety disorder questionnaire for adults',
      questionHeading:
        '7. Left situations early or participated only  minimally due to worries ',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Never', value: 'option 1'},
        {text: 'Occasionally', value: 'option 2'},
        {text: 'Half of the time', value: 'option 3'},
        {text: 'Most of the time', value: 'option 4'},
        {text: 'All of the time', value: 'option 5'},
      ],
    },
    {
      id: 8,
      pageHeading: 'General Anxiety disorder questionnaire for adults',
      questionHeading:
        '8. Spent lots of time making decisions, putting  off making decisions, or preparing for  situations, due to worries',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Never', value: 'option 1'},
        {text: 'Occasionally', value: 'option 2'},
        {text: 'Half of the time', value: 'option 3'},
        {text: 'Most of the time', value: 'option 4'},
        {text: 'All of the time', value: 'option 5'},
      ],
    },
    {
      id: 9,
      pageHeading: 'General Anxiety disorder questionnaire for adults',
      questionHeading: '9. Sought reassurance from others due to  worries',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Never', value: 'option 1'},
        {text: 'Occasionally', value: 'option 2'},
        {text: 'Half of the time', value: 'option 3'},
        {text: 'Most of the time', value: 'option 4'},
        {text: 'All of the time', value: 'option 5'},
      ],
    },
    {
      id: 10,
      pageHeading: 'General Anxiety disorder questionnaire for adults',
      questionHeading:
        '10. Needed help to cope with anxiety (e.g.,  alcohol or medication, superstitious  objects, or other people)',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Never', value: 'option 1'},
        {text: 'Occasionally', value: 'option 2'},
        {text: 'Half of the time', value: 'option 3'},
        {text: 'Most of the time', value: 'option 4'},
        {text: 'All of the time', value: 'option 5'},
      ],
    },
  ];

  const handleOptionPress = (value: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionsData[currentQuestionIndex].id]: value,
    }));
  };

  const handleNext = () => {
    const currentQuestion = questionsData[currentQuestionIndex];
    console.log(
      `Selected answer for question ${currentQuestion.id}:`,
      selectedAnswers[currentQuestion.id],
    );

    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to next question
    } else {
      console.log('Questionnaire completed:', selectedAnswers);
      navigation.navigate('Score'); // Navigate to the Score screen
    }
  };

  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <ProgressBar
          progress={(currentQuestionIndex + 1) / questionsData.length}
          width={330}
          divide={`${currentQuestionIndex + 1}/${questionsData.length}`}
        />
      </View>
      <View style={styles.body}>
        <QuestionPageHeading text={currentQuestion.pageHeading} />
        <Text style={styles.redText}>{currentQuestion.redText}</Text>
        <View style={styles.options}>
          <QuestionHeading text={currentQuestion.questionHeading} />
          {currentQuestion.options.map((option, index) => (
            <Optionsec
              key={index}
              text={option.text}
              isSelected={selectedAnswers[currentQuestion.id] === option.value}
              onPress={() => handleOptionPress(option.value)}
            />
          ))}
        </View>
      </View>
      <View style={styles.buttonSec}>
        <Button
          text="Next"
          bgcolor="#D1EBE2"
          color="#3C3B43"
          onPress={handleNext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  progress: {
    marginTop: 18,
  },
  body: {
    top: 60,
  },
  redText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#FF3636',
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    paddingTop: 32,
  },
  buttonSec: {
    top: 190,
  },
});
