import React from "react";
import { Link } from "react-router-dom";
import ProjRow from "./ProjectRow";
import DraggableList from "react-draggable-lists";

const listItems = [
  "Entertainment",
  "Private Time",
  "Rest",
  "Meal",
  "Exercise",
  "Work",
  "Home Projects",
  "Family"
];

const onMoveEnd = newList => {
  console.log(newList);
}

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
        {/*
        <div style={{ width: "100%", margin: 0 }}>
          <DraggableList width={600} height={50} rowSize={1}
          onMoveEnd={onMoveEnd}>
            {listItems.map((item, index) => (
              <li className="draggableitems" key={index}>{`${index + 1}.  ${item}`}</li>
            ))}
          </DraggableList>
        </div>
            */}

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