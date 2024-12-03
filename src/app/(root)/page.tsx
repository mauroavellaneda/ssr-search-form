import React from "react";
import Navbar from "../components/Navbar";
import "../globals.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex flex-col items-center justify-center px-4 py-16"></main>
    </div>
  );
};
export default Home;
