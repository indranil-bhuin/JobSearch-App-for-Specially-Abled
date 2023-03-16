import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import jobsData from '../jobs.json';

const JobsScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch the jobs data from the JSON file
    setJobs(jobsData);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Job Details', { job: item })}>
      <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
        <Text style={{ fontSize: 16, color: '#888' }}>{item.company}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default JobsScreen;
