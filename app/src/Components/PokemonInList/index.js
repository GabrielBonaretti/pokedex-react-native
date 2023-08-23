import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export default function PokemonInList({ pokemon, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Text>{pokemon.name}</Text>
            <Image
                style={styles.imgPokes}
                source={{ uri: pokemon.img }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgPokes: {
        width: 150,
        height: 150,
    }
})