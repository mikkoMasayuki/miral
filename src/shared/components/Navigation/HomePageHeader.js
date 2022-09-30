import React from "react";
//import { Link } from 'react-router-dom'
import ReactDOM from "react-dom"

const HomePageHeader = props => {


    const queryParams = new URLSearchParams(window.location.search)
    const lang = queryParams.get("l")    

    let urlparams = "?l="+lang

    let lang_about = 'ABOUT'
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

    let lang_switcher = 'العربية'
    let arab_url ="?l=ar"
	let miral_url = "https://miral.ae/"
	let lang_miral_web = "MIRAL WEBSITE"


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
        
        lang_switcher = 'ENGLISH'	
        arab_url ="?l=en"	
		miral_url = "https://miral.ae/ar"		
		lang_miral_web = "ميرال"												
    } 




    
    const home_url = "/"+urlparams
    const about_url = "/destination-happiness/index.html"+urlparams
   
    const privacy_url = "/privacy-policy/index.html"+urlparams	
    


    const content  = 
    <div>
    <nav id="navMiral" class="navbar navbar-expand-lg  m_header home_header">
        <div class="container">
            <a class="navbar-brand" href={home_url}><img class="logo" src="/assets/img/miral-logo.svg" alt="" /></a>

            <div class="ftrd_header">
                <img class="img_main" src="/assets/img/mrl-header-kid-01.svg" />
                <div class="animated_elements">
                    <img class="img_flipped" src="/assets/img/orange-flipped.svg" />
                    <img class="img_th" src="/assets/img/black-thumb.svg" />
                    <img class="img_portfolio" src="/assets/img/orange-portfolio.svg" />
                </div>
            </div>




            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="lnr lnr-menu"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link " href={about_url}>{lang_about}</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link " target="_blank" href={miral_url}>{lang_miral_web}</a>
                </li>

                
                <li class="nav-item">
                        <a class="nav-link lang_switcher" href={arab_url}>{lang_switcher}</a>
                </li>
                
                </ul>
                
            </div>
        </div>

        <div class="ftrd_header ftrd_header2">
            <img src="/assets/img/mrl-header-01.webp" />
        </div>
    </nav>
    <section class="cstm_sec news_sec">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <a href={about_url}>{lang_readmore}</a></p>
			</div>
		</div>
	</div>
    </section>

    </div>

    return ReactDOM.createPortal(content, document.getElementById('MainHeaderWrapper'))

}


export default HomePageHeader