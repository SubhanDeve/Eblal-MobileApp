import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Optionsec from '../components/Optionsec';
import QuestionHeading from '../components/QuestionHeading';
import Button from '../components/Button';
import QuestionPageHeading from '../components/QuestionPageHeading';
import ProgressBar from '../components/ProgressBar';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import MultipleOptionsec from '../components/MultipleOptionsec';

type RootStackParamList = {
  Score: undefined;
};

export default function McqPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracking index for questions
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({}); // Store selected answers by question ID

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const questionsData = [
    {
      id: 1,
      pageHeading: 'Depression Disorder Questionnaire for Child age 11 to 177',
      questionHeading: '1. Little interest or pleasure in doing things',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Not at all', value: 'option 1'},
        {text: 'Several days', value: 'option 2'},
      ],
      options2: [
        {text: 'More than half the days', value: 'option 3'},
        {text: 'Nearly every day', value: 'option 4'},
      ],
    },
    {
      id: 2,
      pageHeading: 'Depression Disorder Questionnaire for Child age 11 to 177',
      questionHeading: '2. Feeling down, depressed, or hopeless ',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Not at all', value: 'option 1'},
        {text: 'Several days', value: 'option 2'},
        {text: 'More than half the days', value: 'option 3'},
        {text: 'Nearly every day', value: 'option 4'},
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
        <Text style={styles.pageHeading}>{currentQuestion.pageHeading}</Text>
        <Text style={styles.redText}>{currentQuestion.redText}</Text>
        <View style={styles.options}>
          <Text style={styles.questionHeading}>
            {currentQuestion.questionHeading}
          </Text>
          <View style={styles.multipleOptions}>
            <View style={styles.innerOptions}>
              {currentQuestion.options.map((option, index) => (
                <MultipleOptionsec
                  key={index}
                  text={option.text}
                  isSelected={
                    selectedAnswers[currentQuestion.id] === option.value
                  }
                  onPress={() => handleOptionPress(option.value)}
                />
              ))}
            </View>
            <View style={styles.innerOptions}>
              {currentQuestion.options2?.map((option, index) => (
                <MultipleOptionsec
                  key={index}
                  text={option.text}
                  isSelected={
                    selectedAnswers[currentQuestion.id] === option.value
                  }
                  onPress={() => handleOptionPress(option.value)}
                />
              ))}
            </View>
          </View>
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
    top: 30,
  },
  pageHeading: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 30,
    color: '#3C3B43',
  },
  redText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#FF3636',
  },
  questionHeading: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
    color: '#3C3B43',
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    paddingTop: 32,
  },
  multipleOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  innerOptions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSec: {
    top: 190,
  },
});
