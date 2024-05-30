import { StatusBar, setStatusBarHidden } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, Image, TouchableOpacity, TextInput, Linking } from 'react-native';
import Home from './Home';
import { Link, useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
   <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={styles.content}>
        <Image 
          source={require("../../assets/dengue-logo.png")} 
          style={styles.logo}
        />
        <TextInput
          placeholder='Digite o seu e-mail'
          style={styles.input}
        > 
        </TextInput>
        <TextInput
          placeholder='Digite a sua senha'
          style={styles.input}
        > 
        </TextInput>
        <Text style={styles.text}>
          Esqueceu a senha? Clique aqui! 
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> 
            Entrar 
          </Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          Não possui cadastro?  Cadastre-se!
          {/* <Text style={styles.link} onPress={() => navigation.navigate('Home')} >
            Cadastre-se!
          </Text>  */}
        </Text>
      </View>      
    </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A2C9F0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  content: {
    alignSelf: 'center',
    flex: 1,
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  logo: {
    marginBottom: 23,
  }, 
  input: {
    backgroundColor: '#FFF', 
    borderRadius: 10,
    padding: 5, 
    width: '100%',
    height: 50, 
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  text: {
    fontSize: 14,
    fontWeight: '500'
  },
  link: {
    color: '#0000EE',
    textDecorationLine: 'underline'
  },
  button: {
    backgroundColor: '#B9082C', 
    borderRadius: 10,
    padding: 5, 
    width: '100%',
    height: 50, 
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 30,
    marginBottom: 10
  }, 
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '700'
  }
});