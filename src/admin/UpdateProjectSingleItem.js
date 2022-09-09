import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'



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


	const getData = (s_string, s_source) => {
		return s_source.search(s_string) >= 0 ? true : false
	}	

	const getCoords = (lat,long) => {
		return lat+","+long
	}

	const Business_options = [
		{
			label: "Choose",
			value: "",
		},		
		{
		  label: "Miral",
		  value: "Miral",
		},
		{
		  label: "Miral Destinations",
		  value: "Miral Destinations",
		},
		{
		  label: "Miral Experiences",
		  value: "Miral Experiences",
		},
		{
		  label: "Yas Asset Management",
		  value: "Yas Asset Management",
		},
	  ];	

	  const location_options = [
		{
			label: "Choose",
			value: "",
		},			
		{
		  label: "Yas Island, Abu Dhabi",
		  value: "Yas Island Abu Dhabi",
		},
		{
		  label: "Saadiyat Island, Abu Dhabi",
		  value: "Saadiyat Island Abu Dhabi",
		},
		{
		  label: "Abu Dhabi City",
		  value: "Abu Dhabi City",
		},
		{
		  label: "Jordan",
		  value: "Jordan",
		},
	  ];	  

	function handleSelectChange(e) {
	console.log(  e.target.value )
		return e.target.value
	}


	console.log("ptype:"+props.ptype)
	console.log("++++++++++++:"+getData("Dine",props.ptype))
	//console.log("Running from :"+process.env.REACT_APP_APIURL)
    
    const updateAPIData = async (event) => {


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

		console.log("update type : "+filterType);
		console.log("update role : "+filterRole);

		

		/*check what status*/
		let checkstatval = document.getElementById("status1").checked ? 1 : 2 
        let id_val = document.getElementById("idd").value
        let Name  = document.getElementById("name").value
        let Name_Ar  = document.getElementById("name_ar").value
		let Status  = checkstatval
		let tType =  filterType
		let rRole = filterRole
        let Location = document.getElementById("location").value
        let Location_ar = ''    
        let Website = document.getElementById("website").value   
        let Description_en = document.getElementById("desc_en").value
        let Description_ar = document.getElementById("desc_ar").value
        let Yyear = document.getElementById("yyear").value
        let Ssize = document.getElementById("ssize").value
        let Vval = document.getElementById("vval").value
        let Annual_v = document.getElementById("annual_visitor").value

		let mapcoords = document.getElementById("mapcoords").value

		let coords = mapcoords.split(",")
		let lat = coords[0]
		let long = coords[1]
		let busi = document.getElementById("selbusiness").value 

	
        /*
        

        let Ptype = document.getElementById("ptype").value;
        let Role = document.getElementById("role").value;
        let Business = document.getElementById("business").value;                        
        */


        
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                id: id_val, name: Name, name_ar: Name_Ar, status: Status, type: tType, role: rRole,
                location: Location, location_ar: Location_ar, website: Website, desciption: Description_en,
                desciption_ar: Description_ar, year: Yyear, size: Ssize, value: Vval,
                annual_visitor: Annual_v,
				lat: lat, long: long, business: busi, 
                //, value: Vval, annual_visitor: Annual_visitor    
            })
        };
        fetch('http://3.28.53.5:4052/project', requestOptions)
            .then(response => response.json())
			.then((result) => {
				console.log('Success:', result)
				console.log('error:', result.error)
				if(result.error === null ){
					window.location.replace('/admin/projects')
				} else {
					alert("Something is wrong while saving please try again!")
				}
					
			})			
		
		//console.log(requestOptions)	
		//alert('Updated');
//		window.location.replace('/admin/projects')
		//navigate('/admin/projects')
        event.preventDefault();  
        //window.location.reload(false);
        //const timer = setTimeout(() => window.location.reload(false), 1000);
       
   
    }

    const cancelUpdate =  (event) => {
        const timer = setTimeout(() => window.location.reload(false), 1000);
    }

	const onlyOne = (checkbox) => {
		let checkboxes = document.getElementsByName("statusbox")
		checkboxes.forEach((item) => {
			item.checked = false
		})
		checkbox.checked = true
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


	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
		  confirmButton: 'btn btn-success',
		  cancelButton: 'btn btn-danger'
		},
		buttonsStyling: false
	  })

	const opensweetalert =  (event) => {
		event.preventDefault(); 

		  
		  swalWithBootstrapButtons.fire({
			title: `Are you sure you want to delete this project?`,
			text: `This operation can’t be undone.`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: `Delete`,
			cancelButtonText: `Don't Delete`,
			reverseButtons: true
		  }).then((result) => {
			if (result.isConfirmed) {

			const requestDelete = {
				method: 'DELETE'
			};
			
			  fetch('http://3.28.53.5:4052/project/'+props.id, requestDelete)
			  .then(response => response.json())
			  .then((result) => {
				  if(result.error === null ){
					  window.location.replace('/admin/projects')  				  
				  } 
					  
			  })			  

			} else if (
			  /* Read more about handling dismissals below */
			  result.dismiss === Swal.DismissReason.cancel
			) {

			}
		  })		
    }



    return <React.Fragment>

<div class="col-md-12 edit_dashboard">
				<form id="update">
					<fieldset class="sta_tus">
						<label>Status:</label>
						
						<label class="ch_lbl">
							<input type="checkbox" defaultChecked={props.status==1 ? true : false} id="status1" value="1" name="statusbox" onClick={handleChange} />
							<span class="checkmark"></span>
							Published
						</label>
						<label class="ch_lbl">
							<input type="checkbox" defaultChecked={props.status==2 ? true : false} id="status2" value="2" name="statusbox" onClick={handleChange}/>
							<span class="checkmark"></span>
							Draft
						</label>

					</fieldset>

					<fieldset class="half">
                            <input type="hidden" id="idd" Value={props.id} />
						<label>Name (EN):
                        
							<input id="name" type="text" defaultValue={props.name} />
						</label>
						<label>Name (AR):
							<input id="name_ar" type="text" defaultValue={props.name_ar} />
						</label>
					</fieldset>

					

					<fieldset class="half">

					
						<label>Location:
							<select id="location" defaultValue={props.location} onChange={handleSelectChange}>
							{location_options.map((option) => (
							<option value={option.value}>{option.label}</option>
							))}
							</select>

						</label>
					</fieldset>


					<fieldset class="half">
						<label>Map Coordinates (lat,long)
							<input type="text" id="mapcoords" defaultValue={getCoords(props.lat,props.long )} />
						</label>

					</fieldset>


					<fieldset class="ty_pe">
						<label>Type:</label>
						
						<span class="group">

						    <label class="ch_lbl">
								<input type="checkbox" defaultChecked={getData("Most Popular",props.ptype) ? true : false} value="Most Popular" class="ftype" />
								<span class="checkmark"></span>
								Most Popular
							</label>

						    <label class="ch_lbl">
								<input type="checkbox" defaultChecked={getData("Stay",props.ptype) ? true : false} value="Stay" class="ftype" />
								<span class="checkmark"></span>
								Stay
							</label>

						</span>


						<span class="group">
						<label class="ch_lbl">
								<input type="checkbox" defaultChecked={getData("Play",props.ptype) ? true : false} value="Play" class="ftype" />
								<span class="checkmark"></span>
								Play
							</label>							
							<label class="ch_lbl">
								<input type="checkbox" defaultChecked={getData("Dine",props.ptype) ? true : false} value="Dine" class="ftype" />
								<span class="checkmark"></span>
								Dine
							</label>

						</span>

						<span class="group">

						<label class="ch_lbl">
							<input type="checkbox" defaultChecked={getData("Meet",props.ptype) ? true : false} value="Meet" class="ftype" />
								<span class="checkmark"></span>
								Meet
							</label>

							<label class="ch_lbl">
							<input type="checkbox" defaultChecked={getData("Culture",props.ptype) ? true : false} value="Culture" class="ftype" />
								<span class="checkmark"></span>
								Culture
							</label>
						</span>							

						<span class="group">
						<label class="ch_lbl">
								<input type="checkbox" defaultChecked={getData("Destination",props.ptype) ? true : false} value="Destination" class="ftype" />
								<span class="checkmark"></span>
								Destination
							</label>

						</span>
						
					</fieldset>

					
					

					<fieldset class="half">
						<label>Business:

							<select id="selbusiness" defaultValue={props.business} onChange={handleSelectChange}>
							{Business_options.map((option) => (
							<option value={option.value}>{option.label}</option>
							))}
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
							<input type="hidden" placeholder="Architect" defaultValue={props.value} id="vval" />
						</span>

						<span class="group">
							<input type="text" placeholder="Size(sqm)" defaultValue={props.size} id="ssize" />
							<input type="hidden" placeholder="Annual visitors" id="annual_visitor" />
						</span>
					</fieldset>

					<fieldset class="ima_ges">
						<label>Images (JPG max file size 2mb):</label>
						<div class="item_wrap">
							

							{props.images.map(image => {
								return <div class="item">
								<img src={image.image_url} />
								<a>Remove</a>
								</div>
							})}




						</div>

						<button class="btn bt_orange">Add more images</button>
					</fieldset>					

					<fieldset class="btns">
						<button class="btn bt_orange save" type='submit' onClick={updateAPIData}>Update</button>
						<Link to={`/admin/projects`} className='btn bt_orange cancel' >Cancel</Link>
						<button class="btn del" onClick={opensweetalert}>Delete Project</button>
					</fieldset>                    

                </form>    
</div>                    
        


        
    </React.Fragment>;
}

export default UpdateProjectSingleItem;