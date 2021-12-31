import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../components/Card';
import { getAllShoes } from '../api/Shoedata';

const CardStyle = styled.div`
  text-align: center;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQfocoDxbFMopQrtiUd3UX0igHzgusA__FVIDzqpaZkYCxxgxuUx6ciOq6Q0sF_gYFGFk&usqp=CAU');
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
    background-color: #a39193;
    margin: 15px;
    padding: 10px;
    text-align: center;
    border: 8px bold yellow;
    color: dark blue;
  }
  .btn {
    border: 10px solid Bisque;
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
      const shoeBoots = shoeArray.filter(
        (s) => s.shoeName.toLowerCase() === 'boots',
      );
      if (isMounted) {
        setShoes(
          shoeBoots.sort((a, b) => (a.dateAdded > b.dateAdded ? 1 : -1)),
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
            <h1>You are so BOOT-tiful to me</h1>
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
