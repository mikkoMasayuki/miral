import React from "react";
import UsesrItem from "./UserItem";

const UserList = props => {

    if (props.items.length === 0) {
      return (
        <div className="center">
            <h2>No usesr found!</h2>
        </div>  
      )
    } 

    return <ul>
        {props.items.map(user => {
            return <UsesrItem 
            key={user.id}
            id={user.id}
            name={user.name}  
            />;
        })}
    </ul>

};

export default UserList;