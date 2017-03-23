import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardContainer from '../CardContainer/CardContainer';
import * as actions from '../../actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div>
        <CardContainer
        catsAndFacts={this.props.catsAndFacts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    catsAndFacts: state.catsAndFacts
  }
}

export default connect(mapStateToProps, actions)(App);
