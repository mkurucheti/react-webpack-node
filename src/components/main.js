import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './header';
import Footer from './footer';

class Main extends Component {
	render() {
        return <div>
        	<Header/>
        	<Footer/>
        </div>;
    }
}

export default Main;
