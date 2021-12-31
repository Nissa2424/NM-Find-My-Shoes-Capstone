import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../components/Card';
import { getAllShoes } from '../api/Shoedata';

const CardStyle = styled.div`
  text-align: center;
  background-image: url('https://i.pinimg.com/736x/c4/18/b6/c418b6c477ce46c9594ec283d66ed4dc.jpg');
  position: fixed;
  min-width: 100%;
  min-height: 100%;
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
    display: grid;
    background-color: #5f6863;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
    gap: 2rem;
    justify-content: left;
  }
  .btn {
    border: 10px solid yellow;
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
      if (isMounted) {
        setShoes(
          shoeArray.sort((a, b) => (a.dateAdded > b.dateAdded ? 1 : -1)),
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
            <h3>All Shoes-Shoe Gallery</h3>
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
