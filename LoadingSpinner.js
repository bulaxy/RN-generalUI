import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import isEmpty from 'lodash/isEmpty';

/*
Usage
<LoadingSpinner loadingMsg={this.state.loadingMsg} />
Redux - loading:true/false
*/

export class LoadingSpinner extends PureComponent {
	render() {
		return (
			<Spinner
				visible={
					this.props.loading.isloading 
				}
				textContent={!isEmpty(this.props.loadingMsg) ? this.props.loadingMsg : ''}
				textStyle={{ color: '#FFF' }}
				animation="fade"
				cancelable={false}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		loading: state.loading,
	}
}

export default connect(
	mapStateToProps,
)(LoadingSpinner);
