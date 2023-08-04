import React, { useEffect, useId, useState } from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from 'react-router-dom'
import LoginTitle from "../components/loginTitle.jsx"
import {
    relayInit,
    generatePrivateKey,
    getPublicKey,
    getEventHash,
    getSignature, 
    SimplePool
  } from "nostr-tools";
  import 'websocket-polyfill'



const Signup = (props) => {
    
    // let username = props.username;
    let setUser = props.setUser;

    const [buttonState, setButtonState] = useState('Generate private key');
    const [skState, setSecretState] = useState();
    const [pkState, setPublicState] = useState();

    const [input, setInput] = useState();
    const nav = useNavigate()

    const handleButtonClick = () => {
        if (buttonState === 'Generate private key') {
            // generate private key and add to input field
            const newSk = generatePrivateKey();
            setSecretState(newSk);
            setButtonState('Generate public key')
        
        }
        else if (buttonState === 'Generate public key') {
            // generate public key and add to input field
            const newPk = getPublicKey(skState);
            setPublicState(newPk);
            setButtonState('Enter the protocol')
      
        }
        else if (buttonState === 'Enter the protocol') {
            console.log('hi')

            props.handleLogin(skState, pkState, input)

            navigateToFeed()
            // add the value of all the input fields to state 
            // navigate to feed

        }
    }
    
    const navigateToFeed = () => {
        setUser(input)
        nav("/feed")
    }

    const handleInput = (e) => {
        setInput(e.target.value);
        console.log(input)
    }
    // setButtonState('Generate private key');
    return (
        
        <div style={styles.container}>
        <LoginTitle></LoginTitle>
            <input placeholder={' private key'}style={styles.inputBox}id='userinput' onChange={handleInput} value={skState}></input>
            <input placeholder={' public key'}style={styles.inputBox} value={pkState}></input>
            <input placeholder={' add a nickname'}style={styles.inputBox} onChange={handleInput}></input>
            <button style={styles.button} onClick={handleButtonClick}>{buttonState}</button>
        
        </div>
)
}
const styles = {
    container: {
      border: '1px solid black',
      borderRadius: '10px',
      height: '350px',
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

  export default Signup;

