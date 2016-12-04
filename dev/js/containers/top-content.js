import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class TopContent extends Component {
    render() {
    	return(
		        <div className="top-content">
					<div><img src={this.props.landingPageData.image} alt="bg" className="img-responsive top-content-image"/></div>
					<div className="top-content-data">
						<div className="top-content-heading">
							{this.props.landingPageData.heading}
						</div>
						<div className="top-content-caption">
							{this.props.landingPageData.caption}
						</div>
						<div className="top-content-button">
							<button className="btn btn-success btn-small" id="top-content-button-id">{this.props.landingPageData.buttontext}</button>
						</div>
					</div>
				</div>
    	);
    }
}

function mapStateToProps(state) {
    return {
        landingPageData: state.landingPageData.topcontent
    };
}

export default connect(mapStateToProps)(TopContent);
