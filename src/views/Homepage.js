import React from 'react';
import styled from 'styled-components';

const HomeStyle = styled.div`
  margin-top: 70px;
  h1 {
    margin-bottom: 50px;
  }
  h3 {
    margin: 50px;
  }
  img {
    border: 1px solid black;
  }
  text-align: center;
`;

export default function Homepage() {
  return (
    <HomeStyle>
      <h1>Find My Shoes Homepage</h1>
      <img
        src="https://s1.r29static.com/bin/entry/b88/x,80/1717463/image.jpg"
        alt="Lots of Shoes"
        width="800"
        height="600"
      />
      <h3>Too many to sort</h3>
    </HomeStyle>
  );
}
