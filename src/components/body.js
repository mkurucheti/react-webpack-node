import React, {Component} from 'react';
import {render} from 'react-dom';
import {Row, Col} from "react-bootstrap";
import Navigation from './navbar';
import Table from './table';
import styles from './../css/styles.css';



class Body extends Component {
	render() {
		
        return <div><Row> 
			    <Col>
			      	<Navigation/>
			    </Col>
			  </Row>
			  	<div className={styles.time}>
			  		<Table/>
			  	 </div>
			  	 
			  	 
			  	
			  </div>
    }
}

export default Body;