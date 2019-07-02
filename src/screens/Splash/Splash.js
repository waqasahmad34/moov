import React, { Component } from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Splash extends Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.navigation.navigate('Search');
		}, 2500);
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#111543' }}>
				<StatusBar backgroundColor="#111543" barStyle="#fff" />
				<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
					<Image source={require('../../assets/logo.png')} style={{ resizeMode: 'contain' }} />
				</View>
				<View style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'center' }}>
					<Text style={{ color: '#fff', fontSize: hp('1.7%'), marginBottom: 10 }}>
						Copyrights 2019 All rights Reserved{' '}
					</Text>
				</View>
			</View>
		);
	}
}

export default Splash;
