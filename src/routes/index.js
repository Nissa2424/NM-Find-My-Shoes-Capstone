import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation } from 'react-router-dom';
import ShoeForm from '../components/ShoeForm';
import Details from '../views/Details';
import Homepage from '../views/Homepage';
import AllShoes from '../views/AllShoes';

export default function Routes({ uid }) {
  const location = useLocation();
  return (
    <div>
      <Switch location={location}>
        <Route exact path="/homepage">
          <Homepage />
        </Route>
        <Route exact path="/all">
          <AllShoes uid={uid} />
        </Route>
        <Route exact path="/addshoes">
          <ShoeForm uid={uid} obj={{}} />
        </Route>
        <Route exact path="/details/:firebaseKey" component={Details} />
        {/* <Route
          exact
          path="/edit/:key"
          component={() => <EditView uid={uid} />}
        /> */}
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  uid: PropTypes.string,
};
Routes.defaultProps = { uid: '' };
