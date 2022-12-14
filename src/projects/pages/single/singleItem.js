import React from "react";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

const SingleItem = props => {

	const [locationKeys, setLocationKeys] = useState([]);
	const history = useHistory();



    const queryParams = new URLSearchParams(window.location.search)
    const lang = queryParams.get("l")    

    let urlparams = "?l="+lang

    let lang_about = 'About'
	let lang_filter_projects = 'FILTER PROJECTS'
	let lang_reset = 'RESET'
	let lang_type = 'Type'
	let lang_all = 'All'
	let lang_most_popular = 'Most Popular'
	let lang_stay = 'Stay'
	let lang_play = 'Play'
	let lang_dine = 'Dine'
	let lang_business_venues = 'Business Venues'
	let lang_culture = 'Culture'
	let lang_destination = 'Destination'

	let lang_location = 'Location'
	let lang_yas_island = 'Yas Island'
	let lang_abu_dhabi = 'Abu Dhabi'
	let lang_saadiyat_island = 'Saadiyat Island'
	let lang_al_ain = 'Al Ain'
	let lang_jordan = 'Jordan'
	let lang_kazakhstan = 'Kazakhstan'

	let lang_business = 'Business'
	let lang_miral = 'Miral'
	let lang_miral_destinations = 'Miral Destinations'
	let lang_miral_experiences = 'Miral Experiences'
	let lang_yas_asset_management = 'Yas Asset Management'

	let lang_completed = 'Completed: '
	let lang_size = 'Size (sqm.): '
	let lang_website = 'Website: '
	let lang_value = 'Value (AED): '
	let lang_readmore = 'Read more'

	let lang_description = props.description
	let lang_headline = props.headline_en
	let lang_name_field = props.name
	let lang_location_field = props.location


    if(lang === null || lang!=='ar') {
        urlparams = ""
    } else {
        lang_about = 'نبذة عن الحافظة'
		lang_filter_projects = 'تصفية نتائج البحث'
		lang_reset = 'إعادة ضبط'
		lang_type = 'نوع'
		lang_all = 'الكل'
		lang_most_popular = 'الأكثر شيوعاً'
		lang_stay = 'الفنادق'
		lang_play = 'التجارب'
		lang_dine = 'المطاعم'
		lang_business_venues = 'مرافق فعاليات الأعمال'
		lang_culture = 'ثقافة'
		lang_destination = 'وجهات'

		lang_location = 'الموقع'
		lang_yas_island = 'جزيرة ياس'
		lang_abu_dhabi = 'أبوظبي'
		lang_saadiyat_island = 'جزيرة السعديات'
		lang_al_ain = 'العين'
		lang_jordan = 'الأردن'
		lang_kazakhstan = 'كازخستان'		

		lang_business = 'المنشأة'
		lang_miral = 'ميرال'
		lang_miral_destinations = 'ميرال ديستينيشنز'
		lang_miral_experiences = 'ميرال إكسبيرينسز'
		lang_yas_asset_management = 'ياس لإدارة الأصول'		

		lang_completed = 'سنة الإنجاز:'
		lang_size = 'المساحة (متر مربع):'
		lang_website = 'الموقع الالكتروني:'		
		lang_value = 'القيمة:'
		lang_readmore = 'اقرأ المزيد'
		lang_description = props.description_ar
		lang_headline = props.headline_ar
		lang_name_field = props.name_ar

			let str_compare = 'Yas Island'
			if(props.location.toLowerCase() === str_compare.toLowerCase()) {
				lang_location_field = 'جزيرة ياس'	
			}

			str_compare = 'Abu Dhabi'
			if(props.location.toLowerCase() === str_compare.toLowerCase()) {
				lang_location_field = 'أبوظبي'	
			}

			str_compare = 'Saadiyat Island'
			if(props.location.toLowerCase() === str_compare.toLowerCase()) {
				lang_location_field = 'جزيرة السعديات'	
			}

			str_compare = 'Al Ain'
			if(props.location.toLowerCase() === str_compare.toLowerCase()) {
				lang_location_field = 'العين'	
			}

			str_compare = 'Jordan'
			if(props.location.toLowerCase() === str_compare.toLowerCase()) {
				lang_location_field = 'الأردن'
			}

			str_compare = 'Kazakhstan'
			if(props.location.toLowerCase() === str_compare.toLowerCase()) {
				lang_location_field = 'كازخستان'	
			}														
    }	



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
	
			fetch('https://mrl-portfolio.com/project', requestOptions)
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
	
			fetch('https://mrl-portfolio.com/project', requestOptions)
			.then(response => response.json());
		}
	}

	function removeHttp(url) {
		//return url.replace(/^https?:\/\/www./, '');
		let strip =  url.replace("www.", '')
			strip = strip.replace("https://", '')
			strip = strip.replace("http://", '')

		return strip
	}

	function addHttp(url) {
		if (url.substr(0, 5) === 'https' || url.substr(0, 4) === 'http') {
			return url
		} else {
			console.log('https://'+url)
			return 'https://'+url
		}
	}	

	function putComma(val,val2) {
		let ret = val
		if (val === 'Yas Island Abu Dhabi') {
			ret = 'Yas Island, Abu Dhabi'
		}
		if (val === 'Saadiyat Island Abu Dhabi') {
			ret = 'Saadiyat Island, Abu Dhabi'
		}
		if (val.toUpperCase() === val2.toUpperCase()) {
			ret = ''
		}		
	
		return ret

}

function singleItemBlock() {
let lc_year =''
let lc_size = ''
let lc_web = ''
let lc_val = ''

	if ( props.year.length > 0 ) {
		lc_year = <li><strong>{lang_completed}</strong> {props.year}</li>
	}
	if ( props.size.length > 0 ) {
		lc_size = <li><strong>{lang_size}</strong> {props.size}</li>
	} 
	if ( props.value.length > 0 ) {
		lc_val = <li><strong>{lang_value}</strong> {props.value}</li>
	} 	
	if ( props.website.length > 0 ) {
		lc_web = <li><strong>{lang_website}</strong> <a target="_blank" href={addHttp(props.website)}>{removeHttp(props.website)}</a></li>
	} 
return ( <ul>
		{lc_year}
		{lc_size}
		{lc_val}
		{lc_web}
	</ul>)
}

let real_images = []

props.images.map(image => {
	if (typeof(image.image_url) !== 'undefined' && image.image_url != null && image.image_url != '/assets/img/upload-placeholder.png')  {
		real_images.push(image.image_url)
	}
})

    return <React.Fragment>
        <div class="row head_content">
			
			<div class="col-md-12 content_left">
				<h2>{lang_name_field} <span> {putComma( lang_location_field,lang_name_field )} </span></h2>
				<div class="details">
					<div class="tag_wrap">
						{

props.type
.map(t => {
	let lang_tag = <span>{t}</span>
	let str_compare = ''
	if(lang === null || lang!=='ar') {
		return lang_tag
	} else {
		str_compare = 'Most Popular'
		if(t.toLowerCase() === str_compare.toLowerCase()) {
			lang_tag = <span>{lang_most_popular}</span>
			return lang_tag
		}									
		str_compare = 'Stay'
		if(t.toLowerCase() === str_compare.toLowerCase()) {
			lang_tag = <span>{lang_stay}</span>
			return lang_tag
		}
		str_compare = 'Play'
		if(t.toLowerCase() === str_compare.toLowerCase()) {
			lang_tag = <span>{lang_stay}</span>
			return lang_tag
		}	
		str_compare = 'Dine'
		if(t.toLowerCase() === str_compare.toLowerCase()) {
			lang_tag = <span>{lang_dine}</span>
			return lang_tag
		}	
		str_compare = 'Business Venues'
		if(t.toLowerCase() === str_compare.toLowerCase()) {
			lang_tag = <span>{lang_dine}</span>
			return lang_tag
		}		
		str_compare = 'Culture'
		if(t.toLowerCase() === str_compare.toLowerCase()) {
			lang_tag = <span>{lang_dine}</span>
			return lang_tag
		}		
		str_compare = 'Destination'
		if(t.toLowerCase() === str_compare.toLowerCase()) {
			lang_tag = <span>{lang_dine}</span>
			return lang_tag
		}																																									
	}



})
.reduce((prev, curr) => [prev, '', curr])
						}
						<br/>
						{
props.business
.map(t => {

let lang_tag = <span className='mana_ged'>{t}</span>
let str_compare = ''
if(lang === null || lang!=='ar') {
	return lang_tag
} else {
	
	str_compare = 'Miral'
	if(t.toLowerCase() === str_compare.toLowerCase()) {
		lang_tag = <span className='mana_ged'>{lang_miral}</span>
		return lang_tag
	}			
	str_compare = 'Miral Destinations'
	if(t.toLowerCase() === str_compare.toLowerCase()) {
		lang_tag = <span className='mana_ged'>{lang_miral_destinations}</span>
		return lang_tag
	}		
	str_compare = 'Miral Experiences'
	if(t.toLowerCase() === str_compare.toLowerCase()) {
		lang_tag = <span className='mana_ged'>{lang_miral_experiences}</span>
		return lang_tag
	}								
	str_compare = 'Yas Asset Management'
	if(t.toLowerCase() === str_compare.toLowerCase()) {
		lang_tag = <span className='mana_ged'>{lang_yas_asset_management}</span>
		return lang_tag
	}

}							
})
.reduce((prev, curr) => [prev, '', curr])
						}
						
					</div>
					
						{
						/*	
						<ul>
						<li><strong>{lang_completed}</strong> {props.year}</li>
						<li><strong>{lang_size} {(lang === null || lang!=='ar') ? '(sq.m)' : ''}</strong> {props.size}</li>
						<li><strong>{lang_website} </strong><a target="_blank" href={addHttp(props.website)}>{removeHttp(props.website)}</a></li>
						</ul>
						*/}	
						{singleItemBlock()}
											
				</div>

				<div class=" content_right">
				<h3>{lang_headline}</h3>		
				<p>{lang_description}</p>

			</div>

			</div>

			
			
		</div>

        <div class="row single_grid">

			{
/*
            {props.images.map(image => {

			return <div class="col-md-6 item">
				<img src={ typeof(image.image_url) !== 'undefined' && image.image_url != null ? image.image_url : '' } />
			</div>
            })}
*/

			}


	            {real_images.map(image => {

					return <div class="col-md-6 item">
						<img src={  image } />
					</div>
					})}

			
		</div>
        
    </React.Fragment>;
}

export default SingleItem;