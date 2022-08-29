import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'



const AddProject = props => {

    let history = useHistory();
    const [id, setID] = useState(null);
    const [Name, setName] = useState('');
    const [Name_Ar, setName_Ar] = useState('');
    const [checkbox, setCheckbox] = useState(false);
   

    useEffect(() => {
        setID(localStorage.getItem('id'))
        setName(localStorage.getItem('Name'));
        setName_Ar(localStorage.getItem('Name_Ar'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);


	const getData = (s_string, s_source) => {
		return s_source.search(s_string) >= 0 ? true : false
	}	

    
    const addAPIData = async (event) => {


		let filterType = "";
		let filterRole = "";
		let tmpftype="";
		let tmpfrole="";
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
				} 
			
		}

		
		filterType=tmpftype
		filterRole=tmpfrole

		console.log("Add type : "+filterType);
		console.log("Add role : "+filterRole);

		

		/*check what status*/
		let checkstatval = document.getElementById("status1").checked ? 1 : 2 
        let id_val = document.getElementById("idd").value
        let Name  = document.getElementById("name").value
        let Name_Ar  = document.getElementById("name_ar").value
		let Status  = checkstatval
		let tType =  filterType
		let rRole = filterRole
        let Location = document.getElementById("location").value
        let Location_ar = document.getElementById("location_ar").value    
        let Website = document.getElementById("website").value   
        let Description_en = document.getElementById("desc_en").value
        let Description_ar = document.getElementById("desc_ar").value
        let Yyear = document.getElementById("yyear").value
        let Ssize = document.getElementById("ssize").value
        let Vval = document.getElementById("vval").value
        let Annual_v = document.getElementById("annual_visitor").value
        let Longitude = document.getElementById("longitude").value
        let Latitude = document.getElementById("latitude").value
		let Business = document.getElementById("business").value


		console.log(Name+" "+ Name_Ar +" "+Status+" "+tType+" "+rRole+" "+Location+" "+Location_ar)	
		console.log(Website+" "+ Description_en +" "+Description_ar+" "+Yyear+" "+Ssize+" "+Vval+" "+Annual_v)	
		console.log(Longitude+" "+ Latitude +" "+Business)
        /*
        

        let Ptype = document.getElementById("ptype").value;
        let Role = document.getElementById("role").value;
        let Business = document.getElementById("business").value;                        
        */


      
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 

				name: Name,
				name_ar: Name_Ar, 
				status: Status,
				location: Location,
				location_ar: Location_ar,
				lat: Latitude,
				long: Longitude,
				type: tType,
				role: rRole,
				business: Business,
				website: Website,
				desciption: Description_en,
				desciption_ar: Description_ar,
				year: Yyear,
				size: Ssize,
				value: Vval,
				annual_visitor: Annual_v,
				created_at: "",
				updated_at: ""   
            })
        };


		fetch('http://185.140.248.26:4052/project', requestOptions)
		.then(response => response.json())
		.then((data) => {
			console.log('Success:', data);
		  })
		  .catch((error) => {
			console.error('Error:', error);
		  });		
		
		
        event.preventDefault();  
        //window.location.reload(false);
        //const timer = setTimeout(() => window.location.reload(false), 1000);
       
   
    }

    const cancelUpdate =  (event) => {
        const timer = setTimeout(() => window.location.reload(false), 1000);
    }

	const handleChange = event => {
		let checkboxes = document.getElementsByName("statusbox")
		checkboxes.forEach((item) => {
			item.checked = false
		})	

		if (event.target.checked ) {
			event.target.checked = false	
		} else {
			event.target.checked = true
		}
		
		
		
	}


    return <React.Fragment>
<div class="container test">
<div class="col-md-12 edit_dashboard">
				<form id="update">
					<fieldset class="half">
                            <input type="hidden" id="idd" Value={props.id} />
						<label>Name (EN):
                        
							<input id="name" type="text" defaultValue={props.name} />
						</label>
						<label>Name (AR):
							<input id="name_ar" type="text" defaultValue={props.name_ar} />
						</label>
					</fieldset>

					<fieldset class="sta_tus">
						<label>Status:</label>
						
						<label class="ch_lbl">
							<input type="checkbox" defaultChecked={props.status==1 ? true : false} id="status1" value="1" name="statusbox" onClick={handleChange} />
							<span class="checkmark"></span>
							Published on site
						</label>
						<label class="ch_lbl">
							<input type="checkbox" defaultChecked={props.status==2 ? true : false} id="status2" value="2" name="statusbox" onClick={handleChange}/>
							<span class="checkmark"></span>
							Pipeline project (visible to selected people only)
						</label>

					</fieldset>

					<fieldset class="half">
						<label>Location (EN):
							<input type="text" id="location"/>
						</label>

						<label>Location (AR):
							<input type="text" id="location_ar"/>
						</label>
					</fieldset>


					<fieldset class="half">
                        
						<label>Map  ( Longitude )
							<input type="text" id="longitude"/>
						</label>

						<label>(Latitude)
							<input type="text" id="latitude"/>
						</label>						
						
					</fieldset>


					<fieldset class="ty_pe">
						<label>Type:</label>
						
						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" value="Dine" class="ftype" />
								
								<span class="checkmark"></span>
								
								Dine
							</label>

							<label class="ch_lbl">
								<input type="checkbox" value="Discover" class="ftype" />
								<span class="checkmark"></span>
								Discover
							</label>
						</span>


						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" value="Meet" class="ftype" />
								<span class="checkmark"></span>
								Meet
							</label>

							<label class="ch_lbl">
								<input type="checkbox" value="Play" class="ftype" />
								<span class="checkmark"></span>
								Play
							</label>
						</span>


						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" value="Stay" class="ftype" />
								<span class="checkmark"></span>
								Stay
							</label>

							<label class="ch_lbl">
								<input type="checkbox" value="Destination" class="ftype" />
								<span class="checkmark"></span>
								Destination
							</label>
						</span>


						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" value="Asset" class="ftype" />
								<span class="checkmark"></span>
								Asset
							</label>

							<label class="ch_lbl">
								<input type="checkbox" value="Land Plot" class="ftype" />
								<span class="checkmark"></span>
								Land plot
							</label>
						</span>


						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" value="Commercial" class="ftype" />
								<span class="checkmark"></span>
								Commercial
							</label>

							<label class="ch_lbl">
								<input type="checkbox" value="Museum" class="ftype" />
								<span class="checkmark"></span>
								Museum
							</label>
						</span>


						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" value="Other" class="ftype" />
								<span class="checkmark"></span>
								Other
							</label>
						</span>
						
					</fieldset>


					<fieldset class="ro_le">
						<label>Role:</label>
						
						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" value="Developed" class="frole" />
								<span class="checkmark"></span>
								Developed
							</label>

							<label class="ch_lbl">
								<input type="checkbox" value="Investment" class="frole" />
								<span class="checkmark"></span>
								Investment
							</label>

							<label class="ch_lbl">
								<input type="checkbox" value="Managed" class="frole" />
								<span class="checkmark"></span>
								Managed
							</label>


						</span>
					</fieldset>

					<fieldset class="half">
						<label>Business:
							<select id="business">
								<option>Miral Experiences</option>
								<option>option</option>
							</select>
						</label>


						<label>Website:
							<input type="text" defaultValue={props.website} id="website" />
						</label>
					</fieldset>   

					<fieldset class="half">
						<label>Description (EN):
							<textarea id="desc_en" defaultValue={props.description_en}></textarea>
						</label>

						<label>Description (AR):
							<textarea id="desc_ar" defaultValue={props.description_ar}></textarea>
						</label>
					</fieldset>                                     

					<fieldset class="stats">
						<label>Statistics:</label>
						<span class="group">
							<input type="text" placeholder="Completion year" defaultValue={props.year} id="yyear" />
							<input type="text" placeholder="Value (USD)" defaultValue={props.value} id="vval" />
						</span>

						<span class="group">
							<input type="text" placeholder="Size(sqm)" defaultValue={props.size} id="ssize" />
							<input type="text" placeholder="Annual visitors" defaultValue={props.annual_visitor} id="annual_visitor" />
						</span>
					</fieldset>

					<fieldset class="ima_ges">
						<label>Images (JPG max fi le size 2mb):</label>
						<div class="item_wrap">

						</div>

						<button class="btn">Add more images</button>
					</fieldset>					

					<fieldset class="btns">
						<button type='submit' onClick={addAPIData}>Save</button>
                        <button  onClick={cancelUpdate}>Cancel</button>
					</fieldset>                    

                </form>    
</div>                    
</div>        


        
    </React.Fragment>;
}

export default AddProject;