import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = props => 
    <Jumbotron>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
    </Jumbotron>

export default Header;