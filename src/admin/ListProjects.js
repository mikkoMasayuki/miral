import React from "react";
import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ProjRow from "./ProjectRow";
import { sortableContainer, sortableElement, sortableHandle } from "react-sortable-hoc";

const itemStyles = {
  // padding: "10px",
  // border: "1px #000 solid",
  // backgroundColor: "#FFF",
  // margin: "10px"
};


const DragHandle = sortableHandle(() => <span class="draghandle">::</span>);

const SortableItem = sortableElement(({ project }) => {
  return <div class="list_item" style={itemStyles}><DragHandle />
        <div class="box">
          <p><Link to={`/admin/update/${project.id}`} className='link' >{project.name ==='' ? '  ' : project.name } <span className={project.status == 2 ? 'jsx_orange' : 'jsx_black'}>{project.status == 2 ? 'Draft' : 'Published'}</span></Link></p></div>
  </div>;
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

    /*
    const [loadedProject, setLoadedProject] = useState();
    
    useEffect(() => {
      const sendRequest = async () => {
          //const response = await fetch('https://mrl-portfolio.com/project')
          const response = await fetch('http://127.0.0.1:4052/project')
          const responseData = await response.json();
          setLoadedProject(responseData.data);
      };
      sendRequest();
  }, [] )    
*/

    let newArr = []
    let to_push = {}

    for (let i = 0; i < props.items.length; i++) {

      to_push = {}
      to_push.id = props.items[i].id
      to_push.is_favorite = props.items[i].is_favorite
      to_push.name = props.items[i].name
      to_push.status = props.items[i].status
      to_push.order = i

      newArr.push(to_push)      

    }
 
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
    //console.log(dataList)

    const updateAPIData = async (id,order) => {
      
          const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, is_favorite: order})
          };  

          fetch('https://mrl-portfolio.com/project', requestOptions)
          //fetch('http://127.0.0.1:4052/project', requestOptions)
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
            //updateAPIData(dataList[i].id,newIndex)
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

        for (let i = 0; i < dataList.length; i++) {
          //console.log('id :'+dataList[i].id + ' is_favorite :' + dataList[i].is_favorite + ' order :'+ dataList[i].order)
          updateAPIData(dataList[i].id, dataList[i].order)
        }

        return ret
      });


      //console.log(dataList)
    };    


  {  
  return <React.Fragment>

  <div className="container dash_add_project">
      
      <Link to={`/admin/addproject`} className='btn' >Add Project</Link>
        <div className="box_wrapper"> 
        <SortableContainer onSortEnd={onSortEnd} useDragHandle>
        {dataList.map((project, index) => (
          <SortableItem key={index} index={index} project={project} />
        ))}
      </SortableContainer>
      
        </div>
      </div>

      
    </React.Fragment>

         }

        /*
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
          */ 

};

export default ListProjects;