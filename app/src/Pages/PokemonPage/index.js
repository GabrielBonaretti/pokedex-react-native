import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import PokemonInList from '../../Components/PokemonInList';
import ModalComponent from '../../Components/Modal';

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [itemID, setItemID] = useState(0);
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);

  const getText = async (url) => {
    const { data } = await axios.get(url)
    return { "textPokemon": data.flavor_text_entries[0].flavor_text, "colorPokemon": data.color.name }
  }

  const getImgID = async (url) => {
    const { data } = await axios.get(url)

    const { textPokemon, colorPokemon } = await getText(data.species.url)
    return {
      "idPokemon": data.id,
      "imgPokemon": data.sprites.front_default,
      "types": data.types,
      "textPokemon": textPokemon,
      "colorPokemon": colorPokemon
    }

  }

  const getPokemons = async () => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`)
    const pokeList = []

    for (const pokemon of data.results) {
      const { idPokemon, imgPokemon, types, textPokemon, colorPokemon } = await getImgID(pokemon.url)
      pokeList.push({
        "id": idPokemon - 1,
        "name": pokemon.name,
        "img": imgPokemon,
        "types": types,
        "textPokemon": textPokemon,
        "colorPokemon": colorPokemon,
      })
    }

    setPokemons(pokeList)
    setLimit(prev => prev + 10)
    console.log(pokemons)

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
        style={styles.flatlist}
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

  flatlist: {
    width: '99%'
  }
})