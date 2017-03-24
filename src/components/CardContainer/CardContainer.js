// 'use strict';
import React, { Component, PropTypes } from 'react';
import { WidthProvider } from 'react-grid-layout';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);
import _ from 'lodash';
import Card from '../Card/Card';

import './card-container.scss';

class CardContainer extends Component {
  static defaultProps = {
    className: "layout",
    cols: {lg: 3, md: 3, sm: 3, xs: 2, xxs: 1},
    rowHeight: 200
  }

  constructor(props) {
    super(props);
    this.state = {
      items: [0, 1, 2, 3, 4].map(function(i, key, list) {
        return {i: i.toString(), x: i * 2, y: 0, w: 1, h: 1, add: i === (list.length - 1).toString(), hey: 'hey'};
      }),
      newCounter: 0
    };
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    // this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  // onRemoveItem(i) {
  //   console.log('removing', i);
  //   this.setState({items: _.reject(this.state.items, {i: i})});
  // }

  createElement(el) {
    var removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };

    var i = el.add ? '+' : el.i;

    return (
      <div key={i} data-grid={el}>
        {i}
      </div>
    );
  }

    // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout) {
    // this.props.onLayoutChange(layout);
    this.setState({layout: layout});
  }

  render() {
    let cards;
    if (this.props.catsAndFacts.length === 0) {
      cards = <p>Loading...</p>;
    } else {
    cards = this.props.catsAndFacts.map(catAndFact => {
      return <Card
              url={catAndFact.url}
              fact={catAndFact.fact}
              id={catAndFact.id}
              deleteCard={this.props.deleteCard}
              key={catAndFact.id} />;
    });
    }
    return (
      <div>
         <ResponsiveReactGridLayout onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange}
              {...this.props}>
            {_.map(this.state.items, this.createElement)}
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
