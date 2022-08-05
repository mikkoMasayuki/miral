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

    return <React.Fragment>

  <div className="container">
      
        <div className="row portfolio_grid"> 
          {props.items.map(project => {
              return <ProjRow 
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              location={project.location}
			  image={project.image[0]}
              />;
          })}
        </div>
      </div>

      
    </React.Fragment>

};

export default ListProjects;