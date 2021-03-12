const urls = {
    root: '/',
    api: {
        auth: {
            register: '/auth/register',
            login: '/auth/login',
        },
        users: {
            base: '/users',
            object: id => (id ? `/users/${id}` : '/users/:id'),
        },
        tasks: {
            base: '/tasks',
            object: id => (id ? `/tasks/${id}` : '/tasks/:id'),
        },
    },
};

export default urls;
