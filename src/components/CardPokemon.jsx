import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function CardPokemon({ name, id, height, weight }) {
  if (!name) {
    return null;
  }


  const cardStyle = {
    width: '18rem',
    margin: '0 auto', 
  };

  return (
    <div className="mb-3 mt-5">
      <Card style={cardStyle}>
        <Card.Img
          variant="top"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Height:</strong> {height} m
          </Card.Text>
          <Card.Text>
            <strong>Weight:</strong> {weight} kg
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

CardPokemon.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  height: PropTypes.number,
  weight: PropTypes.number,
};

export default CardPokemon;
