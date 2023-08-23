import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';

export default function ModalComponent({ modal, pokemons, itemID, press }) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modal}

        >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <View style={styles.teste}>
                        <View style={styles.viewIDName}>
                            <Text style={styles.fonteSize}>#{String(pokemons[itemID]?.id + 1).padStart(3, '0')}</Text>
                            <Text style={styles.fonteSize}>{String(pokemons[itemID]?.name).charAt(0).toUpperCase() + String(pokemons[itemID]?.name).slice(1)}</Text>
                        </View>
                        <Image
                            style={styles.imgPokes}
                            source={{ uri: pokemons[itemID]?.img }}
                        />

                        <View style={styles.viewTypes}>
                            <Text style={styles.types}>{pokemons[itemID]?.types[0].type.name}</Text>
                            {pokemons[itemID]?.types[1]?.type.name !== undefined ? (
                                <Text style={styles.types}>{pokemons[itemID]?.types[1]?.type.name}</Text>
                            ) : (console.log())}
                        </View>
                        <Text style={styles.descriptionPokemon}>{pokemons[itemID]?.textPokemon}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={press}
                        style={styles.buttonBack}
                    >
                        <Text>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modal: {
        width: '90%',
        height: '50%',
        backgroundColor: "#CCC",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    viewIDName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    teste: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    imgPokes: {
        width: 188,
        height: 188,
    },

    viewTypes: {
        flexDirection: 'row',
        width: '80%',
    },

    types: {
        flex: 1,
        textAlign: 'center',
        borderWidth: 0.2,
        borderRadius: 10,
        margin: 2,
        fontSize: 17
    },

    fonteSize: {
        fontSize: 17
    },

    descriptionPokemon: {
        textAlign: 'center',
        margin: 15,
    },

    buttonBack: {
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 20,
        borderRadius: 10
    }
})