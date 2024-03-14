import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Pressable } from 'react-native';

const SolveScreen = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');

  const solve = () => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      Alert.alert('Vui lòng nhập số cho các hệ số a, b và c');
      return;
    }

    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      Alert.alert('Phương trình vô nghiệm');
    } else if (delta === 0) {
      const solution = -b / (2 * a);
      Alert.alert(`Phương trình có nghiệm kép: x1 = x2 = ${solution}`);
    } else {
      const sqrtDelta = Math.sqrt(delta);
      const x1 = (-b + sqrtDelta) / (2 * a);
      const x2 = (-b - sqrtDelta) / (2 * a);
      Alert.alert(`Nghiệm của phương trình là: x1 = ${x1}, x2 = ${x2}`);
    }
  };

  return (
    <View>
      <Text style={styles.heading}>Quadratic Equation Calculator</Text>
      <Text style={styles.subHeading}>y = ax2 + bx + c</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="A"
          placeholderTextColor={'#fff'}
          onChangeText={(text) => setA(Number(text))}
        />
        <TextInput
          style={styles.input}
          placeholder="B"
          placeholderTextColor={'#fff'}
          onChangeText={(text) => setB(Number(text))}
        />
        <TextInput
          style={styles.input}
          placeholder="C"
          placeholderTextColor={'#fff'}
          onChangeText={(text) => setC(Number(text))}
        />
      </View>
      <Pressable style={styles.btn} onPress={solve}>
        <Text style={styles.text}>Giải</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    padding: 32,
    color: '#6cacc5',
  },
  subHeading: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '500',
    paddingVertical: 32,
    color: '#8c5059',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },

  input: {
    width: 72,
    height: 56,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 16,
    textAlign: 'center',
    color: '#fff',
  },

  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2a327147',
  },

  text: {
    color: '#6cacc5',
  },
});

export default SolveScreen;
