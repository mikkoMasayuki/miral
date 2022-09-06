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