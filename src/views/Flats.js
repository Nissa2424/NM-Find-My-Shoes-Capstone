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
    width: 100px;
    height: 100px;
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
export default function AllShoes({ uid }) {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllShoes(uid).then((shoeArray) => {
      console.warn(shoeArray);
      const shoeFlats = shoeArray.filter(
        (s) => s.shoeName.toLowerCase() === 'flats',
      );
      if (isMounted) setShoes(shoeFlats);
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
            <h1>All uuuuShoes</h1>
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
