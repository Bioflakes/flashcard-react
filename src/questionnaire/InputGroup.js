import React from 'react';
import { FormGroup, Label, Col, Input } from 'reactstrap';


const InputGroup = ({ label, id, changeFn, name, value, isReadOnly }) =>
    <FormGroup>
        <Label md={ 2 } for={ id }>
            {label}
        </Label>
        <Col md={ 10 }>
            <Input type="text" id={id} onChange={changeFn} name ={name } value ={value} plaintext={isReadOnly} disabled={isReadOnly}>
                
            </Input>
        </Col>
    </FormGroup>

    export default InputGroup;