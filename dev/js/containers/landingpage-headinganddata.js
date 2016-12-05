import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TopNav from './top-nav.js'
import TopContent from './top-content.js'
import LandingPageContent from './landingpage-content.js'


class HeadingAndData extends Component{

	

	componentDidMount() {
      //console.log('Component DID MOUNT!');
        
        function isScrolledIntoView(el) {
        	//console.log(el);
		    let elemTop = el.getBoundingClientRect().top;
		    let elemBottom = el.getBoundingClientRect().bottom;
		    let topnavHeight = document.getElementById('landingpage-topnav').getBoundingClientRect().bottom;
		    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight) && (elemBottom >= parseInt(topnavHeight));
		    return isVisible;
		}


		window.onscroll = function() {hasScrolled()};

		function hasScrolled(){
			let isElementInView = isScrolledIntoView(document.getElementById("top-content-button-id"));
			let nav_button = document.getElementById("nav-button");
			if (isElementInView) {
			   // console.log('in view');
			    nav_button.className = "nav-bar-right hide-button"
			} else {
			   // console.log('out of view');
			    //console.log(nav_button.className);
			    nav_button.className = "nav-bar-right fadein-animation"

			}
		}

   }


	render(){
		return(

			<div className ="component-div" >
				<TopNav/>
				<TopContent/>
				<LandingPageContent/>
			</div>

		);
	}
}

function mapStateToProps(state){
	return{
		landingPageData: state.landingPageData
	}
		
}

export default connect(mapStateToProps)(HeadingAndData);