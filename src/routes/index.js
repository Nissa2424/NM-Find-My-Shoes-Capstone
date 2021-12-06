import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import MyShoes from '../views/MyShoes';
import ShoeForm from '../components/shoeForm';
import Details from '../views/Details';
import Homepage from '../views/Homepage';

export default function Routes({ uid }) {
  return (
    <div>
      <Route exact path="/homepage">
        <Homepage />
      </Route>
      <Route exact path="/all">
        <MyShoes uid={uid} />
      </Route>
      <Route exact path="/addshoes">
        <ShoeForm uid={uid} obj={{}} />
      </Route>
      <Route exact path="/details/:firebaseKey" component={Details} />
    </div>
  );
}
Routes.propTypes = {
  uid: PropTypes.string,
};
Routes.defaultProps = { uid: '' };
