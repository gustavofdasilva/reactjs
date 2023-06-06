import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
    const lessons = data.map(exp => {
        return (
            <Card
                img={exp.coverImg}
                rating={exp.stats.rating}
                reviewCount={exp.stats.reviewCount}
                country="BRA"
                title={exp.title}
                price={exp.price}/>
        )
    })

    return (
        <div>
            <Navbar/>
            <Hero/>
                <div style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    gap: 20,
                    overflowX: "auto",
                }}>
                {lessons}
                </div>
        </div>
    )
}