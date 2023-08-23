import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput, StyleSheet } from "react-native";

import { auth } from "../../Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Home({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signUp() {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                alert('Conta criada!');
                setEmail('')
                setPassword('')
            })
            .catch(error => {
                const errorMessage = error.message;
                alert('Deu erra ai truta');
                console.log(errorMessage);
                setEmail('')
                setPassword('')
            })
    }


    function singIn() {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setEmail('')
                setPassword('')
                navigation.navigate('PokemonPage')
            })
            .catch(error => {
                const errorMessage = error.message;
                alert('Ve seus bagulho ai que tem alguma truta');
                console.log(errorMessage);
                setEmail('')
                setPassword('')
            })
    }


    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder={"email"}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"password"}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity onPress={singIn} style={styles.buttoes}>
                <Text style={styles.textButton}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={signUp} style={styles.buttoes}>
                <Text style={styles.textButton}>Sing Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        margin: 5,
        borderBottomWidth: 1,
        width: 200,
    },
    buttoes: {
        backgroundColor: '#222',
        width: 200,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        margin: 5,
    },

    textButton: {
        color: '#FFF'
    }
})