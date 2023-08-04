import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useId, useState, useDebounce } from "react";
import { createRoot } from "react-dom/client";
import Feed from "./app.jsx";
import Login from "../components/login.jsx";
import Signup from "../components/signup.jsx";
import "./styles.css"


const App = () => {
    const [username, setUsername] = useState();
    const [userInfo, setUserInfo] = useState({
      sk: "defaultsk",
      pk: "defaultpk",
      nickname: "defaultNn"
    });

    const modiyUserInfoState = (input) => {
      setUserInfo(input);
    }


    const handleSignup = (sk, pk, nickname) => {
      setUserInfo({
        sk: sk,
        pk: pk,
        nickname: nickname
      })
      fetch('/addUser', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify({"sk": sk, "pk": pk, "nickname": nickname}),
      })
      .then((res) => console.log(res))
      .catch(err => console.log(err))
    }


    const handleLogin = (nickname, stateUpdater) => {
      fetch('/findUser', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({"nickname": nickname}),
        })
        .then((response) => response.json())
        .then((response) => {
          console.log('the user is')
          console.log(response);
          setUserInfo({
            sk: response.privateKey,
            pk: response.publicKey,
            nickname: response.nickname
          });
          console.log(userInfo);
        })
      }

    const setUser = (name) => {
      setUsername(name);
    }
  
    return (
      <BrowserRouter>
        <Routes>
            
            <Route path="/feed" element={<Feed userInfo={userInfo} pubKey={userInfo.pk} displayName={userInfo.nickname} username={'ac9c357538056699f61db832fdfdc5ff25c1c7615b088cc687073c5dcaf0c4ec'}/>}></Route>
            <Route  path="/signup" element={<Signup handleLogin={handleSignup} setUser={setUser}/>}></Route>
            <Route exact path="/" element={<Login updateState={modiyUserInfoState} handleLogin={handleLogin} setUser={setUser}/>}></Route>
             {/* <Route exact path="/" element={<Feed username={'ac9c357538056699f61db832fdfdc5ff25c1c7615b088cc687073c5dcaf0c4ec'}/>}></Route>
              <Route exact path="/" element={<Feed username={username}/>}></Route>
              <Route exact path="/" element={<Login setUser={setUser}/>}></Route>
             <Route index element={<Feed />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
