import Axios from "axios";

export const getUsers = (page: number, filter: any) => {
    const users = Axios.get(`https://randomuser.me/api/?gender=male&results=50&page=${page}&nat=${filter}`).then((response) => {
        return response.data.results
    });
    return users
};


