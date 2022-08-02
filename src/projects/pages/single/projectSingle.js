import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ReactDOM from "react-dom"
import SingleList from "./singleList";

const ProjectSingle = () => {

    const [loadedProject, setLoadedProject] = useState();
    const initializeState = () => !!JSON.parse(localStorage.getItem("refresh"));
    console.log(localStorage.getItem("refresh"))
    const [token, setToken] = useState(initializeState);
    const projID = useParams().id;
    useEffect(() => {
        const sendRequest = async () => {
            
            const response = await fetch(`http://3.101.21.72:4052/project/${projID}`)

            const responseData = await response.json();

            setLoadedProject(responseData.data);
            console.log(responseData.data)

        };

        sendRequest();
    }, [] )

    // const projID = useParams().id;
    // const loadedProj = projects.filter(proj => proj.id == projID);

    const content = <React.Fragment>
    <div class="container">
            {loadedProject && <SingleList items={loadedProject}></SingleList> } 
    </div>
  </React.Fragment>

    return ReactDOM.createPortal(content, document.getElementById('miralSingle'))
}

export default ProjectSingle;