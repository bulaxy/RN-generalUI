
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
export default class DropdownMultiSelect extends Component {
	state = {
		selectedItems: [],
		selectedText: "Select " + this.props.selectName
	};
	onSelectedItemsChange = selectedItems => {
		console.log(selectedItems)
		var selectedText = ""
		selectedItems.forEach(item => {
			for (var i = 0; i < this.props.items.length; i++) {
				if (this.props.items[i][this.props.uniqueKey] == item) {
					selectedText = selectedText + this.props.items[i][this.props.displayKey] + ", "
					break;
				}
			}
		});
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
