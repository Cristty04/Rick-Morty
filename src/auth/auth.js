//definir un array de usuarios 
const user =[
    {
        email: "mairam@hotmail.com",
        password: "111111",
        username: "mairam"
    }, 

    {
        email: "cris@hotmail.com",
        password: "222222",
        username: "cris"
    }, 

]

export const login =({email, password}) => {
    const user = user.find(
        (user) => user.email ===email && user.password ===password
    );
    if (!user === undefined) throw new Error();
    return user;
}