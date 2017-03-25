import React, { Component, PropTypes } from 'react';
import Card from '../Card/Card';

import './card-container.scss';

class CardContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSortedChange = this.handleSortedChange.bind(this);
  }

  handleSortedChange(e) {
    console.log(e.target.value);
    this.props.sortCards(e.target.value);
  }

  render() {

    let cards;
    if (this.props.sorted === 'default') {
      cards = this.props.catsAndFacts.map(catAndFact => {
      return (
        <Card
          key={catAndFact.id}
          id={catAndFact.id}
          url={catAndFact.url}
          fact={catAndFact.fact}
          deleteCard={this.props.deleteCard} />
      );
      });
    } else if (this.props.sorted === 'fact-length-ascend') {
      let sortedCards = this.props.catsAndFacts.sort((a, b) => {
        return a.fact.length - b.fact.length;
      });
      console.log(sortedCards);
       cards = sortedCards.map(catAndFact => {
        return (
          <Card
            key={catAndFact.id}
            id={catAndFact.id}
            url={catAndFact.url}
            fact={catAndFact.fact}
            deleteCard={this.props.deleteCard} />
        );
      });
    } else if (this.props.sorted === 'fact-length-descend') {
      let sortedCards = this.props.catsAndFacts.sort((a, b) => {
        return b.fact.length - a.fact.length;
      });
      console.log(sortedCards);
       cards = sortedCards.map(catAndFact => {
        return (
          <Card
            key={catAndFact.id}
            id={catAndFact.id}
            url={catAndFact.url}
            fact={catAndFact.fact}
            deleteCard={this.props.deleteCard} />
        );
      });
    }

    return (
      <div>
        <form>
        <label>Sort by:</label>
          <select name="sort" onChange={this.handleSortedChange} value={this.props.sorted || 'default'}>
            <option value="default">Default</option>
            <option value="fact-length-ascend">Fact Length - Ascending</option>
            <option value="fact-length-descend">Fact Length - Descending</option>
          </select>
          <br />
        </form>
        <div className="card-container-container">
          {cards}
        </div>
      </div>
    );
  }
};

CardContainer.propTypes = {
  catsAndFacts: React.PropTypes.arrayOf(React.PropTypes.shape({
    url: React.PropTypes.string,
    fact: React.PropTypes.string,
    id: React.PropTypes.string,
  })),
  sorted: React.PropTypes.string,
  deleteCard: React.PropTypes.func,
  sortCards: React.PropTypes.func
};

export default CardContainer;
