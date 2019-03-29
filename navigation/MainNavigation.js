import { createStackNavigator, createAppContainer } from 'react-navigation';
import TabNavigation from './TabNavigation';
import DetailScreen from '../screens/Detail';

const MainNavigation = createStackNavigator(
  {
    Tabs: { screen: TabNavigation, navigationOptions: { header: null } },
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Tabs'
  }
);

export default createAppContainer(MainNavigation);
