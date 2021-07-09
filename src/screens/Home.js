import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);

  function handleAddNewSkill() {
    setSkills((oldSkills) => [...oldSkills, newSkill]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Maby</Text>
      <TextInput
        style={styles.input}
        placeholder={'New skill'}
        placeholderTextColor={'#666'}
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 48, alignSelf: 'flex-start' }]}>
        My Skills
      </Text>

      {skills.map((skill) => (
        <SkillCard key={skill} skill={skill} />
      ))}
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
    fontSize: 24,
    padding: Platform === 'ios' ? 20 : 15,
    borderRadius: 8,
  },
});
