import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://jherr-pokemon.s3.us-west-1.amazonaws.com/',
  })
}
