import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

export default function PokemonInList({ pokemon, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={pokemonStyle(pokemon.colorPokemon).pokemon}
        >
            <View style={styles.viewMain}>
                <View style={styles.viewContent}>
                    <View style={styles.viewNameId}>
                        <Text style={styles.fonteSize}>#{String(pokemon.id + 1).padStart(3, '0')}</Text>
                        <Text style={styles.fonteSize}>{String(pokemon.name).charAt(0).toUpperCase() + String(pokemon.name).slice(1)}</Text>
                    </View>
                    <View style={styles.viewTypes}>
                        <Text style={styles.types}>{pokemon.types[0].type.name}</Text>
                        {pokemon.types[1]?.type.name !== undefined ? (
                            <Text style={styles.types}>{pokemon.types[1]?.type.name}</Text>
                        ) : (console.log())}
                    </View>
                </View>
                <View style={styles.viewImgs}>
                    <Image
                        style={styles.imgPokes}
                        source={{ uri: pokemon.img }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const pokemonStyle = (colorPokemon) => StyleSheet.create({
    pokemon: {
        backgroundColor: `${colorPokemon}`,
        height: 100,
        width: "100%",
        borderRadius: 15,
        marginVertical: 2
    }
})

const styles = StyleSheet.create({
    viewMain: {
        backgroundColor: 'rgba(0,0,0, .2)',
        alignItems: 'center',
        flexDirection: 'row',
        height: "100%",
        width: "100%",
        borderRadius: 15,
    },



    viewImgs: {
        width: 115,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255, .7)',
        borderTopLeftRadius: 75,
        borderBottomLeftRadius: 75

    },

    imgPokes: {
        width: 100,
        height: 100,

    },

    viewContent: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-around',
        padding: 20,
    },

    viewNameId: {
        flexDirection: 'row',
        width: '60%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginLeft: 5
    },

    viewTypes: {
        flexDirection: 'row',
        width: '100%',
    },

    types: {
        flex: 1,
        textAlign: 'center',
        borderWidth: 0.2,
        borderRadius: 10,
        margin: 2,
        fontSize: 15
    },
    fonteSize: {
        fontSize: 15
    }
})