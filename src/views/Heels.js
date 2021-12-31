import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../components/Card';
import { getAllShoes } from '../api/Shoedata';

const CardStyle = styled.div`
  text-align: center;
  background-image: url('https://stylesatlife.com/wp-content/uploads/2017/05/20-Popular-Beautiful-High-Heel-Shoes-Designs-in-Trend.png.webp');
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
    background-color: #eea990;
    margin: 15px;
    padding: 10px;
    text-align: center;
    border: 8px bold;
    color: dark blue;
  }
  .btn {
    border: 10px solid IndianRed;
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
      const shoeHeels = shoeArray.filter(
        (s) => s.shoeName.toLowerCase() === 'heels',
      );
      if (isMounted) {
        setShoes(
          shoeHeels.sort((a, b) => (a.dateAdded > b.dateAdded ? 1 : -1)),
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
            <h1>Say HEEL-Lo To My Little Friends</h1>
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
