interface Task {
    id: number;
    content: String;
    isComplete: Boolean;
    user: User;
}

interface User {
    id: number;
    email: String;
    firstname: String;
    lastname: String;
    birthdate: Date;
    gender: Gender;
    encryptedPassword: String;
    tasks: Task[];
}

type Gender = {
    MALE;
    FEMALE;
};

type ResError = {
    status: number;
    message: string;
};
