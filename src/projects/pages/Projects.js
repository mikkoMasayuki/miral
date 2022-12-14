import React, { useEffect, useState } from "react";
import ProjectLists from "./ProjectList";
import { useParams, Redirect  } from "react-router-dom"
import ReactDOM from "react-dom"

const Projects = (props) => {

   

    const [loadedProject, setLoadedProject] = useState();
    const [loadedFilter, setLoadedFilter] = useState(false);
    const [resetFilter,setResetFilter] = useState(false)


    const openFilterHandler = () => setLoadedFilter(true)
    const closeFilterHandler = () => setLoadedFilter(false)
    const resetFilterHandler = () => setResetFilter(false)
 
    
    

    let filters ="";

    const getDataBasedOnFilters = (theval) => {



        console.log('Type: ', theval.payload.filtertype);
        console.log('Role: ', theval.payload.filterRole);
        console.log('Loc : ', theval.payload.filterLoc);
        console.log('busi : ', theval.payload.filterbusi);
        console.log('filtermore : ', theval.payload.filtermore);

        if (theval.payload.filtermore == "") {
            filters = "type="+ theval.payload.filtertype + "&role=" +theval.payload.filterRole + "&location=" +theval.payload.filterLoc+ "&business=" +theval.payload.filterbusi+ "&status=1"
        } else {
            filters = "type="+ theval.payload.filtertype + "&role=" +theval.payload.filterRole + "&location=" +theval.payload.filterLoc+ "&business=" +theval.payload.filterbusi+ "&is_favorite=" +theval.payload.filtermore+ "&status=1"
        }

       

        const sendRequest = async () => {
            const response = await fetch('https://mrl-portfolio.com/project/?'+filters)
            //const response = await fetch('http://127.0.0.1:4052/project/?'+filters)
            const responseData = await response.json();

            setLoadedProject(responseData.data);

            console.log('https://mrl-portfolio.com/project/?'+ filters);  
            console.log('filters click: ', filters);    
            console.log('-------response data filtered-------->');
            //console.log(responseData.data);
            //console.log(responseData.data.length);
            //console.log('>>>>'+responseData.data.length);
            //console.log('>>>>'+responseData.data[0].name);
            //console.log('>>>>'+responseData.data[0].lat);
            //console.log('>>>>'+responseData.data[0].long);

           localStorage.setItem('filter_projects', JSON.stringify(responseData.data));
           console.log('Projects - Running from :'+process.env.REACT_APP_APIURL)

         //console.log(JSON.stringify(responseData.data))
           // document.getElementById("filtered_data").innerHTML = JSON.stringify(responseData.data)
        };

        sendRequest();
        
      }

    

    useEffect(() => {
        const sendRequest = async () => {
            const response = await fetch('https://mrl-portfolio.com/project/?status=1')
            //const response = await fetch('http://127.0.0.1:4052/project/?status=1')


            const responseData = await response.json();

            setLoadedProject(responseData.data);
            console.log('filters: ', filters);    
            console.log('-------response data all-------->');
            console.log(responseData.data);

           // alert('here'+responseData.data);
            localStorage.setItem('filter_projects', JSON.stringify(responseData.data));
            var gmaps_projects = JSON.parse(localStorage.getItem('filter_projects'));  
            //alert( "zzz "+gmaps_projects[0].image[0].image_url)  
            
            
        };

        sendRequest();
    }, [] )

    // const projID = useParams().id;
    // const loadedProj = projects.filter(proj => proj.id == projID);
    

    const content = <React.Fragment>
    {loadedProject && <ProjectLists ReloadFilters={getDataBasedOnFilters} items={loadedProject}  show={loadedFilter} onReset={resetFilterHandler} onCancel={closeFilterHandler} onShow={openFilterHandler}></ProjectLists> } 
  </React.Fragment>

    return ReactDOM.createPortal(content, document.getElementById('miralProj'))

}

export default Projects;