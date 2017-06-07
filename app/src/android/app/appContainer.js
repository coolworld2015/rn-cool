'use strict';

import React, {Component} from 'react';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import Coolworld from '../coolworld/coolworld';
import ShowWeb from './showWeb';

import Audit from '../audit/audit';
import AuditDetails from '../audit/auditDetails';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <DefaultTabBar backgroundColor='white'/>}
            >
                <CoolworldTab tabLabel="Coolworld"/>
                <AuditTab tabLabel="Audit"/>
            </ScrollableTabView>
        );
    }
}

class CoolworldTab extends Component {
	constructor(props) {
		super(props);
		this.routes = [
			{title: 'Coolworld', index: 0},
			{title: 'Web', index: 1}
		];
	}
		  
	renderScene(route, navigator) {
		switch (route.index) {		
			case 0: return <Coolworld routes={this.routes} navigator={navigator} />
					break;			
			case 2: return <ShowWeb data={route.data} routes={this.routes} navigator={navigator} />
					break;
 		}
 	}	
	
	render() {
		return (
	  		<NavigationExperimental.Navigator
				initialRoute={this.routes[0]}
				initialRouteStack={this.routes}
				renderScene={this.renderScene.bind(this)}
				style={{padding: 0}}
			  
				configureScene={(route, routeStack) =>
					NavigationExperimental.Navigator.SceneConfigs.PushFromRight}
			/>
		)
	}
}

class AuditTab extends Component {
    constructor(props) {
        super(props);
        this.routes = [
            {title: 'Audit', index: 0},
            {title: 'Audit Details', index: 1},
            {title: 'Add Audit', index: 2}
        ];
    }

    renderScene(route, navigator) {
        switch (route.index) {
            case 0:
                return <Audit routes={this.routes} navigator={navigator}/>;
                break;
            case 1:
                return <AuditDetails data={route.data} routes={this.routes} navigator={navigator}/>;
                break;
        }
    }

    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={this.routes[0]}
                initialRouteStack={this.routes}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route, routeStack) =>
                    NavigationExperimental.Navigator.SceneConfigs.PushFromRight}
            />
        )
    }
} 

export default AppContainer;