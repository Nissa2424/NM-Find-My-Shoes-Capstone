import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ShoeCard from '../components/ShoeCard';
import { getAllShoes } from '../api/shoedata';

export default function MyShoes({ uid }) {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllShoes(uid).then((shoeArray) => {
      if (isMounted) setShoes(shoeArray);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {shoes ? (
        <>
          <h1>My Shoes</h1>
          {shoes.map((shoe) => (
            <ShoeCard key={shoe.firebaseKey} shoe={shoe} setShoes={setShoes} />
          ))}
        </>
      ) : (
        'Add Shoes'
      )}
    </div>
  );
}
MyShoes.propTypes = {
  uid: PropTypes.string,
};
MyShoes.defaultProps = { uid: '' };
