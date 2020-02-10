import React, { Component } from 'react';
//Core
import { View, Text, TouchableOpacity } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
//https://aboutreact.com/react-native-popup-menu/

//optional
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Title, Icon } from 'native-base'

//Usage <ViewInputDropdown iconName=string iconType=string field={{ title: string, options: array, value:integer  }} />

class ViewInputDropdown extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: null
		}
		this.onPressHandle = this.onPressHandle.bind(this);
	}
	_menu = null;
	setMenuRef = ref => {
		this._menu = ref;
	};
	showMenu = () => {
		this._menu.show();
	};
	hideMenu = () => {
		this._menu.hide();
	};
	onPressHandle = index => {
		this.setState({ value: index.i })
		this.hideMenu()
	}

	render() {
		if (typeof this.props.iconName == "undefined") {
		} else {
			var icon = [<Icon onPress={this.showMenu} style={{ Color: 'black' }} type={this.props.iconType} name={this.props.iconName} />]
		}
		var menuItems = []
		for (let i = 0; i < this.props.field.options.length; i++) {
			menuItems.push(
				<View>
					<MenuDivider />
					<MenuItem onPress={() => this.onPressHandle({ i })}>{this.props.field.options[i]} </MenuItem>
				</View>
			)
		}
		return (
			<View style={this.props.menustyle}>
				<Menu
					ref={this.setMenuRef}
					button={
						<TouchableOpacity onPress={this.showMenu}>
							<View>
								<Text>{(this.state.value == null) ? null : this.props.field.options[this.state.value]}</Text>
								{icon}
							</View>
						</TouchableOpacity>
					}>
					{menuItems}
				</Menu>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators(
		{
		},
		dispatch
	);
}


export default connect(mapStateToProps, matchDispatchToProps)(ViewInputDropdown);


