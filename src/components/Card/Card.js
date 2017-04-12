import React, { Component, PropTypes } from 'react';

import './card.scss';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageBroken: false,
      showEdit: false,
      userInput: ''
    }

    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
    this.handleShowEdit = this.handleShowEdit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUserInputSubmit = this.handleUserInputSubmit.bind(this);
  }

  handleDeleteCard() {
    this.props.deleteCard(this.props.id);
  }

  handleImageError() {
    this.setState({
      imageBroken: true
    });
  }

  handleShowEdit() {
    this.setState({
      showEdit: !this.state.showEdit
    });
  }

  handleInputChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  handleUserInputSubmit() {
    this.props.userInput(this.state.userInput, this.props.id);
  }

  render() {
    return (
        <div className={this.state.imageBroken ? "card-hide" : "card-container"}>
          <i className="fa fa-times" aria-hidden="true" onClick={this.handleDeleteCard}></i>
          <img src={this.props.url} onError={this.handleImageError} />
          <p>{this.props.fact}</p>
          <div className={this.state.showEdit ? "edit-show" : "edit-hide"}>
            <input type="text" value={this.state.userInput} onChange={this.handleInputChange} />
            <button onClick={this.handleUserInputSubmit}>Save</button>
          </div>
          <i onClick={this.handleShowEdit} className="fa fa-pencil" aria-hidden="true"></i>
        </div>
    );
  }
}

Card.propTypes = {
  url: React.PropTypes.string,
  fact: React.PropTypes.string,
  id: React.PropTypes.string,
  deleteCard: React.PropTypes.func,
  userInput: React.PropTypes.func
};

export default Card;
