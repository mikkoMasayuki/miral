import React from "react";
import UpdateProjectSingleItem from "./UpdateProjectSingleItem";
const UpdateProjectSingle = props => {

    if (props.items.length === 0) {
      return (
        <div className="center">
            <h2>No Projects found!</h2>
        </div>  
      )
    } 

    return <React.Fragment>
      
      
      {props.items.map(project => {
              return <UpdateProjectSingleItem 
              key={project.id}
              id={project.id}
              name={project.name}
              name_ar={project.name_ar}
              status={project.status}
              lat={project.lat}
              long={project.long}
              ptype={project.type}
              role={project.role}
              business={project.business}
              website={project.website}
              description_en={project.desciption}
              description_ar={project.desciption_ar}
              location={project.location}
              location_ar={project.location_ar}
			  image={project.image[0]}
              images={project.image}
              year={project.year}
              size={project.size}
              value={project.value}
              annual_visitor={project.annual_visitor}
              />;
          })}
    </React.Fragment>

};

export default UpdateProjectSingle;