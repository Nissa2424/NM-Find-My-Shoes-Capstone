import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation } from 'react-router-dom';
import AllShoes from '../views/AllShoes';
import Form from '../components/Form';
import Details from '../views/Details';
import Homepage from '../views/Homepage';
import EditView from '../views/EditView';
import Flats from '../views/Flats';

export default function Routes({ uid }) {
  const location = useLocation();
  return (
    <div>
      <Switch location={location}>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/homepage">
          <Homepage />
        </Route>
        <Route exact path="/all">
          <AllShoes uid={uid} />
        </Route>
        <Route exact path="/add-to-collection">
          <Form uid={uid} obj={{}} />
        </Route>
        <Route exact path="/details/:firebaseKey" component={Details} />
        <Route
          exact
          path="/edit/:key"
          component={() => <EditView uid={uid} />}
        />
        <Route exact path="/flats">
          <Flats uid={uid} />
        </Route>
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  uid: PropTypes.string,
};
Routes.defaultProps = { uid: '' };
