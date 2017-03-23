import React, { PropTypes } from 'react';
import Card from '../Card/Card';

const CardContainer = props => {
  const cards = props.catsAndFacts.map(catAndFact => {
    return <Card
             url={catAndFact.url}
             fact={catAndFact.fact}
             id={catAndFact.id}
             key={catAndFact.id} />;
  });

  return (
    <div>
      {cards}
    </div>
  );
};

CardContainer.propTypes = {
  catsAndFacts: React.PropTypes.arrayOf(React.PropTypes.shape({
    url: React.PropTypes.string,
    fact: React.PropTypes.string,
    id: React.PropTypes.string
  }))
};

export default CardContainer;
