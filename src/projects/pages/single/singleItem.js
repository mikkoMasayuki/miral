import React from "react";
import { Link } from 'react-router-dom'

const SingleItem = props => {
    return <React.Fragment>
        <div class="row head_content">
			
			<div class="col-md-6 content_left">
				<h2>{props.name} <span> {props.location} </span></h2>

				<div class="tag_wrap">
					<span>Play</span>
					<span class="dev">Developed</span>
					<span class="mana_ged">Managed</span>
				</div>

				<p>{props.description}</p>

			</div>

			<div class="col-md-6 content_right">
				<div class="bt_wrap">
					<Link className="btn" to="/">Show on map</Link>
					<a class="btn">Website</a>
					<button class="btn star">
						<svg class="star_icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1">
							<path stroke="#4a4a49" stroke-width="3" fill="none" class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"/>
						</svg>
					</button>
				</div>


				<table>
					<tr>
						<td>Completion:</td>
						<td><strong>{props.year}</strong></td>
					</tr>


					<tr>
						<td>Size:</td>
						<td><strong>{props.size}</strong></td>
					</tr>

					<tr>
						<td>Value:</td>
						<td><strong> {props.value} / AED75m</strong></td>
					</tr>


					<tr>
						<td>Annual visitors:</td>
						<td><strong>{props.annual_visitor}</strong></td>
					</tr>
				</table>



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