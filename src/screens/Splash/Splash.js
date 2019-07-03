import React, { Component } from 'react';
import { Text, View, StatusBar, Image, Animated } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: new Animated.Value(1)
		};
	}
	componentDidMount() {
		Animated.sequence([
			Animated.timing(this.state.value, {
				toValue: 0.8,
				duration: 1000,
				useNativeDriver: true
			}),

			Animated.timing(this.state.value, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true
			})
		]).start();

		setTimeout(() => {
			this.props.navigation.navigate('Search');
		}, 3000);
	}
	render() {
		return (
			<Animated.View
				style={[
					{ opacity: this.state.value },
					{ flex: 1 },
					{ backgroundColor: '#111543' },
					{ justifyContent: 'center' },
					{ alignItems: 'center' }
				]}
			>
				<StatusBar backgroundColor="#111543" barStyle="#fff" />

				<Image source={require('../../assets/logo1.png')} style={{ resizeMode: 'contain' }} />
				{/* <View style={{ flex: 0.1, justifyContent: 'flex-end', alignItems: 'center' }}>
					<Text style={{ color: '#fff', fontSize: hp('1.7%'), marginBottom: 10 }}>
						Copyrights 2019 All rights Reserved{' '}
					</Text>
				</View> */}
			</Animated.View>
		);
	}
}

export default Splash;
