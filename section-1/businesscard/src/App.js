import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import React from "react";

export default function App() {
    return (
        <div className="card">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}