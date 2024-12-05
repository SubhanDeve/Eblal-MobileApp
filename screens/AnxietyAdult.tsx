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

export default function AnxietyAdult() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracking index for questions
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({}); // Store selected answers by question ID

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const questionsData = [
    {
      id: 1,
      pageHeading:
        'Severity Measure for Social Anxiety Disorder (Social Phobia)—Adult',
      questionHeading:
        '1. Felt moments of sudden terror, fear, or  fright in social situations',
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
      pageHeading:
        'Severity Measure for Social Anxiety Disorder (Social Phobia)—Adult',
      questionHeading:
        '2. Felt anxious, worried, or nervous about  social situations',
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
      pageHeading:
        'Severity Measure for Social Anxiety Disorder (Social Phobia)—Adult',
      questionHeading:
        '3. Had thoughts of being rejected, humiliated,  embarrassed, ridiculed, or offending others',
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
      pageHeading:
        'Severity Measure for Social Anxiety Disorder (Social Phobia)—Adult',
      questionHeading:
        '4. Felt a racing heart, sweaty, trouble  breathing, faint, or shaky in social  situations',
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
      pageHeading:
        'Severity Measure for Social Anxiety Disorder (Social Phobia)—Adult',
      questionHeading:
        '5. Felt tense muscles, felt on edge or restless,  or had trouble relaxing in social situations',
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
      pageHeading:
        'Severity Measure for Social Anxiety Disorder (Social Phobia)—Adult',
      questionHeading:
        '6. Avoided, or did not approach or enter, social situations',
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
      pageHeading:
        'Severity Measure for Social Anxiety Disorder (Social Phobia)—Adult',
      questionHeading:
        '7. Left social situations early or participated  only minimally (e.g., said little, avoided eye  contact)',
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
      pageHeading:
        'Severity Measure for Social Anxiety Disorder (Social Phobia)—Adult',
      questionHeading:
        '8. Spent a lot of time preparing what to say or  how to act in social situations',
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
      pageHeading:
        'Severity Measure for Social Anxiety Disorder (Social Phobia)—Adult',
      questionHeading:
        '9. Distracted myself to avoid thinking about  social situations',
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
      pageHeading:
        'Severity Measure for Social Anxiety Disorder (Social Phobia)—Adult',
      questionHeading:
        '10. Needed help to cope with social situations  (e.g., alcohol or medications, superstitious  objects)',
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
