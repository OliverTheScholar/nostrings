import React, { useEffect, useId, useState, useDebounce } from "react";

const PageHeader = () => {
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
      height: '100px',
      width: '400px',
      flex: 1,
      marginBottom: '20px',
      // padding: '15px',
      fontFamily: 'Arial',
      fontSize: '40px',
      fontWeight: 'bold',
      position: 'fixed',
      left:'2%',
      top: '0',
      color: 'white',
      marginTop: '15px'
    
    },
    first: {
        color: 'purple'
    },
    second: {
        color: '#e0e0e0'
    }
  };

  export default PageHeader;
