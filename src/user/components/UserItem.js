import React from "react";
import { Link } from 'react-router-dom'

const UsesrItem = props => {
    return (

        <li>
           <Link to={`/${props.id}/user`} >
           <span>{props.name}</span>
           </Link>
        </li>

    );
}

export default UsesrItem;