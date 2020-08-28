import axios from 'axios';
import utils from '../utils';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPlayersByTeam = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getPlayer = (playerId) => axios.get(`${baseUrl}/players/${playerId}.json`);

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/players/${playerId}.json`);

const createPlayer = (newPlayer) => axios.post(`${baseUrl}/players.json`, newPlayer);

const updatePlayer = (playerId, editedPlayer) => axios.put(`${baseUrl}/players/${playerId}.json`, editedPlayer);

export default {
  getPlayersByTeam,
  getPlayer,
  deletePlayer,
  createPlayer,
  updatePlayer,
};
