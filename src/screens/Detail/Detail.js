import React, { Component } from 'react';
import { Text, View, StatusBar, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import ChevronLeftIcon from 'react-native-vector-icons/Entypo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Timeline from '../../components/Timeline/Timeline';
import DownloadArrowIcon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

class Detail extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar backgroundColor="#111543" barStyle="light-content" />
				<ScrollView>
					<View style={{ height: 235 }}>
						<ImageBackground
							style={{
								position: 'absolute',
								width: '100%',
								height: 235,
								bottom: 35
							}}
							source={require('../../assets/detail.png')}
						>
							<View
								style={{
									justifyContent: 'center',
									alignItems: 'center',
									marginTop: hp('7%')
								}}
							>
								<TouchableOpacity
									onPress={() => this.props.navigation.navigate('Search')}
									style={{ position: 'absolute', left: 15, bottom: 23 }}
								>
									<ChevronLeftIcon name="chevron-small-left" color="#fff" size={hp('4%')} />
								</TouchableOpacity>

								<Text style={{ color: '#A5A5A5', fontSize: 15, marginTop: hp('2%') }}>
									January 2019
								</Text>
								<Text
									style={{ color: '#fff', marginTop: hp('0.5%'), fontSize: 24, fontWeight: 'bold' }}
								>
									19001003
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{ flex: 2 }}>
						<View
							style={{
								borderLeftColor: '#A5A5A5',
								borderLeftWidth: 2,
								height: hp('100%'),
								position: 'absolute',
								left: 25,
								top: -54
							}}
						/>

						<Timeline circle="color" />
						<Timeline circle="border" />
						<Timeline circle="border-color" />
						<Timeline circle="border-color" />
						<Timeline circle="border" />
						<Timeline circle="border-color" />
						<Timeline circle="border" />
						<Timeline circle="border-color" />
						<Timeline circle="border" />
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
						<Image
							source={require('../../assets/icon.png')}
							style={{ width: 20, height: 20, resizeMode: 'contain', tintColor: '#fff' }}
						/>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}
}

export default Detail;
