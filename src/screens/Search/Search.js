import React, { Component } from 'react';
import { Text, View, StatusBar, ScrollView, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import Card from '../../components/Card/Card';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

class Search extends Component {
	render() {
		return (
			<View animation="fadeInDown" duration={3000} style={{ flex: 1 }}>
				<StatusBar backgroundColor="#111543" barStyle="light-content" />

				<View style={{ flex: 0.7, backgroundColor: '#111543' }}>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Image
							source={require('../../assets/logo1.png')}
							style={{ resizeMode: 'contain', width: 149, height: 69 }}
						/>
					</View>
					<View
						style={{
							flex: 1
						}}
					>
						<View
							style={{
								height: hp('6%'),
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'row',
								backgroundColor: '#fff',
								borderRadius: 5,

								marginHorizontal: '3%'
							}}
						>
							<TextInput style={{ flex: 1, paddingLeft: 10 }} placeholder="Tracking number" />
							<SearchIcon style={{ padding: 5 }} name="search1" color="#ED3237" size={hp('3%')} />
						</View>
					</View>

					<View
						style={{
							width: 0,
							height: 0,
							borderLeftColor: 'transparent',
							borderBottomColor: '#fff',
							borderBottomWidth: 25,
							borderLeftWidth: width,
							position: 'absolute',
							bottom: 0
						}}
					/>
				</View>
				<View style={{ flex: 2 }}>
					<View style={{ marginTop: 10, marginHorizontal: '3%' }}>
						<Text style={{ fontSize: hp('2%'), fontWeight: '500', color: '#000', opacity: 0.8 }}>
							My Packages
						</Text>
					</View>
					<ScrollView>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
							<Card title="19001003" description="Out for Delivery Today" icon="truck" />
						</TouchableOpacity>

						<Card title="19001004" description="Delivered: 2d ago" icon="check" />
						<Card title="19001005" description="Delivered: 24d ago" icon="check" />
						<Card title="19001006" description="Delivered: 3d ago" icon="check" />
						<Card title="19001007" description="Delivered: 7d ago" icon="check" />
						<Card title="19001008" description="Delivered: 10d ago" icon="check" />
						<Card title="19001009" description="Delivered: 8d ago" icon="check" />
						<Card title="19001010" description="Delivered: 6d ago" icon="check" />
						<Card title="19001011" description="Delivered: 2m ago" icon="check" />
						<Card title="19001012" description="Delivered: 1m ago" icon="check" />
						<Card title="19001013" description="Delivered: 21h ago" icon="check" />
						<Card title="19001014" description="Delivered: 1h ago" icon="check" />
						<Card title="19001015" description="Delivered: 10m ago" icon="check" />
						<Card title="19001016" description="Delivered: 5h ago" icon="check" />
					</ScrollView>
				</View>
			</View>
		);
	}
}

export default Search;
