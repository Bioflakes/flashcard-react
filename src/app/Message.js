import React from 'react';
import { Alert } from 'reactstrap';

const Message = ({ message, isError = true }) =>
    message ? <Alert color={ isError ? 'danger' : 'info' }>{ message }</Alert> : null

export default Message;