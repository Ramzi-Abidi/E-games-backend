const bcryptjs = require("bcrypt");

const users = [
    {
        name: "Ramzi Abidi",
        email: "ramziinfo2001@gmail.com",
        password: bcryptjs.hashSync("ramziramzi", 10),
        isAdmin: true,
    },
    {
        name: "Jhon Doe",
        email: "jhon@gmail.com",
        password: bcryptjs.hashSync("123456789", 10),
        isAdmin: false,
    },
    {
        name: "Jane Doe",
        email: "jane@gmail.com",
        password: bcryptjs.hashSync("123456789", 10),
        isAdmin: false,
    },
];

module.exports = users;
