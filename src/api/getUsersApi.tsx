import Axios from "axios";
import { useState } from "react";

// export const getUsers = async (page: number, filter: string) => {
//     const users:any = await (await fetch(`https://randomuser.me/api/?gender=male&results=50&page=${page}&nat=${filter}`)).json();
//     return users.results;
// };
export const getUsers = (page: number, filter: string) => {
    const users = Axios.get(`https://randomuser.me/api/?gender=male&results=50&page=${page}&nat=${filter}`).then((response) => {
        return response.data.results
    });
    return users
};


