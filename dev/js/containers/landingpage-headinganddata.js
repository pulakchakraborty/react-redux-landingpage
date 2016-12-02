import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class HeadingAndData extends Component{
	render(){
		return(

			<div className ="row" >
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