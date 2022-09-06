import React, { useEffect, useState } from "react";
import ListProjects from "./ListProjects";
import { useParams } from "react-router-dom"
import ReactDOM from "react-dom"

const AdminProjects = () => {

    const [loadedProject, setLoadedProject] = useState();
    const [loadedFilter, setLoadedFilter] = useState(false);

    const openFilterHandler = () => setLoadedFilter(true)
    const closeFilterHandler = () => setLoadedFilter(false)

    useEffect(() => {
        const sendRequest = async () => {
            const response = await fetch('http://185.140.248.26:4052/project')

            const responseData = await response.json();

            setLoadedProject(responseData.data);

            console.log(responseData.data);
           // console.log('Admin Projects - Running from :'+process.env.REACT_APP_APIURL)
        };

        sendRequest();
    }, [] )

    // const projID = useParams().id;
    // const loadedProj = projects.filter(proj => proj.id == projID);

    const content = <React.Fragment>
    {loadedProject && <ListProjects items={loadedProject}  show={loadedFilter} onCancel={closeFilterHandler} onShow={openFilterHandler}></ListProjects> } 
  </React.Fragment>

    return ReactDOM.createPortal(content, document.getElementById('miralProj'))
}

export default AdminProjects;