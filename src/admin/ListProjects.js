import React from "react";
import { Link } from "react-router-dom";
import ProjRow from "./ProjectRow";
const ListProjects = props => {

    if (props.items.length === 0) {
      return (
        <div className="center">
            <h2>No Projects found!</h2>
        </div>  
      )
    } 

    console.log('-------prop.items-------')
    console.log(props.items)

    return <React.Fragment>

  <div className="container dash_add_project">
      
      <Link to={`/admin/addproject`} className='btn' >Add Project</Link>
        <div className="box_wrapper"> 
          {props.items.map(project => {
              return <ProjRow 
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              location={project.location}
			        image={project.image[0]}
              status={project.status}
              />;
          })}
        </div>
      </div>

      
    </React.Fragment>

};

export default ListProjects;