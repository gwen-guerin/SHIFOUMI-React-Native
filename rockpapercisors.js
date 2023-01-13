import { StyleSheet, View, SafeAreaView, Text, Animated } from 'react-native';
import { useState, useRef } from 'react';
import Constants from 'expo-constants';
import DisplayResult from './DisplayResult';
import Actions from './Actions';
import Header from './Header';

export default function Shifoumi() {
  const [playerChoice, setPlayerChoice] = useState(0);
  const [aiChoice, setAiChoice] = useState(0);
  const [result, setResult] = useState('');
  const [canPlay, setPlay] = useState(true);

  const fadeAnimation = useRef(new Animated.Value(1)).current;

  function play(choice) {
    const randomComputerChoice = Math.floor(Math.random() * 3 + 1);
    let resultString = '';

    if (choice === 1) {
      resultString = randomComputerChoice === 3 ? 'WIN' : 'LOSE';
    } else if (choice === 2) {
      resultString = randomComputerChoice === 1 ? 'WIN' : 'LOSE';
    } else {
      resultString = randomComputerChoice === 2 ? 'WIN' : 'LOSE';
    }

    if (choice === randomComputerChoice) {
      resultString = 'DRAW';
    }

    setPlayerChoice(choice);
    setAiChoice(randomComputerChoice);

    setTimeout(() => {
      setResult(resultString);
    }, 300);
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    setPlay(false);
    setTimeout(() => {
      setPlay(true);
    }, 600);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.result}>
          <Animated.Text
            style={[styles.resultText, { opacity: fadeAnimation }]}
          >
            {result}
          </Animated.Text>
        </View>
        <View style={styles.screen}>
          {!result ? (
            <Text style={styles.readyText}> Let's Play</Text>
          ) : (
            <DisplayResult playerChoice={playerChoice} aiChoice={aiChoice} />
          )}
        </View>
        <Actions play={play} canPlay={canPlay} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'yellow'
  },
  content: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: 'e8eaed',
  },
  result: {
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  screen: {
    flex: 1,
    flexDirection: 'row',
  },
  readyText: {
    marginTop: -48,
    alignSelf: 'center',
    textAlign: 'center',
    width: '100%',
    fontSize: 48,
    fontWeight: 'bold',
  },
});
