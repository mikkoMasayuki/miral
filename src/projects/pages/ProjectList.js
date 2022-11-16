import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
const ProjectLists = props => {


    const queryParams = new URLSearchParams(window.location.search)
    const lang = queryParams.get("l")    

    let urlparams = "?l="+lang

    let lang_about = 'About'
	let lang_filter_projects = 'FILTER PROJECTS'
	let lang_reset = 'RESET'
	let lang_hide = 'HIDE'
	let lang_type = 'Type'
	let lang_all = 'All'
	let lang_most_popular = 'Featured Projects'
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



    if(lang === null || lang!=='ar') {
        urlparams = ""
    } else {
        lang_about = 'نبذة عن الحافظة'
		//lang_filter_projects = 'تصفية نتائج البحث'
		lang_filter_projects = 'البحث'
		lang_reset = 'إعادة ضبط'
		lang_hide = 'إخفاء'
		lang_type = 'نوع'
		lang_all = 'الكل'
		//lang_most_popular = 'الأكثر شيوعاً'
		lang_most_popular = 'أبرز المشاريع'
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

															
    }	

	

	/*
    if (props.items.length === 0) {
      return (
        <div className="center">
            <h2>No Projects found!</h2>
        </div>  
      )
    } 
	*/

	/*
	const [filterType, setfilterType] = useState();
	const [filterRole, setfilterRole] = useState();
	const [filterLoc, setfilterLoc] = useState();
	const [filterBusi, setfilterBusi] = useState();
	const [filterMore, setfilterMore] = useState();
	*/

	const [navTagsType, setnavTagsType] = useState("All")
	const [navTagsRole,setnavTagsRole] = useState("All")
	const [navTagsLocation,setnavTagsLocation] = useState("")

	let payload = [];
	
	const handleForceClose  = e => {
		let btn = document.getElementById('btnfilter')
			btn.click()

		let btnloadmap = document.getElementById('btnloadmap')
		btnloadmap.click()

			
	}
	
	const handleFilterResetFromButton = e => {
		let getfilterType = document.getElementsByTagName('input');
		let filterType = "";



		for (let i = 0; i < getfilterType.length; i += 1) {
				if (getfilterType[i].checked) {
					if(getfilterType[i].value!=="") {
						getfilterType[i].checked = false;		
					} 
					
				}
				if(getfilterType[i].value==="") {
					getfilterType[i].checked = true;		
				} 	
				
				if ( getfilterType[i].className == "ftype") {

					if (getfilterType[i].value==="Most Popular") {
						//getfilterType[i].checked = true;
						//filterType = getfilterType[i].value
					}		
					if(getfilterType[i].value==="") {
						//getfilterType[i].checked = false;		
					} 						
				}
			
			
		}			
		payload = { 
			'filtertype' : '', 
			'filterRole' : '', 
			'filterLoc' : '',
			'filterbusi' : '',
			'filtermore' : ''
	   };

	   setnavTagsType("All")
	   setnavTagsRole("All")  
	   setnavTagsLocation("")

        props.ReloadFilters({payload}); 			
		/*props.onCancel();*/
	}	
//here
	const handleFilterChange = e => {
		let tmptype = "";
		let filterType = "";
		let filterRole = "";
		let filterLoc = "";
		let filterbusi = "";
		let filtermore = "";
		let tmpftype="";
		let tmpfrole="";
		let tmpfloc="";
		let tmpfbusi="";
		let tmpfmore="";

		

		let getfilterType = document.getElementsByTagName('input');

		let getAllType = document.querySelector('#ftype_all');
		let getAllLoc = document.querySelector('#floc_all');
		let getAllBusi = document.querySelector('#fbusi_all');

		
		let tmpAllType = getAllType.checked
		let tmpAllLoc = getAllLoc.checked
		let tmpAllBusi = getAllBusi.checked
		
		for (let i = 0; i < getfilterType.length; i += 1) {

			
				if (getfilterType[i].checked) {

					console.log("className:"+getfilterType[i].className);	

					if(getfilterType[i].value==="") {
						//getfilterType[i].checked = false;	
					}
					
					

					if ( getfilterType[i].className == "ftype") {

							if (tmpftype==="") {
								tmpftype = getfilterType[i].value;
							} else {
								tmpftype = tmpftype +","+ getfilterType[i].value;	
							}
							if(getfilterType[i].value!=="") {
								getAllType.checked = false
							}

					}	

					if ( getfilterType[i].className == "floc") {
						if (tmpfloc==="") {
							tmpfloc = getfilterType[i].value;
						} else {
							tmpfloc = tmpfloc +","+ getfilterType[i].value;	
						}
						if(getfilterType[i].value!=="") {
							getAllLoc.checked = false
						}						

					}	
					if ( getfilterType[i].className == "fbusi") {
						if (tmpfbusi==="") {
							tmpfbusi = getfilterType[i].value;
						} else {
							tmpfbusi = tmpfbusi +","+ getfilterType[i].value;	
						}
						if(getfilterType[i].value!=="") {
							getAllBusi.checked = false
						}						
					}		
										
					
				} 
			
		}

		//alert("type "+tmpAllType+" loc " +tmpAllLoc +" busi "+tmpAllBusi);

		
		


		filterType=tmpftype
		filterRole=tmpfrole
		filterLoc=tmpfloc
		filterbusi=tmpfbusi
		filtermore=tmpfmore

		setnavTagsType(filterType)
		setnavTagsRole(filterRole)  
		setnavTagsLocation(filterLoc)


		payload = { 
			'filtertype' : filterType, 
			'filterRole' : filterRole, 
			'filterLoc' : filterLoc,
			'filterbusi' : filterbusi,
			'filtermore' : filtermore
	   };

		

		console.log(">>>>"+payload);
        props.ReloadFilters({payload}); 

		// /props.onCancel(1);
		
	
    }

	


	const handleFilterReset = e => {
		let tmptype = "";
		let filterType = "";
		let filterRole = "";
		let filterLoc = "";
		let filterbusi = "";
		let filtermore = "";
		let tmpftype="";
		let tmpfrole="";
		let tmpfloc="";
		let tmpfbusi="";
		let tmpfmore="";

		

		let getfilterType = document.getElementsByTagName('input');

		
		for (let i = 0; i < getfilterType.length; i += 1) {

			
				if (getfilterType[i].checked) {

					console.log("className:"+getfilterType[i].className);	

					if(getfilterType[i].value==="") {
						if ( getfilterType[i].className == "ftype") {
							for (let j = 0; j < getfilterType.length; j += 1) {
								if ( getfilterType[j].className == "ftype") {
									getfilterType[j].checked = false;	
								}
							}
							getfilterType[i].checked = true;	
						} 
						if ( getfilterType[i].className == "floc") {
							for (let j = 0; j < getfilterType.length; j += 1) {
								if ( getfilterType[j].className == "floc") {
									getfilterType[j].checked = false;	
								}
							}
							getfilterType[i].checked = true;	
						}				
						if ( getfilterType[i].className == "fbusi") {
							for (let j = 0; j < getfilterType.length; j += 1) {
								if ( getfilterType[j].className == "fbusi") {
									getfilterType[j].checked = false;	
								}
							}
							getfilterType[i].checked = true;	
						}									
					} else {


							if ( getfilterType[i].className == "ftype") {

									if (tmpftype==="") {
										tmpftype = getfilterType[i].value;
									} else {
										tmpftype = tmpftype +","+ getfilterType[i].value;	
									}								
							}	
							if ( getfilterType[i].className == "frole") {
								if (tmpfrole==="") {
									tmpfrole = getfilterType[i].value;
								} else {
									tmpfrole = tmpfrole +","+ getfilterType[i].value;	
								}
							}
							if ( getfilterType[i].className == "floc") {
								if (tmpfloc==="") {
									tmpfloc = getfilterType[i].value;
								} else {
									tmpfloc = tmpfloc +","+ getfilterType[i].value;	
								}
							}	
							if ( getfilterType[i].className == "fbusi") {
								if (tmpfbusi==="") {
									tmpfbusi = getfilterType[i].value;
								} else {
									tmpfbusi = tmpfbusi +","+ getfilterType[i].value;	
								}
							}		
							if ( getfilterType[i].className == "fmore") {
								if (tmpfmore==="") {
									tmpfmore = getfilterType[i].value;
								} else {
									tmpfmore = tmpfmore +","+ getfilterType[i].value;	
								}
							}	
					}													
					
				} 
			
		}

		
		filterType=tmpftype
		filterRole=tmpfrole
		filterLoc=tmpfloc
		filterbusi=tmpfbusi
		filtermore=tmpfmore

		setnavTagsType(filterType)
		setnavTagsRole(filterRole)  
		setnavTagsLocation(filterLoc)


		payload = { 
			'filtertype' : filterType, 
			'filterRole' : filterRole, 
			'filterLoc' : filterLoc,
			'filterbusi' : filterbusi,
			'filtermore' : filtermore
	   };

		

		console.log(">>>>"+payload);
        props.ReloadFilters({payload}); 

		// /props.onCancel(1);
		
	
    }

    return <React.Fragment>
    
      <div className={`filter_drop ${ props.show && "shown"}`}> 
		<div className="bg_overlay" onClick={handleForceClose}></div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div class="frm_wrap">
							<fieldset>
								<legend>{lang_type}:</legend>

								
								<label>
									<input id="ftype_all" class="ftype" type="checkbox" value="" onClick={handleFilterReset}/>
									<span className="checkmark"></span>
									{lang_all}
								</label>
								<label>
									<input class="ftype" type="checkbox"  value="Most Popular" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									{lang_most_popular}
								</label>								
								<label>
									<input class="ftype" type="checkbox" value="Stay" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									{lang_stay}
								</label>	
								<label>
									<input class="ftype" type="checkbox" value="Play" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									{lang_play}
								</label>	

								<label>
									<input class="ftype" type="checkbox" value="Dine" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									{lang_dine}
								</label>	
								<label>
									<input class="ftype" type="checkbox" value="Business Venues" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									{lang_business_venues}
								</label>																																

								<label>
									<input class="ftype" type="checkbox" value="Culture" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									{lang_culture}
								</label>								

								<label>
									<input class="ftype" type="checkbox" value="Destination" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									{lang_destination}
								</label>


							</fieldset>







							<fieldset>
								<legend>{lang_location}:</legend>
								
								<label>
									<input id="floc_all" class="floc" type="checkbox" value="" onClick={handleFilterReset}/>
									<span className="checkmark"></span>
									{lang_all}
								</label>

								<label>
									<input class="floc" type="checkbox" value="Yas Island" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									{lang_yas_island}
								</label>
								<label>
									<input class="floc" type="checkbox" value="Abu Dhabi" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									{lang_abu_dhabi}
								</label>
								<label>
									<input class="floc" type="checkbox" value="Saadiyat Island" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									{lang_saadiyat_island}
								</label>
								{/*
								<label>
									<input class="floc" type="checkbox" value="Al Ain" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									{lang_al_ain}
								</label>
								*/}
								<label>
									<input class="floc" type="checkbox" value="Jordan" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									{lang_jordan}
								</label>
								{/*
								<label>
									<input class="floc" type="checkbox" value="Kazakhstan" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									{lang_kazakhstan}
								</label>
								*/}
							</fieldset>


							<fieldset>
								<legend>{lang_business}:</legend>
								
								<label>
									<input id="fbusi_all" class="fbusi" type="checkbox" value="" onClick={handleFilterReset}/>
									<span className="checkmark"></span>
									{lang_all}
								</label>
								

								<label>
									<input class="fbusi" type="checkbox" value="Miral" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									{lang_miral}
								</label>

								<label>
									<input class="fbusi" type="checkbox" value="Miral Destinations" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									{lang_miral_destinations}
								</label>

								<label>
									<input class="fbusi" type="checkbox" value="Miral Experiences" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									{lang_miral_experiences}
								</label>

								<label>
									<input class="fbusi" type="checkbox" value="Yas Asset Management" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									{lang_yas_asset_management}
								</label>
							</fieldset>



							<div className="bt_wrap">
								<button className="show_results dark" onClick={handleForceClose}>
									{(lang === null || lang!=='ar') ? `Show ${props.items.length} results` : `عرض ${props.items.length} نتيجة`}
								</button>
								<button id="btnreset" className="reset dark" onClick={handleFilterResetFromButton}> {lang_reset}</button>
								<button className="show_results dark" onClick={handleForceClose}>{lang_hide}</button>

							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
  <div className="container">
      <div className="row bt_row">
        <div className="col-md-12">
          <div className="bt_left">
            <button className={`${props.show && 'active'} bt_orange bt_filter`} onClick={props.onShow}>FILTER PROJECTS</button>
			<button class="dark">RESET</button>

          </div>

        </div>
      </div>



      <div className="row filter_tags">
        <div className="col-md-12">
          <p>
            <span>Type:  <strong>{ navTagsType }</strong></span>
            <span>Role: <strong>{ navTagsRole }</strong></span>
            <span>Location: <strong>{ navTagsLocation }</strong></span>
          </p>
        </div>
      </div>
      
        <div className="row portfolio_grid"> 
        

          {props.items.map(project => {
              return <ProjectItem 
              key={project.id}
              id={project.id}
              name={project.name}
			  name_ar={project.name_ar}
              description={project.description}
              location={project.location}
			  image={project.image[0]}
			  type={project.type.split(',')}
			  role={project.role.split(',')}
			  favorite={project.is_favorite}
			  business={project.business.split(',')}
              />;
          })}
        </div>
      </div>

      
    </React.Fragment>

};

export default ProjectLists;