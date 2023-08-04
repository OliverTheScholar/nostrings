import React, { useEffect, useId, useState, useDebounce } from "react";
import img from './puffin.jpg' 

const UserHeader = (props) => {
    
    return (
        <div style={styles.container}>
            <img style={styles.profilePic}src={img}></img>
            <p style={styles.username}>{props.username}</p>
        </div>
    )
}

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      height: '30px',
      width: 'auto',
      flex: 1,
      marginBottom: '20px',
      // padding: '15px',
      fontFamily: 'Arial',
      position: 'relative',
      left:'0',
      top: '0',
      color: 'white',
    
      // backgroundColor: 'darkgrey'
      
    },
    username: {
        fontWeight: 'bold'
    },
    profilePic: {
        borderRadius: '50%',
        height: '40px',
        marginRight: '20px'

    }
  };

  export default UserHeader;