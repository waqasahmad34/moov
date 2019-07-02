import { createAppContainer, createStackNavigator } from 'react-navigation';
import Splash from '../screens/Splash/Splash';
import Search from '../screens/Search/Search';
import Detail from '../screens/Detail/Detail';

const appStackNavigator = createStackNavigator(
	{
		Splash: {
			screen: Splash
		},
		Search: {
			screen: Search
		},
		Detail: {
			screen: Detail
		}
	},
	{
		headerMode: 'none'
	}
);

const appContainer = createAppContainer(appStackNavigator);

export default appContainer;
