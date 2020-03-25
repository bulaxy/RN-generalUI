
import React, { Component } from 'react';
import MultiSelect from 'react-native-multiple-select';
/*
	<DropdownSelect 
		items = [{},{}]
		uniqueKey = ""
		displayKey = "" 
		selectName = ""
	 />
*/
export default class DropdownSelect extends Component {
	state = {
		selectedItems: [],
		selectedText: "Select " + this.props.selectName
	};
	onSelectedItemsChange = selectedItems => {
		var selectedText = ""
		for (var i = 0; i < selectedItems.length; i++) {
			for (var j = 0; j < items.length; j++) {
				if (this.props.items[j].id == selectedItems[i]) {
					selectedText = selectedText + this.props.items[j].name + ", "
					break;
				}
			}
		}
		selectedText = selectedText.substring(0, selectedText.length - 2) //Trim last ", "
		this.setState({
			selectedItems: selectedItems,
			selectedText: selectedText
		});
	};

	render() {
		return (
			<MultiSelect
				items={this.props.items}
				uniqueKey={this.props.uniqueKey}
				ref={component => {
					this.multiSelect = component;
				}}
				hideTags
				onSelectedItemsChange={this.onSelectedItemsChange}
				selectedItems={this.state.selectedItems}
				selectText={this.state.selectedText}
				searchInputPlaceholderText={`Searching ${this.props.selectName} ...`}
				displayKey={this.props.displayKey}
				hideSubmitButton={true}
			/>
		);
	}
}
