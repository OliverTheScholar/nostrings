import React, { useEffect, useId, useState, useDebounce } from "react";
import {
    relayInit,
    generatePrivateKey,
    getPublicKey,
    getEventHash,
    getSignature, 
    SimplePool
  } from "nostr-tools";
  import 'websocket-polyfill'
  // import User from "../models/userModel"

  const PostCreator = (props) => {
    const [input, setInput] = useState();
  
      const handleInput = (e) => {
          setInput(e.target.value);
          console.log(input)
      }

    const postPost = () => {

      const relay = relayInit('wss://relay.damus.io')
      relay.on('connect', () => {
      console.log(`connected to ${relay.url}`)
      })
      relay.on('error', () => {
      console.log(`failed to connect to ${relay.url}`)
      })
  
      relay.connect()

      // publish a new event while simultaneously monitoring the relay for it
      let sk = props.userInfo.sk

      // let sk = 'd757224a70d0c8676aab69d47dbabede96bba5d89424f6574e8bdf8cde4a3841';
      // let sk = generatePrivateKey()
      console.log('private key is' + sk)
      let pk = props.userInfo.pk
      // let pk = getPublicKey(sk)
      // let pk = 'ac9c357538056699f61db832fdfdc5ff25c1c7615b088cc687073c5dcaf0c4ec';
      console.log('public key is' + pk)
    
      let sub = relay.sub([
        {
          kinds: [1],
          authors: [pk]
        }
      ])
      sub.on('event', event => {
        console.log('got event:', event)
      })
      let newEvent = {
        kind: 1,
        pubkey: pk,
        created_at: Math.floor(Date.now() / 1000),
        tags: [],
        content: input
      }
      newEvent.id = getEventHash(newEvent)
      newEvent.sig = getSignature(newEvent, sk)
      
      relay.publish(newEvent);

      // let events = relay.list([{kinds: [0, 1]}])
      // let event = relay.get({
      // ids: ['44e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245']
    }
    return (
        <div style={styles.container}>
            <input style={styles.inputField} onChange={handleInput}></input>
            <button style={styles.button} onClick={postPost}>Post</button>
        </div>
    )
  }

  const styles = {
    container: {
      border: '1px solid black',
      borderRadius: '10px',
      minHeight: '200px',     
      height: 'auto',
      width: '600px',
      flex: 1,
      marginBottom: '20px',
      padding: '15px',
      fontFamily: 'Arial',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#202124',
      color: '#e0e0e0',
      marginTop: '20px'
      
    },
    inputField: {
      border: '1px solid black',
      borderRadius: '10px',
      minHeight: '100px',     
      height: 'auto',
      width: '600px',
      backgroundColor: '#202124',
      color: '#e0e0e0',
      fontFamily: 'Arial',
      fontSize: '20px',
      position: 'relative',
      overflow: 'wrap'

    },

    button: {
      marginTop: '10px',
      height: '35px',
      width: '70px',
      position: 'relative',
      left: '85%',
      right: '0',
      borderRadius: '20px',
      backgroundColor: 'purple',
      color: 'white',
      fontFamily: 'Arial',
      fontSize: '16px'

    },
  };

  export default PostCreator