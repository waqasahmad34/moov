import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ChevronRightIcon from 'react-native-vector-icons/Entypo';
import CheckIcon from 'react-native-vector-icons/Feather';
import TruckIcon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Card extends Component {
	render() {
		return (
			<View
				style={{
					height: hp('10%'),
					borderRadius: 5,
					borderWidth: 1,
					borderColor: '#dddddd',
					marginTop: 5,
					marginBottom: 5,
					marginHorizontal: '3%',
					flexDirection: 'row'
				}}
			>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<View
						style={[
							{ width: 45 },
							{ height: 45 },
							{ justifyContent: 'center' },
							{ alignItems: 'center' },
							{ borderRadius: 50 },
							this.props.icon === 'truck'
								? { backgroundColor: '#ED3237' }
								: { backgroundColor: '#C0C0C0' }
						]}
					>
						{this.props.icon === 'truck' ? (
							<TruckIcon name="truck" color="#fff" size={hp('2.5%')} />
						) : (
							<CheckIcon name="check" color="#fff" size={hp('2.5%')} />
						)}
					</View>
				</View>
				<View style={{ flex: 2.5 }}>
					<View style={{ padding: 14 }}>
						<Text style={{ color: '#000', fontSize: hp('1.9%'), fontWeight: '500' }}>
							{this.props.title}
						</Text>
						<Text style={{ color: '#dddddd', opacity: 0.98, fontSize: hp('1.8%'), fontWeight: '400' }}>
							{this.props.description}
						</Text>
					</View>
				</View>
				<View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
					<ChevronRightIcon name="chevron-small-right" color="#ED3237" size={hp('5%')} />
				</View>
			</View>
		);
	}
}

export default Card;
