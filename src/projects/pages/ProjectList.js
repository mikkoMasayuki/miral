import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
const ProjectLists = props => {

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
	
			

	const handleFilterReset = e => {
		let getfilterType = document.getElementsByTagName('input');
		for (let i = 0; i < getfilterType.length; i += 1) {
				if (getfilterType[i].checked) {
					getfilterType[i].checked = false;	
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
		props.onCancel();
	}

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

		
		for (let i = 0; i < getfilterType.length; i += 1) {

			
				if (getfilterType[i].checked) {

					console.log("className:"+getfilterType[i].className);	
					if ( getfilterType[i].className == "ftype") {
						
						/*
						alert(getfilterType[i].value);	
						if( getfilterType[i].value === "all") {
							let togglr =  document.getElementsByClassName(getfilterType[i].className);
							for (let j = 0; j < togglr.length; j += 1) {
								if( togglr[j].value !== "all") {
									togglr[j].checked = false;
								}
							}
						} 
						*/
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
		<div className="bg_overlay" onClick={props.onCancel}></div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div class="frm_wrap">
							<fieldset>
								<legend>Type:</legend>

								
								<label>
									<input id="f_all" class="ftype" type="checkbox" value="" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									All
								</label>
								
								<label>
									<input class="ftype" type="checkbox" value="Asset" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Asset
								</label>
								<label>
									<input class="ftype" type="checkbox" value="Commercial" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Commercial
								</label>								

								<label>
									<input class="ftype" type="checkbox" value="Destination" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Destination
								</label>

								<label>
									<input class="ftype" type="checkbox" value="Dine" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									Dine
								</label>
								<label>
									<input class="ftype" type="checkbox" value="Discover" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									Discover
								</label>								
								<label>
									<input class="ftype" type="checkbox" value="Land Plot" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									Land Plot
								</label>
								<label>
									<input class="ftype" type="checkbox" value="Meet" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									Meet
								</label>

								<label>
									<input class="ftype" type="checkbox" value="Museum" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									Museum
								</label>
								<label>
									<input class="ftype" type="checkbox" value="Play" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									Play
								</label>	
								<label>
									<input class="ftype" type="checkbox" value="Stay" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									Stay
								</label>															
								<label>
									<input class="ftype" type="checkbox" value="Other" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									Other
								</label>

							</fieldset>



							<fieldset>
								<legend>Role:</legend>

								
								<label>
									<input class="frole" type="checkbox" value="all" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									All
								</label>
								

								<label>
									<input class="frole" type="checkbox" value="Developed" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Developed
								</label>

								<label>
									<input class="frole" type="checkbox" value="Managed" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Managed
								</label>

								<label>
									<input class="frole" type="checkbox" value="Investment" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Investment
								</label>
							</fieldset>



							<fieldset>
								<legend>Location:</legend>
								
								<label>
									<input class="floc" type="checkbox" value="" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									All
								</label>
								

								<label>
									<input class="floc" type="checkbox" value="Yas Island Abu Dhabi" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Yas Island, Abu Dhabi
								</label>

								<label>
									<input class="floc" type="checkbox" value="Saadiyat Island Abu Dhabi" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Saadiyat Island, Abu Dhabi
								</label>

								<label>
									<input class="floc" type="checkbox" value="Abu Dhabi City" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Abu Dhabi City
								</label>

								<label>
									<input class="floc" type="checkbox" value="Cornwall England UK" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Cornwall England UK
								</label>


								<label>
									<input class="floc" type="checkbox" value="Dubai United Arab Emirates" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Dubai United Arab Emirates
								</label>

								<label>
									<input class="floc" type="checkbox" value="Kazakhstan" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Kazakhstan
								</label>

							</fieldset>


							<fieldset>
								<legend>Business:</legend>
								
								<label>
									<input class="fbusi" type="checkbox" value="" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									All
								</label>
								

								<label>
									<input class="fbusi" type="checkbox" value="Miral Group" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Miral Group
								</label>

								<label>
									<input class="fbusi" type="checkbox" value="Miral Experiences" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Miral Experiences
								</label>

								<label>
									<input class="fbusi" type="checkbox" value="Yas Asset Management" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Yas Asset Management
								</label>
							</fieldset>

						
							<fieldset>
								<legend>More:</legend>
								<label>
									<input class="fmore" type="checkbox" value="Destination" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Destination
								</label>

								<label>
									<input class="fmore" type="checkbox" value="Favourites" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Favourites
								</label>
							</fieldset>
						



							<div className="bt_wrap">
								<button className="show_results" onClick={props.onCancel}>Show {props.items.length} results</button>
								<button className="reset" onClick={handleFilterReset}> Reset</button>
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
            <button className={`${props.show && 'active'}`} onClick={props.onShow}>Filter</button>
          </div>

          <div className="bt_right">
            <a  className="btn dark" href="projects-main.html">Thumbnails</a>
			<Link className="btn" to="/map">Map</Link>
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
              description={project.description}
              location={project.location}
			  image={project.image[0]}
			  type={project.type.split(',')}
			  role={project.role.split(',')}
			  favorite={project.is_favorite}
              />;
          })}
        </div>
      </div>

      
    </React.Fragment>

};

export default ProjectLists;