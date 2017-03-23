import React, { PropTypes } from 'react';

const Card = props => {
    return (
      <div>
        <img src={props.url} />
        <p>{props.fact}</p>
      </div>
    );
}

Card.propTypes = {
  url: React.PropTypes.string,
  fact: React.PropTypes.string,
  id: React.PropTypes.string
};

export default Card;
