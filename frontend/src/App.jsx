import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import SignUp from "./component/SignUp";
import SettingGeneral from "./component/SettingGeneral";
import SettingOther from "./component/SettingOther";
import Profile1 from "./component/Profile1";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/setting-general" element={<SettingGeneral />} />
        <Route path="/setting-other" element={<SettingOther />} />
        <Route path="/profile1" element={<Profile1 />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
