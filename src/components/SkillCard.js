import React, { useState } from 'react';
import { Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.skill} activeOpacity={0.9}>
      <Text style={styles.skillText}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skill: {
    backgroundColor: '#272B34',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  skillText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});
