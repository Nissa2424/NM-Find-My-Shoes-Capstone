import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;
const getAllShoes = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/shoes.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createShoe = (itemObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/items.json`, itemObj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbURL}/items/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getAllShoes(itemObj.uid).then(resolve);
        });
    })
    .catch(reject);
});

const getSingleShoe = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/items/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const deleteShoe = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbURL}/items/${firebaseKey}.json`)
    .then(() => getAllShoes(uid).then(resolve))
    .catch(reject);
});

const updateShoe = (itemObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbURL}/items/${itemObj.firebaseKey}.json`, itemObj)
    .then(() => getAllShoes(itemObj.uid).then(resolve))
    .catch(reject);
});

export {
  getAllShoes, deleteShoe, updateShoe, getSingleShoe, createShoe,
};
