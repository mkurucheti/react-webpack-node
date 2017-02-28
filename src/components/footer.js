import React, {Component} from 'react';
import {render} from 'react-dom';
import {Row, Col} from "react-bootstrap";


class Footer extends Component {
	render() {
        return <Row> 
			    <Col>
			      <center>
			      Copyright © 2017 kurucheti.com
			      </center>
			    </Col>
			  </Row>
    }
}

export default Footer;

