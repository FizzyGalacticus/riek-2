'use strict';

import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import RIEToggle from '../../../lib/RIEToggle';

export default () => (
    <Container>
        <Row>
            <Col sm="12" md="6">
                <h4>App State</h4>
                <div></div>
            </Col>
            <Col sm="12" md="6">
                <h4>Options</h4>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <h4>Toggle</h4>
                <span>Default: </span>
                <RIEToggle />
                <br />
                <span>Custom labels: </span>
                <RIEToggle textTrue="activated" textFalse="deactivated" />
            </Col>
        </Row>
    </Container>
);
