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

  .home {
    font-size: 32px;
    font-weight: bold;
  }
`;

export default function Navigation() {
  // const history = useHistory();

  return (
    <NavStyle>
      {/* <ButtonGroup size="med">
  <Link to="/home">
<button
  onClick={() => history.push('/home')}
  type="button"
  className="btn btn-light border border-dark"
>
  Home
</button>
  </Link>
  <Link to="/new">
<button
onClick={() => history.push('/new')}
type="button"
className="btn btn-light border border-dark"
>
New
</button>
</Link>
<Link to="/all">
<button
onClick={() => history.push('/all')}
type="button"
className="btn btn-light border border-dark"
>
My all
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
          <Link className="nav-link active home" to="/home">
            Homepage
          </Link>
          <Link className="nav-link active myall" to="/all">
            Display All
          </Link>
          <Link className="nav-link active heels" to="/heels">
            Heels
          </Link>
          <Link className="nav-link active tennis" to="/tennis">
            Tennis
          </Link>
          <Link className="nav-link active flats" to="/flats">
            Flats
          </Link>
          <Link className="nav-link active trade" to="/trade">
            Trade
          </Link>
          <Link className="nav-link active new" to="/new">
            Add to Collection
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
