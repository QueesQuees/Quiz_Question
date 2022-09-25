import {
  faFaceSadTear,
  faFaceGrinStars,
} from '@fortawesome/free-solid-svg-icons';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ModalCustom from '../../components/ModalCustom';
import Screen from '../../components/Screen';
import {QuestionsList} from '../../constant/questions';
import Question from './components/Question';
import styles from './index.styles';
import {imageRanks} from '../../constant/imageRanks';
import Menu from '../../components/Menu/menu';
import {faAngleLeft} from '@fortawesome/sharp-solid-svg-icons';

const PlayGame: React.FC = ({navigation}) => {
  // random number for next question
  const [numberForRamdom, setNumberForRamdom] = useState(10);
  // Timer for a question
  const [countDown, setCountDown] = useState(5);
  // Consecutive questions answered correctly
  const [point, setPoint] = useState(0);

  // Stop question when the answer wrong
  const [stop, setStop] = useState(false);

  // Question Level 10/20/50/100/500
  const [level, setLevel] = useState(1);
  const [imgRank, setImgRank] = useState(imageRanks?.rank1);
  useEffect(() => {
    switch (level) {
      case 1:
        setImgRank(imageRanks?.rank1);
        return;
      case 2:
        setImgRank(imageRanks?.rank2);
        return;
      case 3:
        setImgRank(imageRanks?.rank3);
        return;
      case 4:
        setImgRank(imageRanks?.rank4);
        return;
      default:
        setImgRank(imageRanks?.rank1);
    }
  }, [level]);
  // List of questions answered
  const numberFirstQuestion = Math.floor(Math.random() * numberForRamdom);
  const [listOfQuestionsAnswered, setListOfQuestionsAnswered] = useState<any[]>(
    [numberFirstQuestion],
  );

  const [modalAnswerWrong, setModalAnswerWrong] = useState<any>(false);
  const [modalNextLevel, setModalNextLevel] = useState<any>(false);

  const [questionList, setQuestionList] = useState(
    QuestionsList?.QuestionsList10,
  );

  /* handle countdown*/
  useEffect(() => {
    const interval = setInterval(() => {
      if (countDown <= 0 || stop) {
        () => clearInterval(interval);
      } else {
        setCountDown(countDown - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown, stop]);

  useEffect(() => {
    if (countDown === 0) {
      setStop(true);
      setPoint(0);
      setListOfQuestionsAnswered([]);
      const random = Math.floor(Math.random() * numberForRamdom);
      setCurrentQuestion(questionList[random]);
      setCountDown(5);
      setModalAnswerWrong(true);
    }
  }, [countDown, numberForRamdom, questionList]);

  /*find the current question in the question list*/
  const [currentQuestion, setCurrentQuestion] = useState(
    questionList[numberFirstQuestion],
  );

  useEffect(() => {
    setCurrentQuestion(
      questionList[Math.floor(Math.random() * numberForRamdom)],
    );
  }, [numberForRamdom, questionList]);

  /* Handle when the player answer the question: true or false */
  const handleAnswer = useCallback(
    (answer: any) => {
      console.log(answer);
      const rightAnswer = currentQuestion.rightAnswer;

      if (answer !== rightAnswer) {
        /*handle when the answer wrong*/
        setStop(true);
        setPoint(0);
        const random = Math.floor(Math.random() * numberForRamdom);
        setListOfQuestionsAnswered([random]);
        setCurrentQuestion(questionList[random]);
        setCountDown(5);
        setModalAnswerWrong(true);
        console.log('sai');
      } else if (answer === rightAnswer) {
        /*handle when the answer correct*/
        setPoint(point + 1);
        setCountDown(5);
        let random = Math.floor(Math.random() * numberForRamdom);
        // Checking questions to avoid duplication
        let haveQuestion = listOfQuestionsAnswered.includes(random);
        while (haveQuestion) {
          random = Math.floor(Math.random() * numberForRamdom);
          haveQuestion = listOfQuestionsAnswered.includes(random);
          console.log(haveQuestion, random, listOfQuestionsAnswered);
        }
        setCurrentQuestion(questionList[random]);
        setListOfQuestionsAnswered([...listOfQuestionsAnswered, random]);
      }
    },
    [
      currentQuestion.rightAnswer,
      listOfQuestionsAnswered,
      numberForRamdom,
      point,
      questionList,
    ],
  );
  console.log('listOfQuestionsAnswered', listOfQuestionsAnswered);
  /*handle Level Of Question*/
  useMemo(() => {
    switch (level) {
      case 1:
        if (point === 4) {
          setStop(true);
          setLevel(2);
          setQuestionList(QuestionsList?.QuestionsList20);
          setNumberForRamdom(QuestionsList?.QuestionsList20.length);
          setPoint(0);
          setModalNextLevel(true);
        }
        return;
      case 2:
        if (point === 19) {
          setStop(true);
          setLevel(3);
          setQuestionList(QuestionsList?.QuestionsList30);
          setNumberForRamdom(QuestionsList?.QuestionsList30.length);
          setPoint(0);
          setModalNextLevel(true);
        }
        return;
    }
  }, [level, point]);

  return (
    <>
      <Screen>
        <Menu onPress={() => navigation.goBack()} icon={faAngleLeft} />
        <View style={styles.container}>
          <View style={styles.pointContainer}>
            <View style={styles.rankContent}>
              <Text style={styles.level}>Your Rank:</Text>
              <Image style={styles.imageRank} source={imgRank} />
            </View>

            <Text style={styles.point}>Current score: {point}</Text>
          </View>

          {/* Content Questions */}
          <Question
            contentQuestions={currentQuestion?.Questions}
            countDown={countDown}
          />
          {/* Number of correct answers in a row / On the total number of questions */}

          {/* List of answers to the question */}
          <View style={styles.answerContainer}>
            <TouchableOpacity
              style={styles.btnAnswer}
              onPress={() => handleAnswer('A')}>
              <Text style={styles.answer}>A. {currentQuestion.answer?.A}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnAnswer}
              onPress={() => handleAnswer('B')}>
              <Text style={styles.answer}>B. {currentQuestion.answer?.B}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnAnswer}
              onPress={() => handleAnswer('C')}>
              <Text style={styles.answer}>C. {currentQuestion.answer?.C}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnAnswer}
              onPress={() => handleAnswer('D')}>
              <Text style={styles.answer}>D. {currentQuestion.answer?.D}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Screen>
      {/* modal notification answer wrong */}
      <ModalCustom
        visible={modalAnswerWrong}
        onPressPrimary={() => {
          setStop(false);
          setModalAnswerWrong(false);
        }}
        icon={faFaceSadTear}
        discription={'Sorry for the wrong answer, we have to start over'}
        textPrimary={'Start over'}
      />

      {/* modal notification next level */}
      <ModalCustom
        visible={modalNextLevel}
        onPressPrimary={() => {
          setStop(false);
          setModalNextLevel(false);
        }}
        icon={faFaceGrinStars}
        discription={
          "Congratulation. Let's start with the next level now. It will be moredifficult"
        }
        textPrimary={'The next level'}
      />
    </>
  );
};

export default PlayGame;
