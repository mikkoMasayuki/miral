import React from "react";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

const SingleItem = props => {

	const [locationKeys, setLocationKeys] = useState([]);
	const history = useHistory();

	useEffect(() => {
		return history.listen((location) => {
		  if (history.action === "PUSH") {
			setLocationKeys([location.key]);
		  }
	
		  if (history.action === "POP") {
			if (locationKeys[1] === location.key) {
			  setLocationKeys(([_, ...keys]) => keys);
	
			  // Handle forward event
			  window.location.replace('/')
			} else {
			  setLocationKeys((keys) => [location.key, ...keys]);
	
			  // Handle back event
			 // alert('backward')
			}
		  }
		});
	  }, [locationKeys]);	

	const openFavHandler = e => {
		const fav = document.getElementById(e)
		fav.classList.toggle("active");

		if (fav.classList.contains('active')) {
			const requestOptions = {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ 
					id: e,
					is_favorite:1
				})
			};
	
			fetch('http://3.28.53.5:4052/project', requestOptions)
			.then(response => response.json());
		}else{
			const requestOptions = {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ 
					id: e,
					is_favorite:0
				})
			};
	
			fetch('http://3.28.53.5:4052/project', requestOptions)
			.then(response => response.json());
		}
	}

	function removeHttp(url) {
		return url.replace(/^https?:\/\/www./, '');
	}

	function addHttp(url) {
		if (url.substr(0, 5) === 'https' || url.substr(0, 4) === 'http') {
			return url
		} else {
			console.log('https://'+url)
			return 'https://'+url
		}
	}	

	function putComma(val) {
		let ret = val
		if (val === 'Yas Island Abu Dhabi') {
			ret = 'Yas Island, Abu Dhabi'
		}
		if (val === 'Saadiyat Island Abu Dhabi') {
			ret = 'Saadiyat Island, Abu Dhabi'
		}
		return ret

}


    return <React.Fragment>
        <div class="row head_content">
			
			<div class="col-md-12 content_left">
				<h2>{props.name} <span> {putComma( props.location )} </span></h2>
				<div class="details">
					<div class="tag_wrap">
						{
							props.type
							.map(t => <span>{t}</span>)
							.reduce((prev, curr) => [prev, '', curr])
						}
						<br/>
						{
							props.business
							.map(t => <span class='mana_ged'>{t}</span>)
							.reduce((prev, curr) => [prev, '', curr])
						}
						
					</div>
					<ul>
						<li><strong>Completed:</strong> {props.year}</li>
						<li><strong>Size (sq.m):</strong> {props.size}</li>
						<li><strong>Website: </strong><a target="_blank" href={addHttp(props.website)}>{removeHttp(props.website)}</a></li>
					</ul>					
				</div>

				<div class=" content_right">

				<p>{props.description}</p>

			</div>

			</div>

			
			
		</div>

        <div class="row single_grid">
            {props.images.map(image => {
			return <div class="col-md-6 item">
				<img src={ typeof(image.image_url) !== 'undefined' && image.image_url != null ? image.image_url : '' } />
			</div>
            })}

			
		</div>
        
    </React.Fragment>;
}

export default SingleItem;