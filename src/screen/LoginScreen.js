import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/Action';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(email, password));
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Login Page</Text>
      <TextInput placeholder="Email" 
      value={email} 
      onChangeText={setEmail} 
        style={styles.textBox}
      />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry
      style={styles.textBox} />

      <TouchableOpacity
      style={styles.loginButton}
      onPress={handleLogin}>
        <Text style={styles.loginFont}>Login</Text>
      </TouchableOpacity>
      <Text 
      style={styles.newAccntText}>
        Don't have an account? <Text 
        onPress={() => navigation.navigate('Register')}
        style={styles.RegisterFont}> Register here.</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
const styles=StyleSheet.create({
  container:{
   justifyContent:'center',
   flex:1,
   padding:10
  },
  heading:{
   fontSize:30,
   fontWeight:'bold',
   alignSelf:'center',
   marginBottom:20,
   color:'orange'
  },
  
  textBox:{
    height:55,
    borderWidth:0.5,
    borderRadius:10,
    padding:10,
    marginTop:20,
    marginBottom:10,
    width:'90%',
    alignSelf:'center'
  },
  loginButton:{
    height:50,
    borderRadius:10,
    padding:10,
    marginTop:20,
    marginBottom:5,
    width:'90%',
    backgroundColor:'orange',
    alignSelf:'center',
    marginTop:20,
    justifyContent:'center',
   alignItems:'center'
  },
  loginFont:{
    fontSize:20,
    fontWeight:'bold',
    color:'#FFF'
  },
  RegisterFont:{
    color:'orange',
    fontSize:15
  },
  newAccntText:{
    fontSize:14,
    textAlign:'center'
  }
})
