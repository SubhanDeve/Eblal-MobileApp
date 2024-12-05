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

export default function DepressionChild() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracking index for questions
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({}); // Store selected answers by question ID

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const questionsData = [
    {
      id: 1,
      pageHeading: 'Depression Disorder Questionnaire for Child age 11 to 177',
      questionHeading: '1. Feeling down, depressed, irritable, or hopeless?',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Not at all', value: 'option 1'},
        {text: 'Several days', value: 'option 2'},
        {text: 'More than half the days', value: 'option 3'},
        {text: 'Nearly every day', value: 'option 4'},
      ],
    },
    {
      id: 2,
      pageHeading: 'Depression Disorder Questionnaire for Child age 11 to 177',
      questionHeading: '2. Little interest or pleasure in doing things?',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Not at all', value: 'option 1'},
        {text: 'Several days', value: 'option 2'},
        {text: 'More than half the days', value: 'option 3'},
        {text: 'Nearly every day', value: 'option 4'},
      ],
    },
    {
      id: 3,
      pageHeading: 'Depression Disorder Questionnaire for Child age 11 to 177',
      questionHeading:
        '3. Trouble falling asleep, staying asleep, or sleeping too  much?',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Not at all', value: 'option 1'},
        {text: 'Several days', value: 'option 2'},
        {text: 'More than half the days', value: 'option 3'},
        {text: 'Nearly every day', value: 'option 4'},
      ],
    },
    {
      id: 4,
      pageHeading: 'Depression Disorder Questionnaire for Child age 11 to 177',
      questionHeading: '4. Poor appetite, weight loss, or overeating?',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Not at all', value: 'option 1'},
        {text: 'Several days', value: 'option 2'},
        {text: 'More than half the days', value: 'option 3'},
        {text: 'Nearly every day', value: 'option 4'},
      ],
    },
    {
      id: 5,
      pageHeading: 'Depression Disorder Questionnaire for Child age 11 to 177',
      questionHeading: '5. Feeling tired, or having little energy?',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Not at all', value: 'option 1'},
        {text: 'Several days', value: 'option 2'},
        {text: 'More than half the days', value: 'option 3'},
        {text: 'Nearly every day', value: 'option 4'},
      ],
    },
    {
      id: 6,
      pageHeading: 'Depression Disorder Questionnaire for Child age 11 to 177',
      questionHeading:
        '6. Feeling bad about yourself—or feeling that you are a  failure, or that you have let yourself or your family  down?',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Not at all', value: 'option 1'},
        {text: 'Several days', value: 'option 2'},
        {text: 'More than half the days', value: 'option 3'},
        {text: 'Nearly every day', value: 'option 4'},
      ],
    },
    {
      id: 7,
      pageHeading: 'Depression Disorder Questionnaire for Child age 11 to 177',
      questionHeading:
        '7. Trouble concentrating on things like school work,  reading, or watching TV?',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Not at all', value: 'option 1'},
        {text: 'Several days', value: 'option 2'},
        {text: 'More than half the days', value: 'option 3'},
        {text: 'Nearly every day', value: 'option 4'},
      ],
    },
    {
      id: 8,
      pageHeading: 'Depression Disorder Questionnaire for Child age 11 to 177',
      questionHeading:
        '8. Moving or speaking so slowly that other people could  have noticed?',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Not at all', value: 'option 1'},
        {text: 'Several days', value: 'option 2'},
        {text: 'More than half the days', value: 'option 3'},
        {text: 'Nearly every day', value: 'option 4'},
      ],
    },
    {
      id: 9,
      pageHeading: 'Depression Disorder Questionnaire for Child age 11 to 177 ',
      questionHeading:
        '9. Thoughts that you would be better off dead, or of  hurting yourself in some way?',
      redText: 'Symptoms during the past 7 days',
      options: [
        {text: 'Not at all', value: 'option 1'},
        {text: 'Several days', value: 'option 2'},
        {text: 'More than half the days', value: 'option 3'},
        {text: 'Nearly every day', value: 'option 4'},
      ],
    },
    // Add more questions here...
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
