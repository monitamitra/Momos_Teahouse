import React, {useState} from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";
import Footer from "./Footer";
import CartHeader from "./CartHeader";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {login} = useUserAuth();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
        await login(email, password);
    } catch(error) {
        setError(error.message);
    }
  } 

    return (
  <div>
    <CartHeader />
    <div className={styles.loginWrapper}>
        <h1>Please Log In</h1>
        {error && alert(error.message)}
        <form> 
            <label>
                <p>Email</p>
                <input type="email" onChange={(e) => {
                   setEmail(e.target.value);
                }}></input>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={(e) => {
                   setPassword(e.target.value);
                }}></input>
            </label>
            <div>
                <button onClick={(e) => {
                  handleSubmit(e);
                  navigate("/orderonline")
                }}>Log In</button>
            </div>
            <div>
              Don't have an account? Sign up. 
              <button onClick={() => {
                navigate("/register");
              }}>Create an Account</button>
            </div>
        </form>
    </div>
    <Footer />
  </div>
    )
}

