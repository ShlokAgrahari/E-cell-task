import React, { useState } from "react";
import { Link,Routes,Route } from "react-router-dom";
import Profile from "./Profile";
import FirstPage from "./FirstPage";
const App = () => {
  
  return (
    
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    
  );
};

export default App;
