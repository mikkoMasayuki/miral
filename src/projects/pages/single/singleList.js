import React from "react";
import SingleItem from "./singleItem";
const SingleList = props => {

    if (props.items.length === 0) {
      return (
        <div className="center">
            <h2>No Projects found!</h2>
        </div>  
      )
    } 

    return <React.Fragment>
      
      
      {props.items.map(project => {
              return <SingleItem 
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.desciption}
              location={project.location}
			  image={project.image[0]}
              images={project.image}
              year={project.year}
              size={project.size}
              value={project.value}
              website={project.website}
              annual_visitor={project.annual_visitor}
              type={project.type.split(',')}
              role={project.role.split(',')}
      			  favorite={project.is_favorite}
              />;
          })}
    </React.Fragment>

};

export default SingleList;