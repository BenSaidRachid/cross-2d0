const urls = {
    root: "/",
    api: {
        teachers: {
            base: "/teachers",
            register: "/teachers/register",
            login: "/teachers/login",
            edit: {
                info: id => (id ? `/teachers/${id}/info` : "/teachers/:id/info"),
                password: id => (id ? `/teachers/${id}/password` : "/teachers/:id/password"),
            },
            activate: id => (id ? `/teachers/${id}/activate` : "/teachers/:id/activate"),
            channels: {
                add: id => (id ? `/teachers/${id}/channels` : "/teachers/:id/channels"),
            },
            courses: {
                add: id => (id ? `/teachers/${id}/courses` : "/teachers/:id/courses"),
            },
        },
        channels: {
            base: "/channels",
            object: slug => (slug ? `/channels/${slug}` : "/channels/:slug"),
        },
        sections: {
            base: "/sections",
            object: id => (id ? `/sections/${id}` : "/sections/:id"),
        },
        courses: {
            base: "/courses",
            object: slug => (slug ? `/courses/${slug}` : "/courses/:slug"),
            sections: {
                add: slug => (slug ? `/courses/${slug}/sections` : "/courses/:slug/sections"),
            },
        },
    },
};

export default urls;
