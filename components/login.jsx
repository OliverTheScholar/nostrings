import React, { useEffect, useId, useState } from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from 'react-router-dom'
import LoginTitle from "../components/loginTitle.jsx"




const Login = (props) => {
    
    // let username = props.username;
    let setUser = props.setUser;


    const [input, setInput] = useState();
    const nav = useNavigate()

    const handleButtonClick = () => {
        props.handleLogin(input, props.updateState);
        navigateToFeed();
    }
    
    const navigateToFeed = () => {
        setUser(input)
        nav("/feed")
    }
    const navigateToSignup = () => {
        nav("/signup")
    }

    const handleInput = (e) => {
        setInput(e.target.value);
        console.log(input)
    }
    return (
        
        
        <div style={styles.container}>
        <LoginTitle></LoginTitle>
            <input placeholder={' nickname'}style={styles.inputBox}id='userinput' onChange={handleInput}></input>
            <input placeholder={' private key'}style={styles.inputBox}></input>
            <button style={styles.button} onClick={handleButtonClick}>Login</button>
            <button style={styles.signUpButton} onClick={navigateToSignup}>create account</button>
        
        </div>
    )
}
const styles = {
    container: {
      border: '1px solid black',
      borderRadius: '10px',
      height: '300px',
      width: '600px',
      flex: 1,
      marginBottom: '20px',
      padding: '15px',
      fontFamily: 'Arial',
      alignItems: 'center',
      justifyContent: 'top',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      left:'50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#202124',
      // backgroundColor: 'darkgrey'
      
    },
    inputBox: {
        position: 'relative',
        top: '0',
        width: '350px',
        height: '40px',
        marginBottom: '15px',
        backgroundColor: '#202124',
        border: '1px solid #3c4043',
        color: 'white',
        fontFamily: 'arial',
        fontSize: '18px',
        outline: 'none'

    },
    button: {
        marginTop: '10px',
        height: '35px',
        width: '350px',
        position: 'relative',

        borderRadius: '20px',
        backgroundColor: 'purple',
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '16px'
  
      },
      signUpButton: {
        backgroundColor: 'none',
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '16px',
        fontStyle: 'underline',
        position: 'absolute',
        right: '3%',
        bottom: '3%',
        height: '35px',
        width: '150px',
        backgroundColor: '#202124',
        outline: 'none',
        border: 'none'
      }
  };

  export default Login;

