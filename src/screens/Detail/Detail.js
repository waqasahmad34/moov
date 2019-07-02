import React, { Component } from 'react';
import { Text, View, StatusBar, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import ChevronLeftIcon from 'react-native-vector-icons/Entypo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Timeline from '../../components/Timeline/Timeline';
import DownloadArrowIcon from 'react-native-vector-icons/MaterialIcons';

class Detail extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar backgroundColor="#111543" barStyle="#fff" />

				<View style={{ flex: 1.3 }}>
					<ImageBackground
						style={{
							flex: 1
						}}
						source={require('../../assets/detail.png')}
					>
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								marginTop: hp('6%')
							}}
						>
							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('Search')}
								style={{ position: 'absolute', left: 15, bottom: 23 }}
							>
								<ChevronLeftIcon name="chevron-small-left" color="#fff" size={hp('4%')} />
							</TouchableOpacity>

							<Text style={{ color: '#A5A5A5', fontSize: hp('1.6%') }}>January 2019</Text>
							<Text
								style={{ color: '#fff', marginTop: hp('1%'), fontSize: hp('2.5%'), fontWeight: 'bold' }}
							>
								19001003
							</Text>
						</View>
					</ImageBackground>
				</View>
				<View style={{ flex: 2 }}>
					<View
						style={{
							borderLeftColor: '#dddddd',
							borderLeftWidth: 2,
							height: '100%',
							position: 'absolute',
							left: 25,
							bottom: '5%'
						}}
					/>

					<Timeline circle="color" />
					<Timeline circle="border" />
					<Timeline circle="border-color" />
					<Timeline circle="border-color" />
					<Timeline circle="border" />
					<Timeline circle="border-color" />
				</View>

				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Search')}
					style={{
						width: 50,
						height: 50,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#ED3237',
						borderRadius: 50,
						position: 'absolute',
						bottom: 20,
						right: 20,
						zIndex: 99999
					}}
				>
					<DownloadArrowIcon name="file-download" size={hp('3%')} color="#fff" />
				</TouchableOpacity>
			</View>
		);
	}
}

export default Detail;
