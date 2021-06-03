import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert,Dimensions } from 'react-native'
import auth from '@react-native-firebase/auth';
const Register = ({navigation}) => {
    const flogin = () => navigation.navigate('Login');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ rePassword, setRePassword] = useState('');
    
    const Lregister=(email,password,rePassword) => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
            Alert.alert('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
         Alert.alert('That email address is invalid!');
        }

    console.error(error);
  });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}> Register Screen</Text>
            
            
            
            <TextInput style ={styles.input} value={email} placeholder="Email" 
            onChangeText={(text) => setEmail(text)}/>
            <TextInput
                style={styles.input} value={password} placeholder="Password" onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
            
            />
            <TextInput
                style={styles.input} value={rePassword} placeholder=" Confirm Password" onChangeText={(text) => setRePassword(text)} 
                    secureTextEntry={true}
            
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={Lregister} >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={flogin} >
                <Text style={styles.navButtonText}>Already have an account?</Text>
                <Text style={styles.navButtonText}>Go to Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register
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
    }
});