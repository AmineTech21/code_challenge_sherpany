import { getUsers } from './getUsersApi';

it('50 Users should be rendered after the app start', async () => {
    const users = await getUsers(1, 'FR');
    expect(users).toHaveLength(50);
});
