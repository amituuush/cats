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
    cols: {lg: 3, md: 3, sm: 2, xs: 1, xxs: 1},
    // autosize: true
  }

  constructor(props) {
    super(props);

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    // this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  // onRemoveItem(i) {
  //   console.log('removing', i);
  //   this.setState({items: _.reject(this.state.items, {i: i})});
  // }

  createElement(catAndFact) {
    var removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };

    var i = catAndFact.add ? '+' : catAndFact.i;

    return (
      <div key={i} data-grid={catAndFact}>
        <Card
              url={catAndFact.url}
              fact={catAndFact.fact}
              id={catAndFact.id}
              key={catAndFact.id} />
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
    return (
      <div>
         <ResponsiveReactGridLayout onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange}
              {...this.props} autosize={true}>
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
