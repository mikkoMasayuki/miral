import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';
import { Link,useHistory } from 'react-router-dom'



const AddProjectSingleItem = props => {

    let history = useHistory();
    const [id, setID] = useState(null);
    const [Name, setName] = useState('');
    const [Name_Ar, setName_Ar] = useState('');
    const [checkbox, setCheckbox] = useState(false);
   
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

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
		  label: "Yas Island, Abu Dhabi",
		  value: "Yas Island, Abu Dhabi",
		},
		{
		  label: "Saadiyat Island, Abu Dhabi",
		  value: "Saadiyat Island, Abu Dhabi",
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


    
    const AddAPIData = async (event) => {



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

        let id_val = 100 //document.getElementById("idd").value
        let Name  = document.getElementById("name").value
        let Name_Ar  = document.getElementById("name_ar").value

       

        let Status  = checkstatval
        let tType =  filterType
        let rRole = filterRole

        //let business = document.getElementById("busi").value 
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
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: Name, name_ar: Name_Ar, status: Status, type: tType, role: rRole,
                location: Location, location_ar: Location_ar, website: Website, desciption: Description_en,
                desciption_ar: Description_ar, year: Yyear, size: Ssize, value: Vval,
                annual_visitor: Annual_v,business: busi,
				lat: lat, long: long 
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
          
        //alert('Added');
        //window.location.replace('/admin/projects')

        event.preventDefault();  

    }

    const cancelAdd =  (event) => {
		//window.location.replace('/admin/projects')
		event.preventDefault();  

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


    return <React.Fragment>

<div class="col-md-12 edit_dashboard">
				<form id="update">
					<fieldset class="sta_tus">
						<label>Status:</label>
						
						<label class="ch_lbl">
							<input type="checkbox" id="status1" value="1" name="statusbox" onClick={handleChange} />
							<span class="checkmark"></span>
							Published
						</label>
						<label class="ch_lbl">
							<input type="checkbox" checked id="status2" value="2" name="statusbox" onClick={handleChange}/>
							<span class="checkmark"></span>
							Draft
						</label>

					</fieldset>

					<fieldset class="half">
						<label>Name (EN):
							<input id="name" type="text" />
						</label>
						<label>Name (AR):
							<input id="name_ar" type="text" />
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
							<input type="text" id="mapcoords"/>
						</label>

					</fieldset>


					<fieldset class="ty_pe">
						<label>Type:</label>
						
						<span class="group">

						  <label class="ch_lbl">
								<input type="checkbox" value="Most Popular" class="ftype" />
								<span class="checkmark"></span>
								Most Popular
							</label>

						  <label class="ch_lbl">
								<input type="checkbox" value="Stay" class="ftype" />
								<span class="checkmark"></span>
								Stay
							</label>

						</span>

            <span class="group">
                  <label class="ch_lbl">
                  <input type="checkbox" value="Play" class="ftype" />
                  <span class="checkmark"></span>
                  Play
                  </label>
                  <label class="ch_lbl">
                  <input type="checkbox" value="Dine" class="ftype" />
                  <span class="checkmark"></span>
                  Dine
                  </label>
            </span>

						<span class="group">
              <label class="ch_lbl">
                <input type="checkbox" value="Meet" class="ftype" />
                <span class="checkmark"></span>
                Meet
              </label>

              <label class="ch_lbl">
                <input type="checkbox" value="Culture" class="ftype" />
                <span class="checkmark"></span>
                Culture
              </label>
						</span>

						<span class="group">
              <label class="ch_lbl">
                <input type="checkbox" value="Destination" class="ftype" />
                <span class="checkmark"></span>
                Destination
              </label>
						</span>
						
					</fieldset>

					
					

					<fieldset class="half">
						<label>Business:
						<select id="selbusiness" onChange={handleSelectChange}>
							{Business_options.map((option) => (
							<option value={option.value}>{option.label}</option>
							))}
							</select>
						</label>


						<label>Website:
							<input type="text" id="website" />
						</label>
					</fieldset>   

					<fieldset class="half">
						<label>Description (EN):
							<textarea id="desc_en"></textarea>
						</label>

						<label>Description (AR):
							<textarea id="desc_ar"></textarea>
						</label>
					</fieldset>                                     

					<fieldset class="stats">
						<label>Statistics:</label>
						<span class="group">
							<input type="text" placeholder="Completion year" id="yyear" />
              				<input type="text" placeholder="Architect" id="vval" />
						</span>

						<span class="group">
							<input type="text" placeholder="Size(sqm)" id="ssize" />
							<input type="hidden" placeholder="Value (USD)" id="annual_visitor" />							
						</span>
					</fieldset>

					<fieldset class="ima_ges">
						<label>Images (JPG max file size 2mb):</label>
						<div class="item_wrap">
						</div>

						<button class="btn bt_orange">Add more images</button>
					</fieldset>			
          <fieldset>
            <div className="App">
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <button
                      style={isDragging ? { color: 'red' } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Click or Drop here
                    </button>
                    &nbsp;
                    <button onClick={onImageRemoveAll}>Remove all images</button>
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image['data_url']} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                          <button onClick={() => onImageUpdate(index)}>Update</button>
                          <button onClick={() => onImageRemove(index)}>Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </div>            
          </fieldset>		

		<fieldset class="btns">
			<button class="btn bt_orange save" type='submit' onClick={AddAPIData}>Add</button>
			<Link to={`/admin/projects`} className='btn bt_orange cancel' >Cancel</Link>
		</fieldset>                    

                </form>    
</div>                    
        


        
    </React.Fragment>;
}

export default AddProjectSingleItem;