'use strict';

import React, {Component} from 'react';
import {
	BackAndroid
} from 'react-native';

console.disableYellowBox = true;

import AppContainer from './appContainer';

class App extends Component {
    constructor(props) {
        super(props);
		
		BackAndroid.addEventListener('hardwareBackPress', () => {
			if (this.props.navigator) {
				this.props.navigator.pop();
			}
			return true;
		});

        window.appConfig = {
            access_token: '',
			url: 'http://coolworld.herokuapp.com/' 
        };		
    }

    render() {
		return (
			<AppContainer />
		)
    }
}

export default App;