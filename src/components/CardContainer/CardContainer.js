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
  // ref = null

  static defaultProps = {
    className: "layout",
    cols: {lg: 3, md: 3, sm: 2, xs: 1, xxs: 1}
  }

  constructor(props) {
    super(props);

    this.state = {
      imageUrl: ''
    }

    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
  }

  componentDidMount() {
    // const { height } = this.ref.getBoundingClientRect();
    // console.log('height', height);
    // Do something with component height
  }

  handleDeleteCard() {
    console.log('deleting');
  }

  handleImageError() {
    console.log('error on image');
  }

  // createElement(catAndFact) {
  //   catAndFact.x = Math.floor(Math.random() * 3);

  //   return (
  //     <div key={catAndFact.id} data-grid={catAndFact} className="card" ref={(ref) => this.ref = ref}>
  //     <i className="fa fa-arrows" aria-hidden="true"></i>
  //         <img src={catAndFact.url} onError={this.handleImageError} />
  //         <p>{catAndFact.fact}</p>
  //     </div>
  //   );
  //     //  <Card
  //     // key={i}
  //     // dataGrid={catAndFact}
  //     // url={catAndFact.url}
  //     // fact={catAndFact.fact} />
  // }

  render() {
    const gridElements = _.map(this.props.catsAndFacts, function(catAndFact) {
      catAndFact.grid.x = Math.floor(Math.random() * 3);

      return (
        <div key={catAndFact.id} data-grid={catAndFact.grid} className="card">
        <i className="fa fa-times" aria-hidden="true"></i>
        <i className="fa fa-arrows" aria-hidden="true"></i>
            <img src={catAndFact.url} />
            <p>{catAndFact.fact}</p>
        </div>

        // <Card
        //   key={catAndFact.id}
        //   id={catAndFact.id}
        //   dataGrid={catAndFact}
        //   url={catAndFact.url}
        //   fact={catAndFact.fact} />
      );
    })

    return (
      <div>
         <ResponsiveReactGridLayout {...this.props}>
            {gridElements}
          </ResponsiveReactGridLayout>
      </div>
    );
  }
};

CardContainer.propTypes = {
  catsAndFacts: React.PropTypes.arrayOf(React.PropTypes.shape({
    url: React.PropTypes.string,
    fact: React.PropTypes.string,
    id: React.PropTypes.string,
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    w: React.PropTypes.number,
    h: React.PropTypes.number,
  })),
  deleteCard: React.PropTypes.func
};

export default CardContainer;
