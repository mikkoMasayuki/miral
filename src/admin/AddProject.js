import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ReactDOM from "react-dom"
import AddProjectSingle from "./AddProjectSingle";

const AddProject = () => {

    const [loadedProject, setLoadedProject] = useState();
    const initializeState = () => !!JSON.parse(localStorage.getItem("refresh"));
    console.log(localStorage.getItem("refresh"))
    const [token, setToken] = useState(initializeState);
    const projID = useParams().id;
    useEffect(() => {
        const sendRequest = async () => {
            
            const response = await fetch(`http://185.140.248.26:4052/project`)

            const responseData = await response.json();

            setLoadedProject(responseData.data);
            console.log(responseData.data)

        };

        sendRequest();
    }, [] )

    // const projID = useParams().id;
    // const loadedProj = projects.filter(proj => proj.id == projID);

    const content = <React.Fragment>
    <div class="container test">
            {loadedProject && <AddProjectSingle items={loadedProject}></AddProjectSingle> } 
    </div>
  </React.Fragment>

    return ReactDOM.createPortal(content, document.getElementById('miralSingle'))
}

export default AddProject;