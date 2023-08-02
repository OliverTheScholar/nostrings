import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useId, useState, useDebounce } from "react";
import { createRoot } from "react-dom/client";
import Feed from "./app.jsx";
import Login from "../components/login.jsx"


const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/feed" element={<Feed />}></Route>
            <Route exact path="/" element={<Login/>}>
            {/* <Route index element={<Feed />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
