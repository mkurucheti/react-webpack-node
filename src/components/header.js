import React, {Component} from 'react';
import {render} from 'react-dom';


class Header extends Component {
	render() {
        return <div style={{background: '#005a84', padding: '4px 10px 3px', color: '#fff'}}>
			  <p>This text will be white</p>
			</div>
    }
}

export default Header;