import React from "react";
import { Card } from 'semantic-ui-react'

export default function EpisodeCard(props) {
  return(
    <Card>
    <Card.Content header={props.name} />
    <Card.Content>
      <Card.Description>
        <p>{props.air_date}</p>
        <p>{props.episode}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
     <p> {props.characters.length} characters </p>
    </Card.Content>
  </Card>
  );
}