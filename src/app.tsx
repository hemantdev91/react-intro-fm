import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./searchParams.tsx";
import Details from "./Details.tsx";

export interface IPetAttr {
  name: string;
  breed: string;
  animal: string;
  images?: string[];
  location: string;
  id: string;
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ marginLeft: "15px" }}>
        <h1>Adopt me!!!</h1>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
