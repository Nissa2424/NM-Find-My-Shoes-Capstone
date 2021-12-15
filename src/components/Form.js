import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { createShoe, updateShoe } from '../api/Shoedata';

const FormStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  .form {
    flex-direction: column;
  }
  .input-group {
    width: 500px;
    margin: 10px;
  }
  .btn {
    margin-left: 225px;
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
      console.warn(obj);
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
        history.push('/all');
        console.warn('Shoes Updated!', formInput, uid);
      });
    } else {
      createShoe({ ...formInput, uid }).then(() => {
        resetForm();
        history.push('/all');
        console.warn('New Shoes Added!', formInput, uid);
      });
    }
  };
  return (
    <FormStyle>
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="shoeName" className="input-group">
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
