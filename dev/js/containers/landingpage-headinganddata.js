import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class HeadingAndData extends Component{

	

	componentDidMount() {
      //console.log('Component DID MOUNT!');
        
        function isScrolledIntoView(el) {
        	//console.log(el);
		    var elemTop = el.getBoundingClientRect().top;
		    var elemBottom = el.getBoundingClientRect().bottom;
		    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
		    return isVisible;
		}


		window.onscroll = function() {hasScrolled()};

		function hasScrolled(){
			var isElementInView = isScrolledIntoView(document.getElementById("top-content-button-id"));
			var nav_button = document.getElementById("nav-button");
			if (isElementInView) {
			   // console.log('in view');
			    nav_button.className = "nav-bar-right hide-button"
			} else {
			   // console.log('out of view');
			    //console.log(nav_button.className);
			    nav_button.className = "nav-bar-right"

			}
		}

   }


	render(){
		return(

			<div className ="" >
				<div>
					<ul>
					  <li><a className="active" href="#home" id="nav-logo"><img src="../../../assets/images/logo-connect.svg" alt="logo" className="img-responsive nav-logo-style"/></a></li>
					  <li className="nav-bar-right"><a href="#">What is Exact Connect?</a></li>
					  <li className="nav-bar-right"><a href="#">How it Works</a></li>
					  <li className="nav-bar-right hide-button" id="nav-button"><div><button className="btn btn-success btn-xsmall">{this.props.landingPageData.topcontent.buttontext}</button></div></li>
					</ul>
				</div>
				
				<div className="top-content">
					<img src={this.props.landingPageData.topcontent.image} alt="bg" className="img-responsive top-content-image"/>
					<div className="top-content-data">
						<div className="top-content-heading">
							{this.props.landingPageData.topcontent.heading}
						</div>
						<div className="top-content-caption">
							{this.props.landingPageData.topcontent.caption}
						</div>
						<div className="top-content-button">
							<button className="btn btn-success btn-small" id="top-content-button-id">{this.props.landingPageData.topcontent.buttontext}</button>
						</div>
					</div>
				</div>
				<div className="row row-style">
					<div className="col-md-2"></div>
					<div className="col-md-8">
						<div className="heading">{this.props.landingPageData.rowone.heading}</div>
						<div className="data">{this.props.landingPageData.rowone.data}</div>
					</div>
					<div className="col-md-2"></div>
				</div>
				<div className="row advantages-section">
					<div className="col-md-2"></div>
					<div className="col-md-8">
					<div className="row">
						<div className="col-md-4">
							<div className="">
								<img src={this.props.landingPageData.rowtwo.colone.icon} alt="iconone" className="img-responsive advantages-section-icons"/>
							</div>
							<div className="heading-small">{this.props.landingPageData.rowtwo.colone.heading}</div>
							<div className="data">{this.props.landingPageData.rowtwo.colone.data}</div>
						</div>
						<div className="col-md-4">
							<div className="">
								<img src={this.props.landingPageData.rowtwo.coltwo.icon} alt="icontwo" className="img-responsive advantages-section-icons"/>
							</div>
							<div className="heading-small">{this.props.landingPageData.rowtwo.coltwo.heading}</div>
							<div className="data">{this.props.landingPageData.rowtwo.coltwo.data}</div>
						</div>
						<div className="col-md-4">
							<div className="">
								<img src={this.props.landingPageData.rowtwo.colthree.icon} alt="iconthree" className="img-responsive advantages-section-icons"/>
							</div>
							<div className="heading-small">{this.props.landingPageData.rowtwo.colthree.heading}</div>
							<div className="data">{this.props.landingPageData.rowtwo.colthree.data}</div>
						</div>
					</div>
					</div>
					<div className="col-md-2"></div>
				</div>
				<div className="row row-style">
					<div className="col-md-2"></div>
					<div className="col-md-8">
						<div className="container">
							<div className="tile">
								<img src={this.props.landingPageData.rowfour.icon} alt="iconthree" className="img-responsive advantages-section-icons"/>
							</div>
							<div className="tile">
								<div className="heading-small-alt">{this.props.landingPageData.rowfour.heading}</div>
								<div className="data">{this.props.landingPageData.rowfour.data}</div>
							</div>
						</div>
					</div>
					<div className="col-md-2"></div>
				</div>
				<div className="row row-style">
					<div className="col-md-2"></div>
					<div className="col-md-8">
						<div className="container">
							<div className="tile">
								<div className="heading-small-alt">{this.props.landingPageData.rowfive.heading}</div>
								<div className="data">{this.props.landingPageData.rowfive.data}</div>
							</div>
							<div className="tile">
								<img src={this.props.landingPageData.rowfive.icon} alt="iconthree" className="img-responsive advantages-section-icons"/>
							</div>
						</div>
					</div>
					<div className="col-md-2"></div>
				</div>
				<div className="row row-style">
					<div className="col-md-2"></div>
					<div className="col-md-8">
						<div className="container">
							<div className="tile">
								<img src={this.props.landingPageData.rowsix.icon} alt="iconthree" className="img-responsive advantages-section-icons"/>
							</div>
							<div className="tile">
								<div className="heading-small-alt">{this.props.landingPageData.rowsix.heading}</div>
								<div className="data">{this.props.landingPageData.rowsix.data}</div>
							</div>
						</div>
					</div>
					<div className="col-md-2"></div>
				</div>
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