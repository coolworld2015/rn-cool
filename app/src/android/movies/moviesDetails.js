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

class MoviesDetails extends Component {
    constructor(props) {
        super(props);
		
		BackAndroid.addEventListener('hardwareBackPress', () => {
			if (this.props.navigator) {
				this.props.navigator.pop();
			}
			return true;
		});	
		
		this.state = {
			name: '',
			artist: '',
			album: '',
			duration: '',
			url: 'https://play.google.com/store/apps/details?id=io.cordova.ui_warehouse'
		};
		
		if (props.data) {
			this.state = {
				trackId: props.data.trackId,
				name: props.data.name,
				image: props.data.image,
				artist: props.data.artist,
				album: props.data.album,
				duration: props.data.duration,
				url: props.data.url
			};
		}	
    }
	
    deleteMovieDialog() {
		Alert.alert(
			'Delete track',
			'Are you sure you want to delete track ' + this.state.name + '?',
			[
				{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
				{
					text: 'OK', onPress: () => {
					this.deleteMovie();
					}
				},
			]
		);	
	}
	
	deleteMovie(id) {
		var id = this.state.trackId;
		var movies = [];

		AsyncStorage.getItem('rn-movies.movies')
			.then(req => JSON.parse(req))
			.then(json => {

				movies = [].concat(json);

				for (var i = 0; i < movies.length; i++) {
					if (movies[i].trackId == id) {
						movies.splice(i, 1);
						break;
					}
				}

				AsyncStorage.setItem('rn-movies.movies', JSON.stringify(movies))
					.then(json => {
							appConfig.movies.refresh = true;
							this.props.navigator.pop();
						}
					);

			})
			.catch(error => console.log(error))
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
        var image = <View />;
 
		image = <Image
			source={require('../../../img/react.gif')}
			style={{
				height: 150,
				width: 200,
				borderRadius: 10,
				margin: 5
			}}
		/>;
		
        return (
            <View style={styles.container}>

				
				<ScrollView>
					<View style={{
							flex: 1,
							padding: 10,
							paddingBottom: 55,
							justifyContent: 'flex-start',
							backgroundColor: 'black'
					}}>

					 
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
							Тел.: +38093xxxxxxx
						</Text>				
						
						<Text style={styles.itemText}>
							E-mail: coolworld@coolworld.com
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

export default MoviesDetails;
