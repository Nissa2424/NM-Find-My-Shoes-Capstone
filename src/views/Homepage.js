import React from 'react';
import styled from 'styled-components';

const HomeStyle = styled.div`
text-align: center;
background-image: url("https://www.brandingstrategyinsider.com/images/2015/11/When-To-Assess-Your-Brand-Architecture.jpg");
position: fixed;
min-width: 100%;
min-height: 60%;
background-size: cover;
background-position: center;
  } 
  `;

export default function Homepage() {
  return (
    <HomeStyle>
      <h1>Shoe Mania</h1>
      <img src="/NisShoe.jpg" alt="Lots of Shoes" width="800" />
      <h3>Too many to sort</h3>
    </HomeStyle>
  );
}
