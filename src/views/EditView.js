import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleShoe } from '../api/shoedata';
import ShoeForm from '../components/ShoeForm';

export default function EditView({ uid }) {
  const [editShoe, setEditShoe] = useState({});
  const { key } = useParams();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleShoe(key).then(setEditShoe);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <ShoeForm obj={editShoe} uid={uid} />
    </div>
  );
}
EditView.propTypes = {
  uid: PropTypes.string.isRequired,
};
