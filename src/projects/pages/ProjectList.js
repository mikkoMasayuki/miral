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
	
	const handleForceClose  = e => {
		let btn = document.getElementById('btnfilter')
			btn.click()
	}		

	const handleFilterReset = e => {
		let getfilterType = document.getElementsByTagName('input');
		for (let i = 0; i < getfilterType.length; i += 1) {
				if (getfilterType[i].checked) {
					if(getfilterType[i].value!=="") {
						getfilterType[i].checked = false;		
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
									<input id="f_all" class="ftype" type="checkbox" value="" onClick={handleFilterReset}/>
									<span className="checkmark"></span>
									All
								</label>
								<label>
									<input class="ftype" type="checkbox" value="Most Popular" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Most Popular
								</label>								
								<label>
									<input class="ftype" type="checkbox" value="Stay" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									Stay
								</label>	
								<label>
									<input class="ftype" type="checkbox" value="Play" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									Play
								</label>	

								<label>
									<input class="ftype" type="checkbox" value="Dine" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									Dine
								</label>	
								<label>
									<input class="ftype" type="checkbox" value="Meet" onClick={handleFilterChange} />
									<span className="checkmark"></span>
									Meet
								</label>																																

								<label>
									<input class="ftype" type="checkbox" value="Culture" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Culture
								</label>								

								<label>
									<input class="ftype" type="checkbox" value="Destination" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Destination
								</label>


							</fieldset>







							<fieldset>
								<legend>Location:</legend>
								
								<label>
									<input class="floc" type="checkbox" value="" onClick={handleFilterReset}/>
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
									<input class="floc" type="checkbox" value="Jordan" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Jordan
								</label>

							</fieldset>


							<fieldset>
								<legend>Business:</legend>
								
								<label>
									<input class="fbusi" type="checkbox" value="" onClick={handleFilterReset}/>
									<span className="checkmark"></span>
									All
								</label>
								

								<label>
									<input class="fbusi" type="checkbox" value="Miral" onClick={handleFilterChange}/>
									<span className="checkmark"></span>
									Miral
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



							<div className="bt_wrap">
								<button className="show_results dark" onClick={handleForceClose}>Show {props.items.length} results</button>
								<button id="btnreset" className="reset dark" onClick={handleFilterReset}> Reset</button>
								<button className="show_results dark" onClick={handleForceClose}>HIDE</button>

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