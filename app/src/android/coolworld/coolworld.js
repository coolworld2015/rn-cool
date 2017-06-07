'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ListView,
    ScrollView,
    ActivityIndicator,
    AsyncStorage,
    Alert,
	BackAndroid
} from 'react-native';

class Coolworld extends Component {
    constructor(props) {
        super(props);
		
		BackAndroid.addEventListener('hardwareBackPress', () => {
			if (this.props.navigator) {
				this.props.navigator.pop();
			}
			return true;
		});	
    }

    goGoogle() {
		this.props.navigator.push({
			index: 2,
			data: {
				url: 'https://play.google.com/store/apps/details?id=io.cordova.ui_warehouse'
			}
		});
    }
	
    goApple() {
		this.props.navigator.push({
			index: 2,
			data: {
				url: 'https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1154030318&mt=8' 
			}
		});
    }
	
	goBack() {
		this.props.navigator.pop();
	}
	
    render() {
		var image = <Image
			source={require('../../../img/react.gif')}
			style={styles.pic}
		/>;
		
        return (
            <View style={styles.container}>
				<ScrollView>
					<View style={styles.containerView}>
						<Text style={styles.itemTextBold}>
							Coolworld
						</Text>
						
						<View style={{alignItems: 'center'}}>
							{image}
						</View>
					
						<Text style={styles.itemText}>
							Компания CoolWorld разрабатывает приложения Android и iOS любого уровня сложности для работы с базами данных и готовыми учетными системами.
				
						</Text>
						
						<Text style={styles.itemText}>
							Примеры работ для Android: 
						</Text>			
						
						<Text style={styles.itemTextBlue}
							onPress={()=> this.goGoogle()}>
							Google play market 
						</Text>
						
						<Text style={styles.itemText}>
							Примеры работ для iOS:
						</Text>		
						
						<Text style={styles.itemTextBlue}
							onPress={()=> this.goApple()}>
							App store
						</Text>
						
						<Text style={styles.itemText}>
							Наши контакты:
						</Text>
						
						<Text style={styles.itemText}>
							Тел.: +38-067-230-86-15
						</Text>				
						
						<Text style={styles.itemText}>
							E-mail: olegsherbak@ukr.net
						</Text>						
						
						<Text style={styles.itemText}>
							Будем рады сотрудничать!
						</Text>
					</View>
				</ScrollView>
			</View>
		);
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'center', 
		backgroundColor: 'white'
	},		
	pic: {
		height: 150,
		width: 200,
		borderRadius: 10,
		margin: 5
	},	
	containerView: {
		flex: 1,
		padding: 10,
		paddingBottom: 55,
		justifyContent: 'flex-start',
		backgroundColor: 'black'
	},		
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#48BBEC',
		borderWidth: 0,
		borderColor: 'whitesmoke'
	},	
	textSmall: {
		fontSize: 16,
		textAlign: 'center',
		margin: 14,
		fontWeight: 'bold',
		color: 'white'
	},		
	textLarge: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		marginRight: 20,
		fontWeight: 'bold',
		color: 'white'
	},	
    form: {
		flex: 1,
		padding: 10,
		justifyContent: 'flex-start',
		paddingBottom: 130,
		backgroundColor: 'white'
    },
 	itemWrap: {
		flex: 1,
		flexDirection: 'column', 
		flexWrap: 'wrap'
    },	
    itemTextBold: {
        fontSize: 28,
        textAlign: 'center',
        margin: 5,
        fontWeight: 'bold',
		color: 'white'
    },  
	itemText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 3,
        marginLeft: 2,
        color: 'white'
    },	
	itemTextBlue: {
        fontSize: 20,
        textAlign: 'center',
        margin: 3,
        marginLeft: 2,
        color: 'blue'
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
		fontWeight: 'bold'
    },
    loader: {
        marginTop: 20
    },
    error: {
        color: 'red',
        paddingTop: 10,
        textAlign: 'center'
    }
});

export default Coolworld;
