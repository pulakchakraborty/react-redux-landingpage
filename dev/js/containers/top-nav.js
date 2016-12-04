import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class TopNav extends Component {
    render() {
    	return(
		        <div >
					<ul id="landingpage-topnav">
					  <li><a className="active" href="#home" id="nav-logo"><img src="../../../assets/images/logo-connect.svg" alt="logo" className="img-responsive nav-logo-style"/></a></li>
					  <li className="nav-bar-right"><a href="#">What is Exact Connect?</a></li>
					  <li className="nav-bar-right"><a href="#">How it Works</a></li>
					  <li className="nav-bar-right hide-button" id="nav-button"><div><button className="btn btn-success btn-xsmall">{this.props.landingPageData}</button></div></li>
					</ul>
				</div>
    	);
    }
}

function mapStateToProps(state) {
    return {
        landingPageData: state.landingPageData.topcontent.buttontext
    };
}

export default connect(mapStateToProps)(TopNav);
