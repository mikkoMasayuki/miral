import React from "react";
import { Link } from 'react-router-dom'

const ProjectRow = props => {
    return (

        <div className="col-md-12">
			<div class="inner_wrap">
				<div class="box"><p> <Link to={`/admin/update/${props.id}`} className='link' >{props.name} <span>{props.status == 2 ? 'Draft' : 'Publish'}</span></Link></p></div>
			
           </div>
        </div>

    );
}

export default ProjectRow;