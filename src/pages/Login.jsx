import React, { useState } from 'react'
import Navigator  from '../core/Navigator';



const Login = ({loginUser}) => {
//definimos un estado inicial de nuestro fomulario
    const Initial_state = {
        email: "",
        password: ""

    }
// definimos variable de estado formUser para generar el Usuario que le pasamos a la funcion login
    const [FormUser, setFormUser] = useState(Initial_state);

//esta funcion controla el poder recuperar cada input del
//  formulario mediante su value y su id y setearlo en formUser

    const handleInput =(ev) => {
        const {id, value} = ev.target;
        setFormUser({...FormUser,[id]:value})


    }
//la función onSubmit almacena en una var email el valor de formUser.email El password en una variable Lllamada password el de valor de formUser.password una vez seteados poder asarselo como un arg. a loginUser, la funcion que nos hemos traido por props
    const onSubmit = (ev) => {
        ev.preventDefault()
        const {email, password} = FormUser;
        loginUser({email,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
{/* a estos input le indicamos un id que corresponde con los campos de mi objeto formUser 
y al cambiar con el onChange ejecuten el handlInput para ir seteando los valores de cada uno*/}
            <input type="text" id='email' value={FormUser.email} onChange={handleInput}/>

            <label htmlFor="password">Password</label>
            <input type="text" id='password' value={FormUser.password} onChange={handleInput}/>
            <button type='submit'> Login </button>
        </form>

    </div>
  )
}

export default Login