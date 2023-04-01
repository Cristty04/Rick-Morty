//definir un array de usuarios 
const users = [
    {
        email: "mairam@hotmail.com",
        password: "1234",
        username: "mairam"
    }, 

    {
        email: "cris@hotmail.com",
        password: "1234",
        username: "cris"
    }, 
    {
        email: "oscar@hotmail.com",
        password: "1234",
        username: "oscar"
    },
    {
        email: "jose@hotmail.com",
        password: "1234",
        username: "jose"
    },

]

export const login =({email, password}) => {
    const user = users.find(
        (user) => user.email ===email && user.password ===password
    );
    if (!user === undefined) throw new Error();
    return user;
}