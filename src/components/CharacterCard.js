import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard(props) {
  return(
    <Card>
      <Image src={props.image} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.species} {props.status}</span>
        </Card.Meta>
        <Card.Description>
          <p>Location: {props.location.name}</p>
          <p>Origin: {props.origin.name}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {props.episode.length}
        </a>
      </Card.Content>
    </Card>
  );
}
