import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ShoeCard from '../components/shoeCard';
import { getAllShoes } from '../api/shoedata';

const CardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;

  img {
    width: 400px;
    height: 200px;
    object-fit: cover;
    border: 1px solid black;
  }
  .card {
    background-color: #05a464;
    margin: 5px;
    padding: 10px;
    text-align: center;
    border: 1px solid black;
    color: black;
  }
  .btn {
    border: 1px solid black;
    margin: 5px;
  }
`;
const TitleStyle = styled.div`
  h1 {
    text-align: clearInterval;
  }
`;
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
          <TitleStyle>
            <h1>My Shoes</h1>
          </TitleStyle>
          <CardStyle>
            {shoes.map((shoe) => (
              <ShoeCard
                key={shoe.firebaseKey}
                shoe={shoe}
                setShoes={setShoes}
              />
            ))}
          </CardStyle>
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