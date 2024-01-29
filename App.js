import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button, Alert, ScrollView, Platform, secureTextEntry } from 'react-native';

const logo = require('./assets/reactNative.png')

export default function App() {
  return (

    <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
      <ScrollView>

        <View style={styles.centralizarImg}>
          <Image style={{ width: 225, height: 200, marginTop: 120,}} source={logo}></Image>
          <StatusBar style="light" />
        </View>

        <View>
          <Text style={styles.centralizarImg}>        Informe seus dados para acessar o sistema!</Text>
          <Text style={styles.labelInput}>Usuário</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.labelInput}>Senha</Text>
          <TextInput style={styles.input} secureTextEntry={true}></TextInput>
        </View>

        <View style={[styles.alinharHorizontal]}>
          <Button title='Cadastrar' color='black' onPress={() => Alert.alert('SEJA BEM VINDO!', 'Login realizado com sucesso.',
            [
              {
                text: 'Cancelar',
                onPress: () => console.log('Botão cancelar pressionado')
              },
              {
                text: 'OK',
                onPress: () => console.log('Botão OK pressionado')
              }
            ])}></Button>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  alinharHorizontal: {
    gap: 10,
    marginTop: 50,
  },
  centralizarImg:{
    alignItems: 'center',
  },
  labelInput: {
    fontSize: 18,
    marginBottom: 1,
    color: 'blac',
    marginBottom: 5,
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  input: {
    width: 350,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#87CEFA',
  },
});