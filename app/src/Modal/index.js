import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';

export default function ModalComponent({ modal, pokemons, itemID, press }) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modal}
        >
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "#CCC"
                }}>
                    <TouchableOpacity
                        onPress={press}
                    >

                        <View>
                            <Text>{pokemons[itemID]?.name}</Text>
                            <Image
                                style={styles.imgPokes}
                                source={{ uri: pokemons[itemID]?.img }}
                            />
                        </View>

                        <Text>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

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