import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import googleMapStyles from './GoogelMapStyle.js';
import $ from 'jquery';
import InfoWindowEx from "./infoMap.js";

	
export class MapContainer extends Component {
	constructor(props) {
		super(props);
	  }
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
		projects: [],
		selectMark: false,
		initial: {
			lat: 24.481952,
			lng: 54.497535
			}
	  };

	  componentDidMount() {
        fetch('http://54.183.107.251:4052/project')
        .then((response) => response.json())
        .then(projectlist => {
            this.setState({
				 projects: projectlist.data 
			});
        });
	
		
    }

	handleClick = (e) => {
		this.inputElement.click();
	  }

	onMarkerClick = (props, marker, e) =>{
	  this.setState({
		selectedPlace: props,
		activeMarker: marker,
		showingInfoWindow: true,
		selectMark:true
	  });
	}
  
	onClose = props => {
	  if (this.state.showingInfoWindow) {
		this.setState({
		  showingInfoWindow: false,
		  activeMarker: null
		});
	  }
	};

	onDubai = props => {
		const test = window.document.querySelectorAll('div[title="Abu Dhabi Plaza"]')

		test.forEach(el=>el.click());
	}

	onFave = (place, marker, e) => {
		const elem = window.document.getElementById(`star_${place.projId}`);
		
		console.log(place)
		if (place.fav == 0) {
			const requestOptions = {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ 
					id: place.projId,
					is_favorite:1
				})
			};
			elem.classList.add("active");

	
			fetch('http://54.183.107.251:4052/project', requestOptions)
			.then(response => {
				
				fetch('http://54.183.107.251:4052/project')
				.then((response) => response.json())
				.then(projectlist => {
					this.setState({
						 projects: projectlist.data 
					});
	  
					if (this.state.showingInfoWindow) {
					  this.setState({
						showingInfoWindow: false,
						selectedPlace: place,
						activeMarker: null
					  });
					}
				});
			});


			
		}else{
			const requestOptions = {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ 
					id: place.projId,
					is_favorite:0
				})
			};

			elem.classList.remove("active");

	
			fetch('http://54.183.107.251:4052/project', requestOptions)
			.then(response => {
				fetch('http://54.183.107.251:4052/project')
				.then((response) => response.json())
				.then(projectlist => {
					this.setState({
						 projects: projectlist.data 
					});
	  
					if (this.state.showingInfoWindow) {
					  this.setState({
						showingInfoWindow: false,
						selectedPlace: place,
						activeMarker: null
					  });
					}
				});
			});

			
		}

	}

	onGeneral = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
			  showingInfoWindow: false,
			  activeMarker: null,
			  initial: {
				lat: 24.481952,
				lng: 54.497535
				}
			});
		  }
	}

	_mapLoaded(mapProps, map) {
		map.setOptions({
		   styles:  [ {"featureType": "administrative","elementType": "all","stylers": [{"visibility": "on" },{"saturation": -100},{"lightness": 20} ]},{"featureType": "road","elementType": "all","stylers": [ {"visibility": "on" }, {"saturation": -100},{ "lightness": 40}]},{"featureType": "water","elementType": "all","stylers": [{"visibility": "on" }, {"saturation": -10 },{ "lightness": 30}]},{"featureType": "landscape.man_made","elementType": "all","stylers": [{ "visibility": "simplified"},{"saturation": -60},{"lightness": 10}]},{"featureType": "landscape.natural","elementType": "all","stylers": [{"visibility": "simplified" },{"saturation": -60},{"lightness": 60}]},{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"},{"saturation": -100},{"lightness": 60}]},{"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"},{"saturation": -100},{"lightness": 60}]}]
		})
	 }
  render() {
    return (
	<React.Fragment>

		<section class="cstm_sec thumb_sec">

		<div className="container">
			<div className="row bt_row">
				<div className="col-md-12">
					<div className="bt_left">
						
					</div>

					<div className="bt_right">
						<Link className="btn" to="/projects">Thumbnails</Link>
						<a className="btn dark">Map</a>
					</div>
				</div>
			</div>


			
			<div className="row portfolio_map">
				<div className="col-md-12">
					<div className="map_bt">
						<a onClick={this.onDubai} className="btn dark" href="#">Abu Dhabi</a>
						<a onClick={this.onGeneral} className="btn " href="#">International</a>
					</div>
					<div id="gmap" >
					

					<Map
						
						google={this.props.google}
						zoom={12}
						style={this.props.mapStyle}
						initialCenter={this.state.initial}
						center={this.state.initial}
						onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
					>

						{this.state.projects.map((project, i) => (
							<Marker position={{lat: project.lat, lng: project.long}} onClick={this.onMarkerClick} name={project.name} icon={{
								url: "../assets/img/pin.svg",
								}} 
							location={project.location}
							type={project.type.split(',').map(t => <span>{t}</span>)
							.reduce((prev, curr) => [prev, '', curr])}
							role={project.role.split(',').map(t => <span  className={ t == 'Developed' ? 'dev' : 'mana_ged' }>{t}</span>)
							.reduce((prev, curr) => [prev, '', curr])}
							image={project.image[0].image_url}
							title={project.name}
							fav={project.is_favorite}
							projId={project.id}
							ref={() => { 
								const markVar = this.state.selectMark
								function selectMap(selectMark = markVar){

									let params = (new URL(document.location)).searchParams;
									let mapId = params.get("id");

									if (project.id == mapId && selectMark == false ) {
									
									const test = window.document.querySelectorAll('div[title="'+project.name+'"]')

									test.forEach(el=>el.click());
									}else if (selectMark == false && mapId == null) {
										const test = window.document.querySelectorAll('div[title="Abu Dhabi Plaza"]')

										test.forEach(el=>el.click());
									}
									
								}

								setTimeout(selectMap, 500);
									
								  
								}}
								>
								
						 </Marker>

						 
						))

						}
						
								<InfoWindowEx
								marker={this.state.activeMarker}
								visible={this.state.showingInfoWindow}
								>
									

									<div className=" item" ><a className={`link`}  > </a><div className="ftrd_img"><img src={this.state.selectedPlace.image} /></div><div className="desc"><svg className={`star_icon ${ this.state.selectedPlace.fav && 'active'}`} id={`star_${this.state.selectedPlace.projId}`} onClick={this.onFave.bind(this, this.state.selectedPlace)} width="25" height="25" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" className="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>{this.state.selectedPlace.name}</h4><p>{this.state.selectedPlace.location}</p><p className="tag tag_1">{this.state.selectedPlace.type}</p><p className="tag tag_2">{this.state.selectedPlace.role}</p></div></div>
								</InfoWindowEx>
						
						
					</Map>
					</div>
				</div>
			</div>
		</div>
		</section>

		
	</React.Fragment>
      
    );
  }

}

MapContainer.defaultProps = googleMapStyles;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyANt6Xy9LQccwaqMhnj1MQ9_CFVftSYuKA'
})(MapContainer);