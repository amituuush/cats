import React, { Component, PropTypes } from 'react';
import { WidthProvider } from 'react-grid-layout';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);
import './card.scss';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }

  handleDeleteCard() {
    this.props.deleteCard(this.props.id);
  }

  componentWillMount() {
    // const height = document.getElementsByClassName('card-container').height;
    // console.log('height', document.getElementsByClassName('card-container')[0].clientHeight);
  }

  render() {
    return (
        <div key={this.props.id} data-grid={this.props.dataGrid} className="card" ref={(ref) => this.ref = ref}>
          <i className="fa fa-arrows" aria-hidden="true"></i>
          <img src={this.props.url} />
          <p>{this.props.fact}</p>
        </div>
    );
  }
}

Card.propTypes = {
  url: React.PropTypes.string,
  fact: React.PropTypes.string,
  id: React.PropTypes.string,
  deleteCard: React.PropTypes.func
};

export default Card;
