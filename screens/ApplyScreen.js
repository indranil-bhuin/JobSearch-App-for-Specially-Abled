import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ApplyScreen = ({ route }) => {
  const { title, company } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apply for {title} at {company}</Text>
      <Text style={styles.instructions}>Please submit your application below:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructions: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default ApplyScreen;
