import "./login.scss"

import LogoBernalCompleto from '../../svgs/LogoBernalCompleto.svg'

import { useState } from "react";
import Inputs from "../../components/inputs/Inputs";
import userServices from "../../services/userServices";
import Swal from 'sweetalert2'

const Login = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await userServices.adminLogin(values);
      if (userData !== "Credenciales Inválidas") {
        props.handleUser(userData);
        return
      }

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tus credenciales son inválidas',
      })

    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal, intentalo más tarde.',
      })
    }
  };

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Escriba su Email",
      errorMessage: "Debe ingresar un email válido",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Escriba su constraseña",
      errorMessage:
        "La contraseña debe tener entre 8-20 caracterels e incluir 1 letra, 1 número y 1 caracter especial",
      label: "Contraseña",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8-8}$`,
      required: true,
    },
  ];

  return (
    <div className="login">
      <div className="loginContainer">
        <img src={LogoBernalCompleto} alt="Logo Bernal" className="logoLogin" />
        <form className="formLogin" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <Inputs
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            ></Inputs>
          ))}
          <button className="loginBtn">Ingresar</button>
        </form>
      </div>
    </div >
  )
}

export default Login