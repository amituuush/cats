import React, { Component, PropTypes } from 'react';

import './card.scss';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageBroken: false
    }

    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
  }

  handleDeleteCard() {
    this.props.deleteCard(this.props.id);
  }

  handleImageError() {
    this.setState({
      imageBroken: true
    });
  }

  render() {
    return (
        <div className={this.state.imageBroken ? "card-hide" : "card-container"}>
          <i className="fa fa-times" aria-hidden="true" onClick={this.handleDeleteCard}></i>
          <img src={this.props.url} onError={this.handleImageError} />
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
