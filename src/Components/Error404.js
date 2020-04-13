import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

export class Error404 extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Header as="h3"> 404 Error: Page Not Found</Header>
      </Container>
    );
  }
}

export default Error404;
