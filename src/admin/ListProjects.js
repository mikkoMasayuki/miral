import React from "react";
import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ProjRow from "./ProjectRow";
import { sortableContainer, sortableElement } from "react-sortable-hoc";

const itemStyles = {
  padding: "10px",
  border: "1px #000 solid",
  backgroundColor: "#FFF",
  margin: "10px"
};

const SortableItem = sortableElement(({ project }) => {
  return <div style={itemStyles}>{project.name}</div>;
});

const SortableContainer = sortableContainer(({ children }) => {
  return <div className="container">{children}</div>;
});


const ListProjects = props => {

    if (props.items.length === 0) {
      return (
        <div className="center">
            <h2>No Projects found!</h2>
        </div>  
      )
    } 

    /*useEffect(() => {}, [dataList])*/    

    const [loadedProject, setLoadedProject] = useState();
    
    useEffect(() => {
      const sendRequest = async () => {
          const response = await fetch('https://mrl-portfolio.com/project')
          const responseData = await response.json();
          setLoadedProject(responseData.data);
      };
      sendRequest();
  }, [] )    

  console.log('>>>>>>>>>>>>')

 // xx.forEach( fld => { console.log(fld.id) } )
  console.log('<<<<<<<<<<<')

    console.log('again......')
    let newArr = []
    let to_push = {}

    for (let i = 0; i < props.items.length; i++) {

      to_push = {}
      to_push.id = props.items[i].id
      to_push.is_favorite = props.items[i].is_favorite
      to_push.name = props.items[i].name
      to_push.order = i

      newArr.push(to_push)      

    }
    
    //console.log(props.items)
    console.log('xxxxxxxxxxxxxx')
    console.log(newArr)


    const thelist = newArr
    //console.log(thelist)
    /*
    const thelist = [
      { name: "user 0", order: 0 },
      { name: "user 1", order: 1 },
      { name: "user 2", order: 2 },
      { name: "user 3", order: 3 }
    ]
    */
    const [dataList, setDataList] = useState(thelist);
    console.log(dataList)

    const updateAPIData = async (id,order) => {
      
          const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, is_favorite: order})
          };  

          fetch('https://mrl-portfolio.com/project', requestOptions)
          .then(response => response.json())
          .then((result) => {
            console.log('Success:', result)
            console.log('error:', result.error)
            if(result.error === null ){
            console.log('success')
            } else {
            console.log('error saving')
            }
          })	        

          console.log('FROM update API ID:'+id)    
          console.log('FROM update API ORDER:'+order)    

    }

    const onSortEnd = ({ oldIndex, newIndex }) => {

      for (let i = 0; i < dataList.length; i++) {
          if (dataList[i].order == oldIndex) {
            console.log('------ old index ------')
            console.log('id :'+dataList[i].id)
            console.log('is_favorite :'+dataList[i].is_favorite)
            console.log('name :'+dataList[i].name)
            console.log('old index :'+oldIndex)
            console.log('New index :'+newIndex)
            updateAPIData(dataList[i].id,newIndex)
            break;
          }
      }


      setDataList(prevState => {
        const newItems = [...prevState];
  
        if (oldIndex > newIndex) {
          for (let i = oldIndex - 1; i >= newIndex; i--) {
            newItems[i].order++;
            newItems[oldIndex].order = newIndex;
          }
        } else if (oldIndex < newIndex) {
          for (let i = oldIndex + 1; i <= newIndex; i++) {
            newItems[i].order--;
            newItems[oldIndex].order = newIndex;
          }
        }

        const ret = newItems.sort((a, b) => a.order - b.order);
        console.log('------ reordered list ------')
        console.log(ret)
        return ret
      });
    };    


  {  /*
  return <React.Fragment>

  <div className="container dash_add_project">
      
      <Link to={`/admin/addproject`} className='btn' >Add Project</Link>
        <div className="box_wrapper"> 
        <SortableContainer onSortEnd={onSortEnd}>
        {dataList.map((project, index) => (
          <SortableItem key={index} index={index} project={project} />
        ))}
      </SortableContainer>
      
        </div>
      </div>

      
    </React.Fragment>

        */ }
        return <React.Fragment>

        <div className="container dash_add_project">
            <a class="btn" href="">Add Project</a>
              <div className="box_wrapper"> 
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