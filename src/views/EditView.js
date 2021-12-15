import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleShoe } from '../api/Shoedata';
import Form from '../components/Form';

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
      <Form obj={editShoe} uid={uid} />
    </div>
  );
}
EditView.propTypes = {
  uid: PropTypes.string.isRequired,
};
