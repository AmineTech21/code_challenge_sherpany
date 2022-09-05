import { getUsers } from './getUsersApi';

describe ('', () => {
    it('50 Users should be rendered after the app start', async () => {
        const users = await getUsers(1, 'FR');
        expect(users).toHaveLength(50);
    });

    it('50 new users should be added to the first array when the page is 2 the total users should be 100', async () => {
        const users = await getUsers(1, 'FR');
        const newUsers = await getUsers(2, 'FR');
        const totalUsers = users.concat(newUsers)
        expect(totalUsers).toHaveLength(100);
    });

    it('50 new users should be added to the first array when the page is 3 the total users should be 150', async () => {
        const users = await getUsers(1, 'FR');
        const newUsers = await getUsers(2, 'FR');
        const newUsers1 = await getUsers(3, 'FR');
        const totalUsers = users.concat(newUsers, newUsers1)
        expect(totalUsers).toHaveLength(150);
    });

    it('The user should have a thumbnail proprety', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].picture.thumbnail);
    });

    it('The user should have a first name proprety', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].name.first);
    });

    it('The user should have a last name proprety', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].name.last);
    });

    it('The user should have a username proprety', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].login.username);
    });

    it('The user should have a email proprety', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].email);
    });

    it('The user should have a street number proprety', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].location.street.number);
    });

    it('The user should have a street name proprety', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].location.street.name);
    });

    it('The user should have a city name proprety', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].location.city);
    });

    it('The user should have a state proprety', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].location.state);
    });

    it('The user should have a postcode proprety', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].location.postcode);
    });

    it('The user should have a phone proprety', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].phone);
    });

    it('The user should have a cell proprety', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].cell);
    });

    it('The user should have a nat proprety', async () => {
        const users = await getUsers(1, 'FR');
        expect(users[0].nat);
    });
})
