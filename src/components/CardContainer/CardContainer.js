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

  componentWillMount() {
    console.log(document.getElementsByClassName('card'));
    console.log('height', this.props.clientHeight)
  }

  handleDeleteCard() {
    console.log('deleting');
  }

  handleImageError() {
    console.log('error on image');
  }

  createElement(catAndFact) {
    catAndFact.x = Math.floor(Math.random() * 3);

    let imageUrl = '';
    function handleImageError() {
      // this.setState({
      //   imageUrl: './img/cat-placeholder.jpg'
      // });
      imageUrl = './img/cat-placeholder.jpg';
      console.log('image error');
    }

    return (
      <div key={catAndFact.id} data-grid={catAndFact} className="card">
      <i className="fa fa-arrows" aria-hidden="true"></i>
          <img src={catAndFact.url} onError={handleImageError} />
          <p>{catAndFact.fact}</p>
      </div>
    );
      //  <Card
      // key={i}
      // dataGrid={catAndFact}
      // url={catAndFact.url}
      // fact={catAndFact.fact} />
  }

  render() {
    return (
      <div>
         <ResponsiveReactGridLayout {...this.props} autosize={true}>
            {_.map(this.props.catsAndFacts, this.createElement)}
          </ResponsiveReactGridLayout>
      </div>
    );
  }
};

CardContainer.propTypes = {
  catsAndFacts: React.PropTypes.arrayOf(React.PropTypes.shape({
    url: React.PropTypes.string,
    fact: React.PropTypes.string,
    id: React.PropTypes.string
  })),
  deleteCard: React.PropTypes.func
};

export default CardContainer;
