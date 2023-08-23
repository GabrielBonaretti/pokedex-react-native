import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";

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
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('Deu erra ai truta');
                console.log(errorMessage);
            })
    }


    function singIn() {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                alert("foi")
                navigation.navigate('PokemonPage')
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('Ve seus bagulho ai que tem alguma truta');
                console.log(errorMessage);
            })
    }


    return (
        <View>
            <Text> App </Text>
            <View>
                <TextInput
                    placeholder={"email"}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder={"password"}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            {/* <TouchableOpacity onPress={() => navigation.navigate('PokemonPage')}> */}
            <TouchableOpacity onPress={singIn}>
                <Text>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={signUp}>
                <Text>Sing Up</Text>
            </TouchableOpacity>
        </View>
    );
}