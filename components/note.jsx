import React, { useEffect, useId, useState } from "react";
const Note = (props) => {
    return (
        <div style={styles.container}>
            <p>User: {props.pubkey}</p>
            <p>Content: {props.content}</p>
        </div>
    )
}
const styles = {
    container: {
      border: '1px solid black',
      borderRadius: '10px',
      height: '100px',
      width: '600px',
      flex: 1,
      marginBottom: '20px',
      padding: '15px',
      fontFamily: 'Arial',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'darkgrey'
      
    },
  };

  export default Note;

