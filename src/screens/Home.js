import React from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth';
const Home = ({navigation}) => {
    const Tlogout=() => {
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
        navigation.navigate('Login');
        
    }
    const [data, setData] = useState([]);
    useEffect(() => {
        const loadData = async () =>{
            await database()
            .ref(`/Products`)
            .on('value', snapshot =>{
                setData(snapshot.val());
            })
        }
        loadData();
    }, [])
    return (
        
        <View style={styles.container}>
            
            <Text style={styles.text}> Home</Text>
            
            <TouchableOpacity style={styles.buttonContainer} onPress={Tlogout} >
                <Text style={styles.buttonText}>Log out</Text>
            </TouchableOpacity>
           
        </View>
    )
}
    
export default Home
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
