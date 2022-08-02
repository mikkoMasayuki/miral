import React from "react";
import UserList from "../components/UserList";


const Users = () => {
    const USER = [{
        id:1,
        name: "Mikko Asahi",

    }];
    return <UserList items={USER} />
}

export default Users;