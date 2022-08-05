import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'



const UpdateProjectSingleItem = props => {

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
    
    const updateAPIData = async (event) => {
        let id_val = document.getElementById("idd").value;
        let Name  = document.getElementById("name").value;
        let Name_Ar  = document.getElementById("name_ar").value;
        let Location = document.getElementById("location").value;
        let Location_ar = document.getElementById("location_ar").value;     
        let Website = document.getElementById("website").value;    
        let Description_en = document.getElementById("desc_en").value;
        let Description_ar = document.getElementById("desc_ar").value;
        let Yyear = document.getElementById("yyear").value;
        let Ssize = document.getElementById("ssize").value;
        let Vval = document.getElementById("vval").value;
        let Annual_v = document.getElementById("annual_visitor").value;

        /*
        

        let Ptype = document.getElementById("ptype").value;
        let Role = document.getElementById("role").value;
        let Business = document.getElementById("business").value;                        
        */


      
        
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                id: id_val, name: Name, name_ar: Name_Ar, location: Location,
                location_ar: Location_ar, website: Website, desciption: Description_en,
                desciption_ar: Description_ar, year: Yyear, size: Ssize, value: Vval,
                annual_visitor: Annual_v
                //, value: Vval, annual_visitor: Annual_visitor    
            })
        };
        fetch('http://54.183.107.251:4052/project', requestOptions)
            .then(response => response.json());
     
        event.preventDefault();  
        //window.location.reload(false);
        const timer = setTimeout(() => window.location.reload(false), 1000);
       
   
    }

    const cancelUpdate =  (event) => {
        const timer = setTimeout(() => window.location.reload(false), 1000);
    }

    return <React.Fragment>

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
							<input type="checkbox" name="status"  />
							<span class="checkmark"></span>
							Published on site
						</label>


						<select>
							<option>Pipeline project (visible to selected people only)</option>
							<option>option</option>
							<option>option</option>
							<option>option</option>
							<option>option</option>
						</select>
					</fieldset>

					<fieldset class="half">
						<label>Location (EN):
							<input type="text" id="location" defaultValue={props.location}/>
						</label>

						<label>Location (AR):
							<input type="text" id="location_ar" defaultValue={props.location_ar}/>
						</label>
					</fieldset>


					<fieldset class="">
						<label>Map:</label>
						
						<button class="btn">Set location on map</button>
					</fieldset>


					<fieldset class="ty_pe">
						<label>Type:</label>
						
						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" name="ptype" />
								<span class="checkmark"></span>
								Dine
							</label>

							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								Discover
							</label>
						</span>


						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								Meet
							</label>

							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								Play
							</label>
						</span>


						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								Stay
							</label>

							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								Destination
							</label>
						</span>


						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								Asset
							</label>

							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								Land plot
							</label>
						</span>


						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								Commercial
							</label>

							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								Museum
							</label>
						</span>


						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								Other
							</label>
						</span>
						
					</fieldset>


					<fieldset class="ro_le">
						<label>Role:</label>
						
						<span class="group">
							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								Developed
							</label>

							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								Investment
							</label>

							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								Managed
							</label>

							<label class="ch_lbl">
								<input type="checkbox" name="" />
								<span class="checkmark"></span>
								TBC
							</label>
						</span>
					</fieldset>

					<fieldset class="half">
						<label>Business:
							<select>
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
							<textarea id="desc_en">{props.description_en}</textarea>
						</label>

						<label>Description (AR):
							<textarea id="desc_ar">{props.description_ar}</textarea>
						</label>
					</fieldset>                                     

					<fieldset class="stats">
						<label>Statistics:</label>
						<span class="group">
							<input type="text" defaultValue={props.year} id="yyear" />
							<input type="text" defaultValue={props.value} id="vval" />
						</span>

						<span class="group">
							<input type="text" defaultValue={props.size} id="ssize" />
							<input type="text" defaultValue={props.annual_visitor} id="annual_visitor" />
						</span>
					</fieldset>

					<fieldset class="btns">
						
						<button type='submit' onClick={updateAPIData}>Update</button>
                        <button  onClick={cancelUpdate}>Cancel</button>


                        
					</fieldset>                    

                </form>    
</div>                    
        


        
    </React.Fragment>;
}

export default UpdateProjectSingleItem;