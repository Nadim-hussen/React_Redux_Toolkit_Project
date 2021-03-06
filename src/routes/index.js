import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import EditPage from '../components/EditPage'
import AddPage from '../components/AddPage';
import Navbar from '../layouts/Navbar';
import FetchesData from '../components/FetchesData';
export default function index() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit_page" element={<EditPage />} />
          <Route path="add_page" element={<AddPage />} />
          <Route path="/fetch_page" element={<FetchesData />} />
        </Routes>
      </main>
    </BrowserRouter>
    </div>
  )
}
