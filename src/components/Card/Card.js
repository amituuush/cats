import React, { Component, PropTypes } from 'react';

import './card.scss';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }

  handleDeleteCard() {
    this.props.deleteCard(this.props.id);
  }

  render() {
    return (
        <div className="card-container">
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
