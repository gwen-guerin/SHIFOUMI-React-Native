import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Actions({ play, canPlay }) {
  return (
    <View style={styles.actions}>
      <TouchableOpacity
        disabled={!canPlay}
        style={styles.actionButton}
        onPress={() => play(1)}
      >
        <FontAwesome5 name={'hand-rock'} size={50} color="#6a5300" />
        <Text>ROCK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!canPlay}
        style={styles.actionButton}
        onPress={() => play(2)}
      >
        <FontAwesome5 name={'hand-paper'} size={50} color="#6a5300" />
        <Text>PAPER</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!canPlay}
        style={styles.actionButton}
        onPress={() => play(3)}
      >
        <FontAwesome5
          name={'hand-scissors'}
          size={50}
          color="#6a5300"
          style={{ transform: [{ rotate: '67deg' }] }}
        />
        <Text>SCISSORS</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  actions: {
    height: 300,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionButton: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'f9d835',
    borderRadius: 32,
  },
});
