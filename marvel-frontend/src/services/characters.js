import api from './api'
import CryptoJS from 'crypto-js'

export const getCharacters = async () => {
  try {
    var pubkey = "2d7fa52e080704b9e9472de64d95047e";
    var pvtkey = "0155f71c7e391bce0d26585e44134bf6cfacd5bc";
    var ts = new Date().getTime();
    var message = ts + pvtkey + pubkey;
    var hash = CryptoJS.MD5(message);

    const response = await api.get(`/characters?ts=${ts}&apikey=${pubkey}&hash=${hash}`)
    const { data: { data } } = response
    const formatedData = data.results.map(hero => ({
      id: hero.id,
      description: hero.description,
      name: hero.name,
      image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
    }))
    if (response.status === 200) {
      return formatedData;
    }
    return null;
  } catch (error) {
    console.log(error)
  }
}
