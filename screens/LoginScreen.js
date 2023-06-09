import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');
      if (storedEmail !== null && storedPassword !== null) {
        setEmail(storedEmail);
        setPassword(storedPassword);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');
      if (email === storedEmail && password === storedPassword) {
        navigation.replace('Home');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleSignup = () => {
    navigation.navigate('Signup');
  };


  return (
    <View style={styles.container}>
      {loading ? null : (
        <>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     width: '80%',
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//     marginVertical: 10,
//   },
  
// });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0EC57'
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40
    },
    button: {
      backgroundColor: '#0B0A07',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center'
    },
    buttonText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 16
    },
    buttonOutline: {
      backgroundColor: '#fff',
      marginTop: 5,
      borderColor: '#0B0A07',
      borderWidth: 2
    },
    buttonOutlineText: {
      color: '#0B0A07',
      fontWeight: '700',
      fontSize: 16
    }
});


export default LoginScreen;
