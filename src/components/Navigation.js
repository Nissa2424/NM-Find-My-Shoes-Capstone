import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';
import { signOutUser } from '../api/auth';

export default function Navigation() {
  const history = useHistory();

  return (
    <div className="text-center mb-3">
      <ButtonGroup size="med">
        <Link to="/homepage">
          <button
            onClick={() => history.push('/homepage')}
            type="button"
            className="btn btn-light border border-dark"
          >
            Home Page
          </button>
        </Link>
        <Link to="/addshoes">
          <button
            onClick={() => history.push('/addshoes')}
            type="button"
            className="btn btn-light border border-dark"
          >
            Add Shoes
          </button>
        </Link>
        <Link to="/all">
          <button
            onClick={() => history.push('/all')}
            type="button"
            className="btn btn-light border border-dark"
          >
            Display All Shoes
          </button>
          <button
            onClick={signOutUser}
            type="button"
            className="btn btn-danger"
          >
            Logout
          </button>
        </Link>
      </ButtonGroup>
    </div>
  );
}
