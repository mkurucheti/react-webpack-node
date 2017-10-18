import React, {Component} from 'react';
import {render} from 'react-dom';
import {Row, Col} from "react-bootstrap";
import Navigation from './navbar';
import TimePicker from 'rc-time-picker';
import styles from './../css/styles.css';



class Body extends Component {
	render() {
		
        return <div><Row> 
			    <Col>
			      	<Navigation/>
			    </Col>
			  </Row>
			  	<div className={styles.time}>
			  		<TimePicker/>
			  	 </div>
			  	 
			  	 
			  	
			  </div>
    }
}

export default Body;