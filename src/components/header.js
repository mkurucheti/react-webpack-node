import React, {Component} from 'react';
import {render} from 'react-dom';
import styles from './../css/styles.css';


class Header extends Component {
	render() {
        return <div className={styles.header}>
			  <p>Header</p>
			</div>
    }
}

export default Header;