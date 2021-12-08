import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { deleteShoe, getSingleShoe, updateShoe } from '../api/shoedata';

const DetailsStyle = styled.div`
  max-width: 800px;
  margin: 42px auto;
  color: black;

  img {
    max-width: 100px;
  }

  .btn {
    margin-right: 8px;
  }
`;

export default function Details() {
  const history = useHistory();
  const [shoe, setShoe] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleShoe(firebaseKey).then(setShoe);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const handleClick = (method) => {
    if (method === 'delete') {
      deleteShoe(shoe.firebaseKey, shoe.uid).then(() => history.push('/all'));
    } else {
      updateShoe(shoe).then(history.push('/addshoes'));
    }
  };

  return (
    <DetailsStyle>
      <div className="card">
        <div className="row no-gutters">
          <div className="col-auto">
            <img
              src={shoe.shoeImage}
              className="img-fluid"
              alt={shoe.shoeName}
            />
          </div>
          <div className="col">
            <div className="card-block px-2">
              <h1 className="card-title">{shoe.shoeName}</h1>
              <p className="card-text">{shoe.shoeDescription}</p>
              <Link
                to={`/edit/${shoe.firebaseKey}`}
                className="btn btn-primary"
              >
                EDIT
              </Link>
              <button
                type="button"
                onClick={() => handleClick('delete')}
                className="btn btn-danger"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </DetailsStyle>
  );
}
