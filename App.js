import React, { Component } from 'react';
import Splash from './src/screens/Splash/Splash';
import Card from './src/components/Card/Card';
import Search from './src/screens/Search/Search';
import Detail from './src/screens/Detail/Detail';

import AppContainer from './src/Navigator/Navigator';

export default class App extends Component {
	render() {
		return <AppContainer />;
	}
}
