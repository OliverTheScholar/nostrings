import React, { useEffect, useId, useState } from "react";
import{ useDebounce } from "use-debounce";
import { createRoot } from "react-dom/client";
import Note from "../components/note.jsx"
import PostCreator from "../components/postCreator.jsx"
import PageHeader from "../components/pageHeader.jsx"

import {
  relayInit,
  generatePrivateKey,
  getPublicKey,
  getEventHash,
  getSignature, 
  SimplePool
} from "nostr-tools";
import 'websocket-polyfill'


const addEventIntoList = (events, event) => {
    // event.preventDefault()
    return events.concat(event);
}

const Feed = (props) => {
    
   const [ eventsImm, setEvents ] = useState([]);
   // const [ eventsLag ] = useDebounce[eventsImm, 1500]

   
    console.log('doing nostr stuff')

    const relay = relayInit('wss://relay.damus.io')
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
            authors: [props.pubKey] 
            // authors: [props.username] 
          },
      ])
      sub.on('event', event => {
        // event.preventDefault()
        console.log(event)
        setEvents((eventsImm) => addEventIntoList(eventsImm, event))
      })

      sub.on('eose', () => {
        sub.unsub()
      })

      // let events = relay.list([{kinds: [0, 1]}])

      // console.log("THE EVENTS ARE" + events)

      const postsToRender = eventsImm.slice(0, 10);
      // if (postsToRender.length === 0) {
      //   return (<p>post something!</p>)
      // }

      // console.log(events)

      const styles2 = {
        container: {
          border: '1px black solid',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          alignSelf: 'center',
          position: 'relative',
          backgroundColor: 'black'
        },
        para: {
          color: 'white',
        }
      };
      
    return (
        <div style={styles2.container}>
          {/* <p style={styles2.para}>{JSON.stringify(props.userInfo)}</p> */}
           <PageHeader></PageHeader>
           <PostCreator userInfo={props.userInfo}></PostCreator>
          {postsToRender.map((post) => {
            return <Note displayName={props.displayName} postObj={post} pubkey={post.pubkey} content={post.content}></Note>
        })}
        </div>
    )
}

// const root = createRoot(document.querySelector("#root"));
// root.render(<App />);

export default Feed;