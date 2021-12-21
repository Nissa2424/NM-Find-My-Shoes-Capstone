import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../components/Card';
import { getAllShoes } from '../api/Shoedata';

const CardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;

  img {
    text-align: center;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 5px solid black;
  }
  .card {
    background-color: #66cccc;
    margin: 15px;
    padding: 10px;
    text-align: center;
    border: 8px bold yellow;
    color: dark blue;
  }
  .btn {
    border: 10px solid lightSalmon;
    margin: 5px;
  }
`;
const TitleStyle = styled.div`
  h1 {
    text-align: center;
  }
`;
export default function AllShoes({ uid }) {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllShoes(uid).then((shoeArray) => {
      /* console.warn(shoeArray); */
      const shoeFlats = shoeArray.filter(
        (s) => s.shoeName.toLowerCase() === 'flats',
      );
      if (isMounted) {
        setShoes(
          shoeFlats.sort((a, b) => (a.dateAdded > b.dateAdded ? 1 : -1)),
        );
      }
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
            <h1>Display Flat-tasic Shoes</h1>
          </TitleStyle>
          <CardStyle>
            {shoes.map((shoe) => (
              <Card key={shoe.firebaseKey} shoe={shoe} setShoes={setShoes} />
            ))}
          </CardStyle>
        </>
      ) : (
        'Add Shoes'
      )}
    </div>
  );
}
AllShoes.propTypes = {
  uid: PropTypes.string,
};
AllShoes.defaultProps = { uid: '' };
