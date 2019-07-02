import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Timeline extends Component {
	getShape = () => {
		switch (this.props.circle) {
			case 'color':
				return (
					<View
						style={{
							backgroundColor: '#ED3237',
							position: 'absolute',
							width: 20,
							height: 20,
							borderRadius: 10,
							left: -55
						}}
					/>
				);
				break;
			case 'border':
				return (
					<View
						style={{
							backgroundColor: '#fff',
							borderWidth: 2,
							borderColor: '#C3C4D0',
							position: 'absolute',
							width: 20,
							height: 20,
							borderRadius: 10,
							left: -55
						}}
					/>
				);
				break;
			case 'border-color':
				return (
					<View
						style={{
							backgroundColor: '#fff',
							borderWidth: 2,
							borderColor: '#111543',
							position: 'absolute',
							width: 20,
							height: 20,
							borderRadius: 10,
							left: -55
						}}
					/>
				);
				break;
			default:
				break;
		}
	};
	render() {
		return (
			<View style={{ marginLeft: '20%', marginTop: hp('4%'), flexDirection: 'row' }}>
				{this.getShape()}
				<View style={{ flex: 1 }}>
					<Text style={{ fontSize: hp('2%'), color: '#A5A5A5' }}>January 2019</Text>
					<Text style={{ fontSize: hp('1.9%'), color: '#A5A5A5' }}>101</Text>
				</View>
				<View style={{ flex: 1 }}>
					<Text style={{ fontSize: hp('2%'), fontWeight: 'bold', color: '#707070' }}>
						In sorting location
					</Text>
					<Text style={{ fontSize: hp('1.8%'), color: '#A5A5A5' }}>Lagos</Text>
				</View>
			</View>
		);
	}
}

export default Timeline;
