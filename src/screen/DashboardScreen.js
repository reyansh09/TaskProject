import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/Action';


const DashboardScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { role, isAuthenticated } = useSelector(state => state.auth);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (role === 'Admin') {
      setContent('Welcome to the Admin Dashboard');
    } else {
      setContent('Welcome to the User Dashboard');
    }
  }, [role]);

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <>
          <Text  style={styles.text}>{content}</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogout}
          >
            <Text style={styles.loginFont}>Logout</Text>
          </TouchableOpacity>
         
        </>
      ) : (
        <Text style={styles.plzLoginText}>Please login</Text>
      )}
    </View>
  );
};

export default DashboardScreen;
const styles=StyleSheet.create({
  container:{
   justifyContent:'center',
   flex:1,
   padding:10
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
  text:{
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center'
  },
  plzLoginText:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  }
})
