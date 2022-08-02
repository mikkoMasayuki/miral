import React, { useEffect, useState } from "react";
import Maplace from 'maplace-js'
import { Link } from "react-router-dom";

const MapView = () => {
    useEffect(() => {
        const map = new Maplace({
            map_div: '#gmap',
            show_markers: true,
            // controls_type: 'list',
            // type : 'polygon',
            // controls_title: 'Choose a location:',
            map_options: {
                zoom: 12
            },
    
            locations: [
    
             {
                lat:24.4781577,
                lon: 54.3529111,
                title: 'Al Hisn',
                html:'<div class=" item"><a class="link" href="projects-single.html"> </a><div class="ftrd_img"><img src="assets/img/portfolio-03.webp"></div><div class="desc"><svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>Qasr Al Watan</h4><p>Abu Dhabi</p><p class="tag tag_1"><span>Discover</span></p><p class="tag tag_2"><span class="mana_ged">Managed</span></p></div></div>',
                icon: '/assets/img/pin.svg'
             
            },
    
             
    
             {
                lat:24.485129,
                lon: 54.366349,
                title: 'Al Danah',
                html:'<div class=" item"><a class="link" href="projects-single.html"> </a><div class="ftrd_img"><img src="assets/img/portfolio-03.webp"></div><div class="desc"><svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>Qasr Al Watan</h4><p>Abu Dhabi</p><p class="tag tag_1"><span>Discover</span></p><p class="tag tag_2"><span class="mana_ged">Managed</span></p></div></div>',
                icon: '/assets/img/pin.svg'
              
            },
    
    
            {
                
                lat:24.496896,
                lon: 54.592532,
                title: 'Yas Island',
                 html:'<div class=" item"><a class="link" href="projects-single.html"> </a><div class="ftrd_img"><img src="assets/img/single-01.webp"></div><div class="desc"><svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>Yas Waterworld</h4><p>Abu Dhabi</p><p class="tag tag_1"><span>Play</span></p><p class="tag tag_2"><span class="dev">Developed</span><span class="mana_ged">Managed</span></p></div></div>',
                icon: '/assets/img/pin.svg'
              
            },
    
    
           
            {
               lat:24.485946,
                lon: 54.603574,
                title: 'Yas Island Warner Bros',
                 html:'<div class=" item"><a class="link" href="projects-single.html"> </a><div class="ftrd_img"><img src="assets/img/portfolio-03.webp"></div><div class="desc"><svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>Warner Bros. World</h4><p>Abu Dhabi</p><p class="tag tag_1"><span>Play</span></p><p class="tag tag_2"><span class="dev">Developed</span><span class="mana_ged">Managed</span></p></div></div>',
                icon: '/assets/img/pin.svg'
          
          
            },
    
             {
               lat:24.465710,
                lon: 54.599639,
                title: 'Yas Plaza',
                 html:'<div class=" item"><a class="link" href="projects-single.html"> </a><div class="ftrd_img"><img src="assets/img/portfolio-03.webp"></div><div class="desc"><svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>Warner Bros. World</h4><p>Abu Dhabi</p><p class="tag tag_1"><span>Play</span></p><p class="tag tag_2"><span class="dev">Developed</span><span class="mana_ged">Managed</span></p></div></div>',
                icon: '/assets/img/pin.svg'
          
          
            },
    
             {
               lat:24.477409,
                lon: 54.601805,
                title: 'Yas water World',
                 html:'<div class=" item"><a class="link" href="projects-single.html"> </a><div class="ftrd_img"><img src="assets/img/portfolio-03.webp"></div><div class="desc"><svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>Warner Bros. World</h4><p>Abu Dhabi</p><p class="tag tag_1"><span>Play</span></p><p class="tag tag_2"><span class="dev">Developed</span><span class="mana_ged">Managed</span></p></div></div>',
                icon: '/assets/img/pin.svg'
          
          
            },
    
    
             {
               lat:24.507758,
                lon: 54.604797,
                title: 'Yas North',
                 html:'<div class=" item"><a class="link" href="projects-single.html"> </a><div class="ftrd_img"><img src="assets/img/portfolio-03.webp"></div><div class="desc"><svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>Warner Bros. World</h4><p>Abu Dhabi</p><p class="tag tag_1"><span>Play</span></p><p class="tag tag_2"><span class="dev">Developed</span><span class="mana_ged">Managed</span></p></div></div>',
                icon: '/assets/img/pin.svg'
          
          
            },
    
    
             {
               lat:24.499323,
                lon: 54.626142,
                title: 'Yas North',
                 html:'<div class=" item"><a class="link" href="projects-single.html"> </a><div class="ftrd_img"><img src="assets/img/portfolio-03.webp"></div><div class="desc"><svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>Warner Bros. World</h4><p>Abu Dhabi</p><p class="tag tag_1"><span>Play</span></p><p class="tag tag_2"><span class="dev">Developed</span><span class="mana_ged">Managed</span></p></div></div>',
                icon: '/assets/img/pin.svg'
          
          
            },
    
             {
               lat:24.496538,
                lon: 54.617613,
                title: 'Yas North',
                 html:'<div class=" item"><a class="link" href="projects-single.html"> </a><div class="ftrd_img"><img src="assets/img/portfolio-03.webp"></div><div class="desc"><svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>Warner Bros. World</h4><p>Abu Dhabi</p><p class="tag tag_1"><span>Play</span></p><p class="tag tag_2"><span class="dev">Developed</span><span class="mana_ged">Managed</span></p></div></div>',
                icon: '/assets/img/pin.svg'
          
          
            },
    
            {
               lat:24.496538,
                lon: 54.617613,
                title: 'Yas North',
                 html:'<div class=" item"><a class="link" href="projects-single.html"> </a><div class="ftrd_img"><img src="assets/img/portfolio-03.webp"></div><div class="desc"><svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>Warner Bros. World</h4><p>Abu Dhabi</p><p class="tag tag_1"><span>Play</span></p><p class="tag tag_2"><span class="dev">Developed</span><span class="mana_ged">Managed</span></p></div></div>',
                icon: '/assets/img/pin.svg'
          
          
            },
    
    
    
             {
               lat:24.484580,
                lon: 54.619598,
                title: 'Yas North',
                 html:'<div class=" item"><a class="link" href="projects-single.html"> </a><div class="ftrd_img"><img src="assets/img/portfolio-03.webp"></div><div class="desc"><svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>Warner Bros. World</h4><p>Abu Dhabi</p><p class="tag tag_1"><span>Play</span></p><p class="tag tag_2"><span class="dev">Developed</span><span class="mana_ged">Managed</span></p></div></div>',
                icon: '/assets/img/pin.svg'
          
          
            },
    
    
            {
               lat:24.525664,
                lon:  54.431043,
                title: 'Cultural District',
                 html:'<div class=" item"><a class="link" href="projects-single.html"> </a><div class="ftrd_img"><img src="assets/img/portfolio-03.webp"></div><div class="desc"><svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><path stroke="#9d9d9c" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"></path></svg><h4>Warner Bros. World</h4><p>Abu Dhabi</p><p class="tag tag_1"><span>Play</span></p><p class="tag tag_2"><span class="dev">Developed</span><span class="mana_ged">Managed</span></p></div></div>',
                icon: 'assets/img/pin-02.svg'
          
          
            }
    
    
    
    
            ],
            // listeners: {
            //     click: function(map, event) {
                    
            //     }
            // },
    
    
    
            styles:{
                'Greyscale':[ {"featureType": "administrative","elementType": "all","stylers": [{"visibility": "on" },{"saturation": -100},{"lightness": 20} ]},{"featureType": "road","elementType": "all","stylers": [ {"visibility": "on" }, {"saturation": -100},{ "lightness": 40}]},{"featureType": "water","elementType": "all","stylers": [{"visibility": "on" }, {"saturation": -10 },{ "lightness": 30}]},{"featureType": "landscape.man_made","elementType": "all","stylers": [{ "visibility": "simplified"},{"saturation": -60},{"lightness": 10}]},{"featureType": "landscape.natural","elementType": "all","stylers": [{"visibility": "simplified" },{"saturation": -60},{"lightness": 60}]},{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"},{"saturation": -100},{"lightness": 60}]},{"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"},{"saturation": -100},{"lightness": 60}]}]
            },
            controls_on_map: false
           
        }).Load();
    },[])
    return <React.Fragment>
        <section class="cstm_sec thumb_sec">
	<div class="filter_drop">
		<div class="bg_overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
				

					<div class="bt_wrap">
							<button class="show_results">Show 53 results</button>
							<button class="reset"> Reset</button>
						</div>
				</div>
			</div>
		</div>
	</div>




	<div class="container">
		<div class="row bt_row">
			<div class="col-md-12">
				<div class="bt_left">
					<button>Filter</button>
				</div>

				<div class="bt_right">
                    <Link className="btn" to="/">Thumbnails</Link>
					<a class="btn dark">Map</a>
				</div>
			</div>
		</div>


		
		<div class="row portfolio_map">
			<div class="col-md-12">
				<div class="map_bt">
					<a  class="btn dark" href="#">Abu Dhabi</a>
					<a class="btn " href="#">International</a>
				</div>
				<div id="gmap" ></div>
			</div>
		</div>
	</div>
</section>
    </React.Fragment>
}

export default MapView;