import React, { useEffect, useState } from "react";
import Maplace from 'maplace-js'
import { Link } from "react-router-dom";
import MapList from "./maplist";
import queryString from 'query-string'


const MapView = props => {

    const [loadedFilter, setLoadedFilter] = useState(false);
	const [loadedProject, setLoadedProject] = useState();

	const parsed = queryString.parse(window.location.search);

    const openFilterHandler = () => setLoadedFilter(true)
    const closeFilterHandler = () => setLoadedFilter(false)

	useEffect(() => {

		const sendRequest = async () => {
            const response = await fetch('http://54.183.107.251:4052/project')

            const responseData = await response.json();
			const tmp = responseData.data
			const resp = tmp;

			
            setLoadedProject(() => {
				let arr = [];
				resp.forEach(element => {
					let img
					
					if(element.image.length != 0){
						
						img = (element.image && element.image[0].image_url)
					}else{
						img =''
					}
					arr.push(
						{
							lat: parseFloat(element.lat),
							lon: parseFloat(element.long),
							title: element.name,
							html:`<div class=" item"><a class="link" href="#"> </a><div class="ftrd_img"><img src="${img}"></div><div class="desc"><svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>${element.name}</h4><p>${element.location}</p><p class="tag tag_1"><span>Play</span></p><p class="tag tag_2"><span class="dev">Developed</span><span class="mana_ged">Managed</span></p></div></div>`,
							icon: '/assets/img/pin.svg',
							project_id: element.id
						}
						)
					});

					const map = new Maplace({
						map_div: '#gmap',
						show_markers: true,
						// controls_type: 'list',
						// type : 'polygon',
						// controls_title: 'Choose a location:',
						map_options: {
							zoom: 12
						},
				
					
						locations: arr,
						afterCreateMarker: function(index, location, marker) {
							console.log(marker.project_id)

							if (marker.project_id == parsed.id) {
								let tmp23 = document.querySelectorAll('div[title="'+marker.title+'"]');

								tmp23.forEach(el=>el.click());

								console.log(tmp23);
							}

							
						},
				
						styles:{
							'Greyscale':[ {"featureType": "administrative","elementType": "all","stylers": [{"visibility": "on" },{"saturation": -100},{"lightness": 20} ]},{"featureType": "road","elementType": "all","stylers": [ {"visibility": "on" }, {"saturation": -100},{ "lightness": 40}]},{"featureType": "water","elementType": "all","stylers": [{"visibility": "on" }, {"saturation": -10 },{ "lightness": 30}]},{"featureType": "landscape.man_made","elementType": "all","stylers": [{ "visibility": "simplified"},{"saturation": -60},{"lightness": 10}]},{"featureType": "landscape.natural","elementType": "all","stylers": [{"visibility": "simplified" },{"saturation": -60},{"lightness": 60}]},{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"},{"saturation": -100},{"lightness": 60}]},{"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"},{"saturation": -100},{"lightness": 60}]}]
						},
						controls_on_map: false
					   
					}).Load();

					return map
				});
				
				
			};
			
			sendRequest();


	},[])

   
    return <React.Fragment>
            <section class="cstm_sec thumb_sec">
	<div className={`filter_drop ${ loadedFilter && "shown"}`}>
		<div className="bg_overlay" onClick={closeFilterHandler}></div>
		<div className="container">
			<div className="row">
            <   div className="col-md-12">
						<div class="frm_wrap">
							<fieldset>
								<legend>Type:</legend>
								<label>
									<input type="checkbox" />
									<span className="checkmark"></span>
									All
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Dine
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Discover
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Meet
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Play
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Stay
								</label>
							</fieldset>



							<fieldset>
								<legend>Role:</legend>
								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									All
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Developed
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Managed
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Investment
								</label>
							</fieldset>



							<fieldset>
								<legend>Location:</legend>
								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									All
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Yas Island, Abu Dhabi
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Saadiyat Island, Abu Dhabi
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Abu Dhabi City
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Jordan
								</label>


								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Kazakhstan
								</label>
							</fieldset>


							<fieldset>
								<legend>Business:</legend>
								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									All
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Miral Group
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Miral Destinations
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Miral Experiences
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Yas Asset Management
								</label>
							</fieldset>


							<fieldset>
								<legend>More:</legend>
								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Destination
								</label>

								<label>
									<input type="checkbox" name="" />
									<span className="checkmark"></span>
									Favourites
								</label>
							</fieldset>



							<div className="bt_wrap">
								<button className="show_results" onClick={closeFilterHandler}>Show 53 results</button>
								<button className="reset"> Reset</button>
							</div>
						</div>
					</div>
			</div>
		</div>
	</div>




	<div className="container">
		<div className="row bt_row">
			<div className="col-md-12">
				<div className="bt_left">
					<button className={`${loadedFilter && 'active'}`} onClick={openFilterHandler}>Filter</button>
				</div>

				<div className="bt_right">
                    <Link className="btn" to="/">Thumbnails</Link>
					<a className="btn dark">Map</a>
				</div>
			</div>
		</div>


		
		<div className="row portfolio_map">
			<div className="col-md-12">
				<div className="map_bt">
					<a  className="btn dark" href="#">Abu Dhabi</a>
					<a className="btn " href="#">International</a>
				</div>
				<div id="gmap" ></div>
			</div>
		</div>
	</div>
</section>
    </React.Fragment>
}

export default MapView;