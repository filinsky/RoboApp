import React from "react";
import robots from "./robots";
import Card from "./Card";

export class CardList extends React.Component {
  render() {
    return (
      <div>
        <Card name={robots[0].name} />
      </div>
    );
  }
}
