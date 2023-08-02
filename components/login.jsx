import React, { useEffect, useId, useState } from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from 'react-router-dom'



const Login = () => {
    const nav = useNavigate()
    
    const navigateToFeed = () => {
        nav("/feed")
    }
    return (
        <div style={styles.container}>
            <p>Welcome to noStrings</p>
            <input></input>
            <input></input>
            <button onClick={navigateToFeed}>Login</button>
            <button>Sign Up</button>

        
            {/* <input>username</input>
            <input>password</input>
            <button>Login</button>
            <button>Login</button> */}
        </div>
    )
}
const styles = {
    container: {
      border: '1px solid black',
      borderRadius: '10px',
      height: '300px',
      width: '300px',
      flex: 1,
      marginBottom: '20px',
      padding: '15px',
      fontFamily: 'Arial',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      left:'50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
      // backgroundColor: 'darkgrey'
      
    },
  };

  export default Login;

