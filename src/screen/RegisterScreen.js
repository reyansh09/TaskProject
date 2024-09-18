import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import { register } from '../redux/Action';
import { Picker } from '@react-native-picker/picker';


const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User'); // Default role

  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(register(name, email, password, role));
    navigation.navigate('Login'); // Navigate back to login after registration
  };

  return (
    <View style={styles.container}>
     <Text style={styles.heading}>Register Page</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName}
      style={styles.textBox} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} 
        style={styles.textBox} 
      />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry
      style={styles.textBox}  />
      <Picker 
      style={styles.pickerData}
      selectedValue={role} onValueChange={(itemValue) => setRole(itemValue)}>
        <Picker.Item label="User" value="User" />
        <Picker.Item label="Admin" value="Admin" />
      </Picker>

      <TouchableOpacity
      style={styles.loginButton}
      onPress={handleRegister}
      >
        <Text style={styles.loginFont}>Register</Text>
      </TouchableOpacity>
      <Text 
      style={styles.newAccntText}>
         Already have an account? <Text 
        onPress={() => navigation.navigate('Login')}
        style={styles.RegisterFont}> Login here.</Text>
      </Text>
      
    </View>
  );
};

export default RegisterScreen;
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
  },
  pickerData:{
    width:'90%',
    height:50,
    alignSelf:'center'

  },

})

