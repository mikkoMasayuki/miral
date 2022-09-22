import React, { useState, useEffect, useRef } from 'react';
import ImageUploading from 'react-images-uploading';
import { Link,useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'


const AddProjectSingleItem = props => {

	const name_en = useRef(null);
	const name_ar = useRef(null);

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
			label: "Yas Island",
			value: "Yas Island",
		},
		{
			label: "Abu Dhabi",
			value: "Abu Dhabi",
		},		
		{
			label: "Saadiyat Island",
			value: "Saadiyat Island",
		},
		{
			label: "Al Ain",
			value: "Al Ain",
		},	
		{
			label: "Jordan",
			value: "Jordan",
		},		  	
		{
			label: "Kazakhstan",
			value: "Kazakhstan",
		}

	  ];
	  	  
	function handleSelectChange(e) {
		console.log(  e.target.value )
		return e.target.value
	}

	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
		  confirmButton: 'btn btn-success',
		  cancelButton: 'btn btn-danger'
		},
		buttonsStyling: false
	  })

	const openErrorMsg =  (msg) => {
		  swalWithBootstrapButtons.fire({
			title: `Error`,
			text: msg,
			icon: 'warning',
			showCancelButton: false,
			confirmButtonText: `Ok`
		  }).then((result) => {
			if (result.isConfirmed) {
				window.setTimeout(function () { 
					//document.getElementById('name').focus()
					name_en.current.focus()
				}, 500) 				
			}
		   }
		  )   
		
		
	}
    
    const AddAPIData = async (event) => {

		
		//name_ar.current.focus();

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



		let images_arr = []

		let kv = []
		let temp = ''

		temp = document.getElementById("url-img1").value
		  if (  temp !== "" || temp.length > 0) {
			images_arr.push( temp )
		  }

		temp = document.getElementById("url-img2").value
		  if (  temp !== "" || temp.length > 0) {
			images_arr.push( temp )
		  }		 
		temp = document.getElementById("url-img3").value
		  if (  temp !== "" || temp.length > 0) {
			images_arr.push( temp )
		  }

		temp = document.getElementById("url-img4").value
		  if (  temp !== "" || temp.length > 0) {
			images_arr.push( temp )
		  }			  

		temp = document.getElementById("url-img5").value
		  if (  temp !== "" || temp.length > 0) {
			images_arr.push( temp )
		  }

		temp = document.getElementById("url-img6").value
		  if (  temp !== "" || temp.length > 0) {
			images_arr.push( temp )
		  }		 

		temp = document.getElementById("url-img7").value
		  if (  temp !== "" || temp.length > 0) {
			images_arr.push( temp ) 
		  }

		temp = document.getElementById("url-img8").value
		  if (  temp !== "" || temp.length > 0) {
			images_arr.push( temp )
		  }	
		

		  console.log(images_arr)
		  
		  
		//let images_url = ["https://bucket-miral.s3.me-central-1.amazonaws.com/l81hexcj7qpvdur27qnlogin-ftrd.png","https://bucket-miral.s3.me-central-1.amazonaws.com/l81hehzvaa6fz9p0zt799destination-happiness.png"]
        
		let images_url = images_arr

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
			
            body: JSON.stringify({ 
                name: Name, name_ar: Name_Ar, status: Status, type: tType, role: rRole,
                location: Location, location_ar: Location_ar, website: Website, desciption: Description_en,
                desciption_ar: Description_ar, year: Yyear, size: Ssize, value: Vval,
                annual_visitor: Annual_v,business: busi,
				lat: lat, long: long,
				images: images_url
                //, value: Vval, annual_visitor: Annual_visitor    
            })
        };


		console.log("requestOptions : "+JSON.stringify(requestOptions))
		console.log("requestOptions : "+requestOptions.method)
		console.log("requestOptions : "+requestOptions.headers['Content-Type'])		
		console.log("requestOptions : "+requestOptions.body)

		if ( Name.length <=0 ) {
			openErrorMsg('Project Name is required.')
		} else {
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
		}

	
	
          
		//window.location.replace('/admin/projects')
        //alert('Added');
        //window.location.replace('/admin/projects')

        event.preventDefault();  

    }

    const cancelAdd =  (event) => {
		//window.location.replace('/admin/projects')
		event.preventDefault();  

    }

	const addHttps =  (event) => {
		let webhttp = document.getElementById("website")
		webhttp.value = 'https://'
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

	function uniqueFileName() {
		const dateString = Date.now().toString(36)
		const randomness = Math.random().toString(36).substr(2)
		let ret = dateString.replace(".","") + randomness.replace(".","")
		return ret
	}	

	function readURL(event) {

		let image_source = event.target.id.split("-") 

		let src_file = document.getElementById(event.target.id)
		
		if (src_file.files && src_file.files[0]) {
			let reader = new FileReader()
			let preview_img = document.getElementById(image_source[1])

			reader.onload = function (e) {
				preview_img.src = e.target.result
								
			};

			reader.readAsDataURL(src_file.files[0])
		}
		
		
	}		


	function uploadImagetest() {



		let images_arr = []

		let kv = []
		let temp = ''





		temp = document.getElementById("url-img1").value
		  if (  temp !== "" || temp.length > 0) {
			kv["image_url"] = temp
			images_arr.push( temp )
		  }

		temp = document.getElementById("url-img2").value
		  if (  temp !== "" || temp.length > 0) {
			kv["image_url"] = temp
			images_arr.push( temp )
		  }		 
		temp = document.getElementById("url-img3").value
		  if (  temp !== "" || temp.length > 0) {
			kv["image_url"] = temp
			images_arr.push( temp )
		  }

		temp = document.getElementById("url-img4").value
		  if (  temp !== "" || temp.length > 0) {
			kv["image_url"] = temp
			images_arr.push( temp )
		  }			  

		temp = document.getElementById("url-img5").value
		  if (  temp !== "" || temp.length > 0) {
			kv["image_url"] = temp
			images_arr.push( temp )
		  }

		temp = document.getElementById("url-img6").value
		  if (  temp !== "" || temp.length > 0) {
			kv["image_url"] = temp
			images_arr.push( temp )
		  }		 

		temp = document.getElementById("url-img7").value
		  if (  temp !== "" || temp.length > 0) {
			kv["image_url"] = temp
			images_arr.push( temp ) 
		  }

		temp = document.getElementById("url-img8").value
		  if (  temp !== "" || temp.length > 0) {
			kv["image_url"] = temp
			images_arr.push( temp )
		  }	

		  let images_url = ["https://bucket-miral.s3.me-central-1.amazonaws.com/l81hexcj7qpvdur27qnlogin-ftrd.png","https://bucket-miral.s3.me-central-1.amazonaws.com/l81hehzvaa6fz9p0zt799destination-happiness.png"]

		  console.log(images_url)
		  console.log(images_arr)
		  console.log(JSON.stringify( images_arr ))  

	}

	function uploadImage(e) {
		//console.log(e.target.files[0])
		//alert(e.target.files[0].name)
				//const input = document.getElementById("source-img1")
				
				let image_source = e.target.id.split("-") 
				let filename = e.target.files[0].name
				let file_ext = filename.split(".") 
				let formData = new FormData()


				formData.append("image", e.target.files[0])
				formData.append("filename", uniqueFileName()+file_ext[0]+"."+file_ext[1])
			
				const requestOptions = {
					method: 'POST',
					body: formData
				}

				  fetch('http://3.28.53.5:4052/project/upload', requestOptions)
				  .then(response => response.json())
				  .then((result) => {
					  console.log('Success:', result)
					  console.log('error:', result.error)
					  if(result.error === null ){

						let reader = new FileReader()
						let preview_img = document.getElementById(image_source[1])
			
						reader.onload = function (e) {
							preview_img.src = e.target.result
						}
			
						reader.readAsDataURL(e.target.files[0])		
						
						document.getElementById("url-"+image_source[1]).value = result.data
						console.log('data:', result.data)
						
					  } else {
						  alert("Something is wrong while saving please try again!")
					  }
						  
				  })	


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
							<input ref={name_en} id="name" type="text" />
						</label>
						<label>Name (AR):
							<input ref={name_ar} id="name_ar" type="text" />
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
                <input type="checkbox" value="Business Venues" class="ftype" />
                <span class="checkmark"></span>
                Business Venues
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
							<input type="text" id="website" onClick={addHttps}/>
						</label>
					</fieldset>   
					<fieldset class="half">
						<label>Headline (EN):
							<input id="headline_en" type="text" />
						</label>

						<label>Headline (AR):
							<input id="headline_ar" type="text" />							
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
              				<input type="hidden" placeholder="Architect" id="vval" />
						</span>

						<span class="group">
							<input type="text" placeholder="Size(sqm)" id="ssize" />
							<input type="hidden" placeholder="Value (USD)" id="annual_visitor" />							
						</span>
					</fieldset>

					<fieldset class="ima_ges">
						<label>Images: <span>(1600 x 1020 pixels JPG/WebP, optimum file size 1MB)</span></label>
						<div class="item_wrap">
						</div>

						<a class="btn bt_orange add_more_imgs" onClick={uploadImagetest} >Add more images</a>
					</fieldset>			
          
							
		<fieldset class="ima_ges">

			<div class="row">	
				<div class="col-md-12">
					<table>
					<tr>
					<td>
						<label for="source-img1">
								<img class="uploaded-images" id="img1" src="/assets/img/upload-placeholder.png" alt="image" />
						</label>						
						
						<input class="hideme" name="source-img1" id="source-img1" type='file' onChange={uploadImage}/>	
						<input id="url-img1" type='hidden'/>	
					</td>
					<td>
						<label for="source-img2">
							<img class="uploaded-images" id="img2" src="/assets/img/upload-placeholder.png" alt="image" />
						</label>						
						
						<input class="hideme" name="source-img2" id="source-img2" type='file' onChange={uploadImage} />
						<input id="url-img2" type='hidden'/>	
					</td>
					<td>
						<label for="source-img3">
							<img class="uploaded-images" id="img3" src="/assets/img/upload-placeholder.png" alt="image" />
						</label>						
						
						<input class="hideme" name="source-img3" id="source-img3" type='file' onChange={uploadImage} />
						<input id="url-img3" type='hidden'/>
					</td>
					<td>
						<label for="source-img4">
							<img class="uploaded-images" id="img4" src="/assets/img/upload-placeholder.png" alt="image" />
						</label>						
						
						<input class="hideme" name="source-img4" id="source-img4" type='file' onChange={uploadImage} />
						<input id="url-img4" type='hidden'/>
					</td>
					</tr>
					<tr>
					<td>

						<label for="source-img5">
							<img class="uploaded-images" id="img5" src="/assets/img/upload-placeholder.png" alt="image" />
						</label>							
														
						<input class="hideme" name="source-img5" id="source-img5" type='file' onChange={uploadImage} />
						<input id="url-img5" type='hidden'/>										
					</td>
					<td>

						<label for="source-img6">
						<img class="uploaded-images" id="img6" src="/assets/img/upload-placeholder.png" alt="image" />
						</label>

						
						<input class="hideme" name="source-img6" id="source-img6" type='file' onChange={uploadImage} />
						<input id="url-img6" type='hidden'/>
					</td>
					<td>

						<label for="source-img7">
							<img class="uploaded-images" id="img7" src="/assets/img/upload-placeholder.png" alt="image" />
						</label>
						
						<input class="hideme" name="source-img7" id="source-img7" type='file' onChange={uploadImage} />
						<input id="url-img7" type='hidden'/>											
					</td>
					<td>
						<label for="source-img8">
							<img class="uploaded-images" id="img8" src="/assets/img/upload-placeholder.png" alt="image" />
						</label>
						
						<input class="hideme" name="source-img8"  id="source-img8" type='file' onChange={uploadImage} />
						<input id="url-img8" type='hidden'/>										
					</td>
					</tr>									
					</table>


				</div>

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