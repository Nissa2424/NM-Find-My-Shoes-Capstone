import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getAllShoes = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/shoes.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const deleteShoe = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbURL}/shoes/${firebaseKey}.json`)
    .then(() => getAllShoes(uid).then(resolve))
    .catch(reject);
});

const updateShoe = (shoeObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbURL}/shoes/${shoeObj.firebaseKey}.json`, shoeObj)
    .then(() => getAllShoes(shoeObj.uid).then(resolve))
    .catch(reject);
});

const getSingleShoe = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/shoes/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createShoe = (shoeObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/shoes.json`, shoeObj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbURL}/shoes/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getAllShoes(shoeObj.uid).then(resolve);
        });
    })
    .catch(reject);
});

export {
  getAllShoes, deleteShoe, updateShoe, getSingleShoe, createShoe,
};
