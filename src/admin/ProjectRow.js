import React from "react";
import { Link } from 'react-router-dom'

const ProjectRow = props => {
    return (

        <div className="col-md-12">
			<div class="inner_wrap">
				<div class="box"><p> <Link to={`/admin/update/${props.id}`} className='link' >{props.name ==='' ? '  ' : props.name } <span className={props.status == 2 ? 'jsx_orange' : 'jsx_black'}>{props.status == 2 ? 'Draft' : 'Published'}</span></Link></p></div>
			
           </div>
        </div>

    );
}

export default ProjectRow;