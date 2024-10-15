import {useEffect} from "react";
import LoginRegister from "../components/LoginRegister/LoginRegister";
function Login() {

  useEffect(() =>{
    document.title='Ingresa o crea una cuenta'
  }, []); 

  return (
    <div className="bg-login">
      <LoginRegister></LoginRegister>
    </div>
  );
}

export default Login; 