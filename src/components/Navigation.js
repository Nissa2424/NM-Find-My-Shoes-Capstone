import React from 'react';
import { Link } from 'react-router-dom';
/* import { ButtonGroup } from 'reactstrap'; */
import styled from 'styled-components';
import { signOutUser } from '../api/auth';

const NavStyle = styled.div`
  .container-fluid {
    margin-right: 24px;
    display: flex;
    float: left;
  }

  img {
    width: 120px;
    height: 80px;
  }

  .nav-link:hover {
    text-decoration: underline;
    text-decoration-color: white;
  }

  .nav-link {
    font-size: 24px;
    color: #ff69b4;
  }

  .space {
  flex: 1;
  }

  .homepage {
  font-size: 32px
  font-weight: bold;
  }
`;

export default function Navigation() {
  // const history = useHistory();

  return (
    <NavStyle>
      {/* <ButtonGroup size="med">
        <Link to="/homepage">
          <button
            onClick={() => history.push('/homepage')}
            type="button"
            className="btn btn-light border border-dark"
          >
            Homepage
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
            All Shoes
          </button>
          <button
            onClick={signOutUser}
            type="button"
            className="btn btn-danger"
          >
            Logout
          </button>
        </Link>
      </ButtonGroup> */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="nav-link active homepage" to="/homepage">
            Homepage
          </Link>
          <Link className="nav-link active new" to="/add-to-collection">
            Add to Collection
          </Link>
          <Link className="nav-link active allShoesll" to="/all">
            All Shoes
          </Link>
          <div className="space" />
          <button
            onClick={signOutUser}
            type="button"
            className="btn btn-danger"
          >
            Logout
          </button>
        </div>
      </nav>
    </NavStyle>
  );
}
