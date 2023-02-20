import axios from 'axios'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return axios.create({
    baseURL: 'https://jherr-pokemon.s3.us-west-1.amazonaws.com/',
  })
}
