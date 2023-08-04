import React, { useEffect, useId, useState, useDebounce } from "react";

const LoginTitle = () => {
    return (
        <div style={styles.container}>
            <span style={styles.first}>noStr</span>
            <span style={styles.second}>ings</span>
        </div>
    )
}

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      height: '50px',
      width: '400px',
      fontFamily: 'Arial',
      fontSize: '40px',
      fontWeight: 'bold',
      color: 'white',
      marginTop: '15px',
      position: 'relative',
      left: '18%',
      marginBottom: '20px'
    },
    first: {
        color: 'purple',
        height: '50px'
    },
    second: {
        color: '#e0e0e0',
        height: '50px'
    }
  };

  export default LoginTitle;
