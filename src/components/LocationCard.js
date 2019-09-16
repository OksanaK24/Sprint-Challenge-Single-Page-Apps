import React from "react";
import { Card } from 'semantic-ui-react';

export default function LocationCard(props) {
  return(
    <Card>
    <Card.Content header={props.name} />
    <Card.Content>
      <Card.Description>
        <p>{props.type} {props.dimension}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <p>{props.residents.length} residents </p>
    </Card.Content>
  </Card>
  );
}
