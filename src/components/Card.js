import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteShoe } from '../api/Shoedata';

export default function Card({ shoe, setShoes }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteShoe(shoe.firebaseKey, shoe.uid).then((newArray) => setShoes(newArray));
    }
  };
  return (
    <div>
      <div className="card">
        <img src={shoe.shoeImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{shoe.shoeName}</h5>
          <button
            type="button"
            onClick={() => handleClick('delete')}
            className="btn btn-danger"
          >
            DELETE
          </button>
          <Link to={`/details/${shoe.firebaseKey}`} className="btn btn-info">
            DETAILS
          </Link>
          <Link to={`/edit/${shoe.firebaseKey}`} className="btn btn-primary">
            EDIT
          </Link>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  shoe: PropTypes.shape({
    shoeName: PropTypes.string,
    shoeImage: PropTypes.string,
    shoeDescription: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setShoes: PropTypes.func.isRequired,
};
