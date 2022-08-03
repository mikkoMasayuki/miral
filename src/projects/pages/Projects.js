import React, { useEffect, useState } from "react";
import ProjectLists from "./ProjectList";
import { useParams } from "react-router-dom"
import ReactDOM from "react-dom"

const Projects = () => {

    const [loadedProject, setLoadedProject] = useState();
    const [loadedFilter, setLoadedFilter] = useState(false);

    const openFilterHandler = () => setLoadedFilter(true)
    const closeFilterHandler = () => setLoadedFilter(false)

    useEffect(() => {
        const sendRequest = async () => {
            const response = await fetch('http://3.101.21.72:4052/project')

            const responseData = await response.json();

            setLoadedProject(responseData.data);

            console.log(responseData.data);
        };

        sendRequest();
    }, [] )

    // const projID = useParams().id;
    // const loadedProj = projects.filter(proj => proj.id == projID);

    const content = <React.Fragment>
    {loadedProject && <ProjectLists items={loadedProject}  show={loadedFilter} onCancel={closeFilterHandler} onShow={openFilterHandler}></ProjectLists> } 
  </React.Fragment>

    return ReactDOM.createPortal(content, document.getElementById('miralProj'))
}

export default Projects;