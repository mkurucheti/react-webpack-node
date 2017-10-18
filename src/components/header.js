import React, {Component} from 'react';
import {render} from 'react-dom';
import styles from './../css/styles.css';
import {PageHeader, small} from "react-bootstrap";


class Header extends Component {
	render() {
        return <div className={styles.header}>
			  <PageHeader>Welcome to MyApp </PageHeader>
			</div>
    }
}

export default Header;