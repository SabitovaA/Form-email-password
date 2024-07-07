import { useState } from "react";
import "./App.css";
import CheckoutForm from "./components/CheckoutForm";
import google from "./icons/google.png";

function App() {
  const [logIn,setLogin] = useState(false)
   return (
    <main className="container">
      <div className="container__box">
      {
        logIn && <p onClick={() => setLogin(false)} className="close">X</p>
      }
        <img className="img" src={google} alt="" />
        <h1>Welcome back</h1>
        <p className="please">Please enter your details</p>
        <CheckoutForm logIn={logIn} setLogin={setLogin}/>
      </div>
    </main>
  );
}

export default App;
