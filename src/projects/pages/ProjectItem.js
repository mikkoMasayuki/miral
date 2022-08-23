import React from "react";
import { Link } from 'react-router-dom'

const ProjectItem = props => {

	
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

    return (

        <div className="col-md-3 item">
			<div class="inner_wrap">
           <Link to={`project/${props.name}/${props.id}`} className='link' ></Link>
                <div className="ftrd_img">
						{props.image && <img src={props.image.image_url} /> }
						
				</div>

                <div className="desc">

			  
					<svg id={props.id} className={`star_icon ${props.favorite && 'active'}`} onClick={()=>openFavHandler(props.id) }  width="25" height="25" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 122.88 117.1">
						<path stroke="#9d9d9c" stroke-width="3" fill="none" className="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"/>
					</svg>

                    <h4 >{props.name}</h4>
					<p>{props.location}</p>

					<p className="tag tag_1">
						{
							props.type
							.map(t => <span>{t}</span>)
							.reduce((prev, curr) => [prev, '', curr])
						}
						</p>
					<p className="tag tag_2">
						{
							props.role
							.map(t => <span className={ t == 'Developed' ? 'dev' : 'mana_ged' }>{t}</span>)
							.reduce((prev, curr) => [prev, '', curr])
						}
					</p>

                </div>
           </div>
        </div>

    );
}

export default ProjectItem;