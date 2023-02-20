import Api from './Api'

export const getAllPokemons = async () => {
  var response = await Api().get('index.json')
  return response.data
}

export const getPokemon = async (pokemon_id: number) => {
  var response = await Api().get(`pokemon/${pokemon_id}.json`)
  return response.data
}
