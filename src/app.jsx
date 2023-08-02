import React, { useEffect, useId, useState, useDebounce } from "react";
import { createRoot } from "react-dom/client";
import {
    relayInit,
    generatePrivateKey,
    getPublicKey,
    getEventHash,
    getSignature, 
    SimplePool
  } from "nostr-tools";
  import 'websocket-polyfill'

import Note from "../components/note.jsx"
import Login from "../components/login.jsx"

const addEventIntoList = (events, event) => {
    return events.concat(event);
}

const Feed = () => {
    
   const [ eventsImm, setEvents ] = useState([]);

   
    console.log('doing nostr stuff')

    const relay = relayInit('wss://nostr.wine')
    relay.on('connect', () => {
    console.log(`connected to ${relay.url}`)
    })
    relay.on('error', () => {
    console.log(`failed to connect to ${relay.url}`)
    })

    relay.connect()

    let sub = relay.sub([
        {
            kinds: [1],
            limit: 10,
            authors: ['82341f882b6eabcd2ba7f1ef90aad961cf074af15b9ef44a09f9d2a8fbfbe6a2']
          },
      ])
      sub.on('event', event => {
        setEvents((eventsImm) => addEventIntoList(eventsImm, event))
      })

      sub.on('eose', () => {
        sub.unsub()
      })

      const postsToRender = eventsImm.slice(0, 10);
      console.log(postsToRender)

      const styles2 = {
        container: {
          border: '1px black solid',
          width: '75%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          alignSelf: 'center',
          position: 'relative',
          left: '12%'
          // backgroundColor: 'black'
        },
      };

    return (
        
        <div style={styles2.container}>{postsToRender.map((post) => {
            return <Note pubkey={post.pubkey} content={post.content}></Note>
        })}
        </div>

      
    )
}

// const root = createRoot(document.querySelector("#root"));
// root.render(<App />);

export default Feed;