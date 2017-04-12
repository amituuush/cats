import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardContainer from '../CardContainer/CardContainer';
import * as actions from '../../actions';

import './app.scss';

class App extends Component {

  componentDidMount() {
    this.props.fetchCatsAndFacts();
  }

  render() {
    return (
      <div className="app-container">
        <h1>Cats and Facts</h1>
        <CardContainer
          catsAndFacts={this.props.catsAndFacts}
          deleteCard={this.props.deleteCard}
          sorted={this.props.sorted}
          sortCards={this.props.sortCards}
          userInput={this.props.userInput} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    catsAndFacts: state.catsAndFacts,
    sorted: state.sorted
  }
}

export default connect(mapStateToProps, actions)(App);
