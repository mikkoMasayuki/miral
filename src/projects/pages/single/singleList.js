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

    console.log(props.items)
    return <React.Fragment>
      
      
      {props.items.map(project => {
              return <SingleItem 
              key={project.id}
              id={project.id}
              name={project.name}
              name_ar={project.name_ar}
              description={project.desciption}
              description_ar={project.desciption_ar}
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
              business={project.business.split(',')}
              headline={project.headline}
              headline_en={project.headline_en}
              headline_ar={project.headline_ar}              
              />;
          })}
    </React.Fragment>

};

export default SingleList;