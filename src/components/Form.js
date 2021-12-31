import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { createShoe, updateShoe } from '../api/Shoedata';

const FormStyle = styled.div`
text-align: center;
background-image: url("https://www.brandingstrategyinsider.com/images/2015/11/When-To-Assess-Your-Brand-Architecture.jpg");
position: fixed;
min-width: 100%;
min-height: 100%;
background-size: cover;
background-position: center;
  } 
  `;
const initialState = {
  shoeName: '',
  shoeImage: '',
  shoeDescription: '',
  uid: '',
};

export default function Form({ obj = {}, uid }) {
  const history = useHistory();
  const [formInput, setFormInput] = useState(initialState);
  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        shoeName: obj.shoeName,
        shoeImage: obj.shoeImage,
        shoeDescription: obj.shoeDescription,
        firebaseKey: obj.firebaseKey,
        uid: obj.uid,
      });
      /* console.warn(obj); */
    }
  }, [obj]);
  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const resetForm = () => {
    setFormInput(initialState);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateShoe(formInput).then(() => {
        history.push(`/details/${obj.firebaseKey}`);
        /* console.warn('Shoes Updated!', formInput, uid); */
      });
    } else {
      createShoe({
        ...formInput,
        uid,
        dateAdded: new Date().toDateString(),
      }).then(() => {
        resetForm();
        history.push('/all');
        /* console.warn('New Shoes Added!', formInput, uid); */
      });
    }
  };
  return (
    <FormStyle>
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="shoeName" className="input-group">
            Shoe Type
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
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </FormStyle>
  );
}
Form.propTypes = {
  obj: PropTypes.shape({}).isRequired,
  uid: PropTypes.string.isRequired,
};
