import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import JobsScreen from './screens/JobsScreen';
import JobDetailsScreen from './screens/JobDetailsScreen';
import ApplyScreen from './screens/ApplyScreen';


const Stack = createStackNavigator();

const App = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   // Check if user is authenticated on app start
  //   async function checkAuth() {
  //     const storedEmail = await AsyncStorage.getItem('email');
  //     const storedPassword = await AsyncStorage.getItem('password');
  //     if (storedEmail && storedPassword) {
  //       setIsAuthenticated(true);
  //     }
  //   }
  //   checkAuth();
  // }, []);

  // const handleLogin = () => {
  //   setIsAuthenticated(true);
  // };

  // const handleLogout = async () => {
  //   await AsyncStorage.removeItem('email');
  //   await AsyncStorage.removeItem('password');
  //   setIsAuthenticated(false);
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} /> */}
            <Stack.Screen name="Jobs" component={JobsScreen} />
            <Stack.Screen name="Job Details" component={JobDetailsScreen} />
            <Stack.Screen name="Apply" component={ApplyScreen} />
        {/* {isAuthenticated ? (
          
          <>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="Jobs" component={JobsScreen} />
            <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
            <Stack.Screen name="Apply" component={ApplyScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login">
              {props => <LoginScreen {...props} onLogin={handleLogin} />}
            </Stack.Screen>
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
