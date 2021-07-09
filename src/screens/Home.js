import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Maby</Text>

      <TextInput
        style={styles.input}
        placeholder={'New skill'}
        placeholderTextColor={'#666'}
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop: 40, alignSelf: 'flex-start' }]}>
        My Skills
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111217',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#272B34',
    color: '#FFFFFF',
    fontSize: 18,
    padding: Platform === 'ios' ? 20 : 15,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#4CA6A7',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});
