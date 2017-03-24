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
    cols: {lg: 3, md: 3, sm: 2, xs: 1, xxs: 1}
  }

  constructor(props) {
    super(props);

    // this.onBreakpointChange = this.onBreakpointChange.bind(this);
    // this.onLayoutChange = this.onLayoutChange.bind(this);
    // this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  // onRemoveItem(i) {
  //   console.log('removing', i);
  //   this.setState({items: _.reject(this.state.items, {i: i})});
  // }
  componentWillMount() {
    console.log(document.getElementsByClassName('card'));
  }

  createElement(catAndFact) {
    var i = catAndFact.add ? '+' : catAndFact.i;
    // catAndFact.h = 3;

    return (
      <div key={i} data-grid={catAndFact} className="card">
      <div className="card-layer">
        <img src={catAndFact.url} />
        <p>{catAndFact.fact}</p>
      </div>
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
