import React from "react";
import { Link } from 'react-router-dom'

const ProjectItem = props => {


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

	let lang_completed = 'Completed'
	let lang_size = 'Size'
	let lang_website = 'Website'
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
		let ret = val
		if (val === 'Yas Island Abu Dhabi') {
			ret = 'Yas Island, Abu Dhabi'
		}
		if (val === 'Saadiyat Island Abu Dhabi') {
			ret = 'Saadiyat Island, Abu Dhabi'
		}

		
		return ret

}

    return (

        <div className="col-md-3 item">
			<div class="inner_wrap">
           <Link to={`project/${props.name}/${props.id}${urlparams}`} className='link' ></Link>
                <div className="ftrd_img">
						{props.image && <img src={props.image.image_url} /> }
						
				</div>

                <div className="desc">

			  

                    <h4 >{lang_name_field}</h4>
					<p>{putComma(lang_location_field)}</p>

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