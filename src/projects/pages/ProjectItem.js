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


	function putComma(val) {
		let ret = ''
		if (val === 'Yas Island Abu Dhabi') {
			ret = 'Yas Island, Abu Dhabi'
		} else {
			ret = val
		}
		if (val === 'Saadiyat Island Abu Dhabi') {
			ret = 'Saadiyat Island, Abu Dhabi'
		} else {
			ret = val
		}
		return ret

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
					<p>{putComma(props.location)}</p>

					<p className="tag tag_1">
						{
							props.type
							.map(t => <span>{t}</span>)
							.reduce((prev, curr) => [prev, '', curr])
						}
					</p>
					<p className="tag" >
						{
							props.business
							.map(t => <span className='mana_ged'>{t}</span>)
							.reduce((prev, curr) => [prev, '', curr])
						}
					</p>

                </div>
           </div>
        </div>

    );
}

export default ProjectItem;