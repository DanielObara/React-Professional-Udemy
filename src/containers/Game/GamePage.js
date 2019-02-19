import React from "react";
import { connect } from "react-redux";
import { Board, Card } from "../../components";

const GamePage = ({ cards, onCardClick }) => (
  <Board>
    {cards.map(card => (
      <Card
        key={card.key}
        name={card.name}
        isActive={card.isActive}
        onClick={() => {
          onCardClick(card);
        }}
      />
    ))}
  </Board>
);

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  onCardClick: card => {
    dispatch({ type: "SELECT_CARD", key: card.key });
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePage);
