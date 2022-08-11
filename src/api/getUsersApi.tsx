export const getUsers = async (page: any, filter: any) => {
    const users = await (
        await fetch(`https://randomuser.me/api/?gender=male&results=50&page=${page}&nat=${filter}`)
    ).json();
    return users.results;
};
