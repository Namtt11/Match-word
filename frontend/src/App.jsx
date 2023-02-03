import React from 'react';
import Register from "./component/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./match-word/pages/home/Home";
import SignUp from "./match-word/pages/home/SignUp";
import SettingGeneral from "./match-word/pages/setting/SettingGeneral";
import SettingOther from "./match-word/pages/setting/SettingOther";
import Profile1 from "./match-word/pages/profile/Profile1";


function App() {
  return (
    <>
      <Home />
    </>
    //<BrowserRouter>
    //<Routes>
    //    <Route path="/" element={<Home />} />
    //    <Route path="/sign-up" element={<SignUp />} />
    //    <Route path="/setting-general" element={<SettingGeneral />} />
    //    <Route path="/setting-other" element={<SettingOther />} />
    //    <Route path="/profile1" element={<Profile1 />} />
    //</Routes>
    //</BrowserRouter>
  );
}

export default App;
