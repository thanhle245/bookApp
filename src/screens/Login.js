
import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import Dimensions from 'react-native'
import auth from '@react-native-firebase/auth';
const Login = ({navigation}) => {
    const fregister = () => navigation.navigate('Register');
    const bottom = () => navigation.navigate('Product');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const Tlogin=(email,password) => {
        auth()
        .signInAnonymously()
        .then(() => {
          console.log('User signed in anonymously');
          navigation.navigate('Home');
        })
        .catch(error => {
          if (error.code === 'auth/operation-not-allowed') {
            console.log('Enable anonymous in your firebase console.');
          }
      
          console.error(error);
        });
        
    }
    
    return (
        
        <View style={styles.container}>
            
            <Text style={styles.text}> Login Screen</Text>
            <TextInput 
            style ={styles.input} 
            value={email} 
            placeholder="Email" 
            onChangeText={(text) => setEmail(text)}/>
            <TextInput
                style={styles.input}
                value={password}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            
            />  
            <TouchableOpacity style={styles.buttonContainer} onPress={Tlogin}  >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={fregister} >
                <Text style={styles.navButtonText}>New user? Join here</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={bottom} >
                <Text style={styles.navButtonText}>Bottom</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login
const { width,height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        marginBottom: 10
    },
    navButton: {
        marginTop: 15
    },
    navButtonText:{
        fontSize: 20,
        color: '#6646ee'
    },
    input: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: width / 1.5,
        height: height / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    },
    buttonContainer: {
        marginTop: 10,
        width: width / 2,
        height: height / 15,
        backgroundColor: '#6495ed',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    buttonText:{
        fontSize: 28,
        color: '#ffffff'
    },
    logo:{
        width: 50,
        height: 50,
    }
});