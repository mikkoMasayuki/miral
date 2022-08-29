import React from "react";
import { Link } from 'react-router-dom'

const SingleItem = props => {

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
	
			fetch('http://185.140.248.26:4052/project', requestOptions)
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
	
			fetch('http://185.140.248.26:4052/project', requestOptions)
			.then(response => response.json());
		}
	}

    return <React.Fragment>
        <div class="row head_content">
			
			<div class="col-md-6 content_left">
				<h2>{props.name} <span> {props.location} </span></h2>
				<div class="details">
					<div class="tag_wrap">
						{
							props.type
							.map(t => <span>{t}</span>)
							.reduce((prev, curr) => [prev, '', curr])
						}

						{
							props.role
							.map(t => <span  className={ t == 'Developed' ? 'dev' : 'mana_ged' }>{t}</span>)
							.reduce((prev, curr) => [prev, '', curr])
						}
						
					</div>
					<ul>
						<li><strong>Completed:</strong> {props.year}</li>
						<li><strong>Size:</strong> {props.size}</li>
						<li><strong>Value:</strong> {props.value} </li>
						<li><strong>Annual visitors:</strong>{props.annual_visitor}</li>
					</ul>					
				</div>

				

			</div>

			<div class="col-md-6 content_right">

				<p>{props.description}</p>

			</div>
			
		</div>

        <div class="row single_grid">
            {props.images.map(image => {
			return <div class="col-md-6 item">
				<img src={image.image_url} />
			</div>
            })}

			
		</div>
        
    </React.Fragment>;
}

export default SingleItem;