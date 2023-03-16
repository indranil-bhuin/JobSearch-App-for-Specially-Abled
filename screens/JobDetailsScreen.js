import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import jobsData from '../jobs.json';


const JobDetailsScreen = ({ route, navigation }) => {
  const { job } = route.params;
  const selectedJob = jobsData.find((item) => item.id === job.id);

  const applyForJob = () => {
    navigation.navigate("Apply", { job });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedJob.title}</Text>
      <Text style={styles.company}>{selectedJob.company}</Text>
      <Text style={styles.description}>{selectedJob.description}</Text>
      <Text style={styles.qualifications}>{selectedJob.qualifications}</Text>
      <Text style={styles.location}>{selectedJob.location}</Text>
      <Text style={styles.salary}>{selectedJob.salary}</Text>
      <Text style={styles.contact}>{selectedJob.contact}</Text>
      <Button title="Apply Now" onPress={applyForJob} />
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
  company: {
    fontSize: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  qualifications: {
    fontSize: 18,
    marginBottom: 20,
  },
  location: {
    fontSize: 18,
    marginBottom: 20,
  },
  salary: {
    fontSize: 18,
    marginBottom: 20,
  },
  contact: {
    fontSize: 18,
  },
});

export default JobDetailsScreen;
