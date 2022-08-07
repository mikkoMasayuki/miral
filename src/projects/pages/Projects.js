import React, { useEffect, useState } from "react";
import ProjectLists from "./ProjectList";
import { useParams } from "react-router-dom"
import ReactDOM from "react-dom"

const Projects = (props) => {

    const [loadedProject, setLoadedProject] = useState();
    const [loadedFilter, setLoadedFilter] = useState(false);

    const openFilterHandler = () => setLoadedFilter(true)
    const closeFilterHandler = () => setLoadedFilter(false)


    let filters ="";

    const getDataBasedOnFilters = (theval) => {


        console.log('Type: ', theval.payload.filtertype);
        console.log('Role: ', theval.payload.filterRole);
        console.log('Loc : ', theval.payload.filterLoc);
        console.log('busi : ', theval.payload.filterbusi);
        filters = "type="+ theval.payload.filtertype + "&role=" +theval.payload.filterRole + "&location=" +theval.payload.filterLoc+ "&business=" +theval.payload.filterbusi; 

        const sendRequest = async () => {
            const response = await fetch('http://54.183.107.251:4052/project/?'+filters)

            const responseData = await response.json();

            setLoadedProject(responseData.data);


            console.log('filters: ', filters);    
            console.log(responseData.data);
            console.log(responseData.data.length);

        };

        sendRequest();
        
      }

    

    useEffect(() => {
        const sendRequest = async () => {
            const response = await fetch('http://54.183.107.251:4052/project/')

            const responseData = await response.json();

            setLoadedProject(responseData.data);
            console.log('filters: ', filters);    
            console.log(responseData.data);
        };

        sendRequest();
    }, [] )

    // const projID = useParams().id;
    // const loadedProj = projects.filter(proj => proj.id == projID);
    

    const content = <React.Fragment>
    {loadedProject && <ProjectLists ReloadFilters={getDataBasedOnFilters} items={loadedProject}  show={loadedFilter} onCancel={closeFilterHandler} onShow={openFilterHandler}></ProjectLists> } 
  </React.Fragment>

    return ReactDOM.createPortal(content, document.getElementById('miralProj'))
}

export default Projects;