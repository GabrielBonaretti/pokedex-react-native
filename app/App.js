import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import PokemonInList from './src/PokemonInList';
import ModalComponent from './src/Modal';

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [itemID, setItemID] = useState(0);
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(20);

  const getImgID = async (url) => {
    const { data } = await axios.get(url)
    return { "idPokemon": data.id, "imgPokemon": data.sprites.front_default }

  }

  const getPokemons = async () => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`)
    const pokeList = []

    for (const pokemon of data.results) {
      const { idPokemon, imgPokemon } = await getImgID(pokemon.url)
      pokeList.push({
        "id": idPokemon - 1,
        "name": pokemon.name,
        "img": imgPokemon,
      })
    }

    setPokemons(pokeList)
    setLimit(prev => prev + 20)
  }

  useEffect(() => {
    getPokemons();
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={!modal}
        data={pokemons}
        renderItem={({ item }) => <PokemonInList pokemon={item} onPress={() => { setItemID(item.id), setModal(true) }} />}
        keyExtractor={item => item.id}
        onEndReached={getPokemons}
        onEndReachedThreshold={0.01}
        ListFooterComponent={<ActivityIndicator size={'large'} />}
        showsVerticalScrollIndicator={false}
      />


      <ModalComponent
        modal={modal}
        pokemons={pokemons}
        itemID={itemID}
        press={() => setModal(false)}
      />

    </View>
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