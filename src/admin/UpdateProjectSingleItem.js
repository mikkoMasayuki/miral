import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import parse from 'html-react-parser';



const UpdateProjectSingleItem = props => {

    let history = useHistory();
    const [id, setID] = useState(null);
    const [Name, setName] = useState('');
    const [Name_Ar, setName_Ar] = useState('');
    const [checkbox, setCheckbox] = useState(false);


	//alert(props.images.length)

   

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
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                id: id_val, name: Name, name_ar: Name_Ar, status: Status, type: tType, role: rRole,
                location: Location, location_ar: Location_ar, website: Website, desciption: Description_en,
                desciption_ar: Description_ar, year: Yyear, size: Ssize, value: Vval,
                annual_visitor: Annual_v,
				lat: lat, long: long, business: busi, 
				images: images_url
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
				console.log(result)
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

	const showImageInput = (item) => {
			if(item > 0) {
				return '<div>'+item+'</div>';
			}
	}

	function readURL(event) {

		let image_source = event.target.id.split("-") 
		//alert( id_s[1] )
		//console.log(event.target.value)
		
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

	function uniqueFileName() {
		const dateString = Date.now().toString(36)
		const randomness = Math.random().toString(36).substr(2)
		let ret = dateString.replace(".","") + randomness.replace(".","")
		return ret
	}	

	function uploadImage(e) {
				

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

				console.log("formdata >>>>>>>>>>>>>>>>>>>>>>>>>>")
				console.log(formData.get('image'))
				console.log(formData.get('filename'))
				console.log(image_source[1])


				let readerloading = new FileReader()
				let preview_img_loading = document.getElementById(image_source[1])
	
				readerloading.onload = function (e) {
					preview_img_loading.src = '/assets/img/loading-bars.gif'
					//document.getElementById("url-"+image_source[1]).value = result.data
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
							//preview_img.src = e.target.result
							preview_img.src = result.data
							document.getElementById("url-"+image_source[1]).value = result.data
						}
			
						reader.readAsDataURL(e.target.files[0])		
						
						document.getElementById("url-"+image_source[1]).value = result.data
						console.log('data:', result.data)
						
					  } else {
						  alert("Something is wrong while saving please try again!")
					  }
						  
				  })	
				  
				  


	}	


	const generateImages = (item) => {

		
		let html = ''
		let imgs = ''
		let imgs_row1 = ''
		let imgs_row2 = ''
		let imgs_remain = ''
		let presetImages = 8
		let remainImgs = presetImages - item.length
		let colcounter = 0
		let newArr = []

		for(let i=0;i<item.length;i++) {
			newArr.push(item[i].image_url)
		}


		if (remainImgs>0) {
			for(let i=0;i<remainImgs;i++) {
				newArr.push('/assets/img/upload-placeholder.png')
			}
			
		}
		


		let tmp = ''
		let src_label = ''
		let src_input = ''		
		let src_img = ''	

		return <React.Fragment>
			{

					newArr.map( (item,counter) => {
						counter++
						src_label = "source-img"+counter
						src_input = "url-img"+counter
						src_img = "img"+counter
						

						return <div class="item">
						<label for={src_label}>
							<img id={src_img} src={item} />
						</label>	
						<input class="hideme" name={src_label} id={src_label} type="file" onChange={uploadImage} />
						<input id={src_input} value={item} type="hidden"/>
						<a>Remove</a>
						</div>
					})
				
					
				
			}
		</React.Fragment>
		/*
		for(let i=0;i<newArr.length;i++) {
			colcounter++

			if(colcounter <= 4) {
				imgs_row1 = imgs_row1 
				+ '<td>' 
				+ '<label for="source-img'+i+'">'
				+ '<img src="'
				+ newArr[i]
				+ '"/>'
				+ '</label>'
				+ '<input class="hidemex" name="source-img'+i+'" id="source-img'+i+'" type="file" onChange={uploadImage} />'
				+ '<input id="url-img'+i+'" type="hidden"/>'
				+ '<a>Remove</a>'
				+'</td>'	
	
			} else {
				imgs_row2 = imgs_row2 
				+ '<td>' 
				+ '<label for="source-img'+i+'">'
				+ '<img src="'
				+ newArr[i]
				+ '"/>'
				+ '</label>'
				+ '<input class="hideme" name="source-img'+i+'" id="source-img'+i+'" type="file" onChange={uploadImage} />'
				+ '<input id="url-img'+i+'" type="hidden"/>'
				+ '<a>Remove</a>'
				+'</td>'			
			}
		}

		imgs = '<tr>'+imgs_row1+'</tr><tr>'+imgs_row2+'</tr>'
		html = '<table>'+imgs+'</table>'

		return parse(html)
		*/

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
							<input type="checkbox" defaultChecked={getData("Business Venues",props.ptype) ? true : false} value="Business Venues" class="ftype" />
								<span class="checkmark"></span>
								Business Venues
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
						<label>Headline (EN):
							<input id="headline_en" type="text" />
						</label>

						<label>Headline (AR):
							<input id="headline_ar" type="text" />							
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
						<label>Images: <span>(1600 x 1020 pixels JPG/WebP, optimum file size 500Kb)</span></label>
						<div class="item_wrap">
							{generateImages(props.images)}			
						</div>

						
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