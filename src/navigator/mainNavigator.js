import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera122196Navigator from '../features/Camera122196/navigator';
import EmailAuth122195Navigator from '../features/EmailAuth122195/navigator';
import BlankScreen0118000Navigator from '../features/BlankScreen0118000/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Camera122196: { screen: Camera122196Navigator },
EmailAuth122195: { screen: EmailAuth122195Navigator },
BlankScreen0118000: { screen: BlankScreen0118000Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
