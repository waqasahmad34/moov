import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Splash from '../screens/Splash/Splash';
import Search from '../screens/Search/Search';
import Detail from '../screens/Detail/Detail';
import { fromLeft,fromRight } from 'react-navigation-transitions';

const appStackNavigator = createStackNavigator(
	{
		Splash: {
			screen: Splash
		},
		Search: {
			screen: Search
		},
		Detail: {
			screen: Detail,
			navigationOptions: {
				mode: 'modal'
			}
		}
	},
	{
		headerMode: 'none',
		transitionConfig: () => fromRight(500)
	}
);

// const appSwitchNavigator = createSwitchNavigator(
// 	{
// 		Splash: {
// 			screen: Splash
// 		},
// 		appStackNavigator: {
// 			screen: appStackNavigator
// 		}
// 	},
// 	{
// 		headerMode: 'none',
// 		transitionConfig: () => fromLeft(1000)
// 	}
// );

const appContainer = createAppContainer(appStackNavigator);

export default appContainer;
