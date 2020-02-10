import React, { Component } from 'react';
//Core
import { View, Text, TouchableOpacity } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
//https://aboutreact.com/react-native-popup-menu/

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Button, Icon, Item, Right } from 'native-base'

//Usage <ViewInputDropdown iconName=string iconType=string field={{ title: string, options: array, value:integer  }} />
const MENUSTYLE = {
	marginRight: 10,
	width: 200,
	flex: 1,
	marginBottom:8,
	marginTop:8
}
const TEXTSTYLE = {
	fontSize:18,
}
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
			var icon = [<Icon onPress={this.showMenu} style={{ Color: 'black' }} name="arrow-down" />]
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
			<Item style={MENUSTYLE}>
				<Right>
					<Button transparent style={{ width:'100%',justifyContent: 'center', alignSelf: 'center' }} onPress={this.showMenu}>
						<Text style={TEXTSTYLE} >{this.props.field.options[this.state.value]}</Text>
					</Button>
				</Right>
				<Menu
					ref={this.setMenuRef}
					button={
						<TouchableOpacity onPress={this.showMenu}>
							{icon}
						</TouchableOpacity>
					}>
					{menuItems}
				</Menu>
			</Item>
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


