import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";

import { auth } from "../../Config";

export default function Home({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signUp() {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then()
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('esse email ja tem trutao')
                }

                if (error.code === 'auth/invalid-email') {
                    alert('olha esse email ai palerma')
                }
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
            <TouchableOpacity>
                <Text>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={signUp}>
                <Text>Sing Up</Text>
            </TouchableOpacity>
        </View>
    );
}