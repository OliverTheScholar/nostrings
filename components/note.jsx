import React, { useEffect, useId, useState } from "react";

import UserHeader from "./userHeader.jsx";

const Note = (props) => {

    const [author, setAuthor] = useState();

    const dateObj = new Date(props.postObj.created_at * 1000);
    let formattedDate = dateObj.toLocaleString().split(',');

    // console.log('the pubkey is' + props.postObj.pubkey)

    fetch('/findUserByPk', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify({"publicKey": props.postObj.pubkey}),
      })
      .then((response) => response.json())
      .then((user) => {
        console.log('the user is')
        console.log(user);
        setAuthor('doNoCode')
        console.log(author);
      })

    
    return (
        <div style={styles.container}>
            <UserHeader displayName={props.displayName} username={author}>
            </UserHeader>
            {/* <p>PubKey: {props.pubkey}</p> */}
            <p style={styles.paragraph}>Content: {props.content}</p>
            <p style={styles.date}> {formattedDate}</p>
        </div>
    )
}
const styles = {
    container: {
      border: '1px solid black',
      borderRadius: '10px',
      height: 'auto',
      width: '600px',
      flex: 1,
      marginBottom: '20px',
      padding: '15px',
      fontFamily: 'Arial',
      alignItems: 'left',
      justifyContent: 'center',
      backgroundColor: '#202124',
      color: '#e0e0e0',
      
    },
    paragraph: {
        overflow: 'wrap',
        position: 'relative',
        left: '10%',
        top: '10%'

    },
    date: {
        position: 'relative',
        top: '15px',
        left: '80%',
        fontSize: '13px'
    }
  };

  export default Note;

