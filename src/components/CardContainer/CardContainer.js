// 'use strict';
import React, { Component, PropTypes } from 'react';
import { WidthProvider } from 'react-grid-layout';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);
import _ from 'lodash';
import axios from 'axios';
import Card from '../Card/Card';

import './card-container.scss';

class CardContainer extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    const cards = this.props.catsAndFacts.map(catAndFact => {
      return (
        <Card
          key={catAndFact.id}
          id={catAndFact.id}
          url={catAndFact.url}
          fact={catAndFact.fact}
          deleteCard={this.props.deleteCard} />
      );
    })

    return (
      <div className="card-container-container">
        {cards}
      </div>
    );
  }
};

CardContainer.propTypes = {
  catsAndFacts: React.PropTypes.arrayOf(React.PropTypes.shape({
    url: React.PropTypes.string,
    fact: React.PropTypes.string,
    id: React.PropTypes.string,
  })),
  deleteCard: React.PropTypes.func
};

export default CardContainer;
