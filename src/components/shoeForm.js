import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createShoe, updateShoe } from '../api/shoedata';

const initialState = {
  shoeName: '',
  shoeImage: '',
  shoeDescription: '',
  uid: '',
  type_id: '',
  trade: '',
};

export default function ShoeForm({ obj = {} }) {
  const history = useHistory();
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        shoeName: obj.shoemName,
        shoeImage: obj.ishoeImage,
        shoeDescription: obj.shoeDescription,
        firebaseKey: obj.firebaseKey,
        uid: obj.uid,
        type_id: obj.type_id,
        trade: obj.trade,
      });
      console.warn(obj);
    }
  }, [obj]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateShoe(formInput).then(() => {
        history.push('/all stuff');
        console.warn('Shoes Updated!', formInput);
      });
    } else {
      createShoe({ ...formInput }).then(() => {
        history.push('/stuff');
      });
    }
  };

  return (
    <form onSubmit={handleClick}>
      <div className="mb-3">
        <label htmlFor="ShoeName" className="input-group">
          Shoe Name
          <input
            className="form-control"
            value={formInput.shoeName || ''}
            onChange={(e) => handleChange(e)}
            id="shoeName"
            name="shoeName"
          />
        </label>
        <label htmlFor="shoeDescription" className="input-group">
          Shoe Description
          <input
            type="text"
            className="form-control"
            value={formInput.shoeDescription || ''}
            onChange={(e) => handleChange(e)}
            id="shoeDescription"
            name="shoeDescription"
          />
        </label>
        <label htmlFor="shoeImage" className="input-group">
          Shoe Image
          <input
            type="text"
            className="form-control"
            value={formInput.shoeImage || ''}
            onChange={(e) => handleChange(e)}
            id="shoeImage"
            name="shoeImage"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

ShoeForm.propTypes = {
  obj: PropTypes.shape({}).isRequired,
};
