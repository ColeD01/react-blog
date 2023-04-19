import { useState } from "react";

export default function Header() {
    return (
        <div className="header">
            <nav className="nav">
                <h2 className='sBootstrap'>Start Bootstrap</h2>
                <a>Home</a>
                <a>About</a>
                <a>Sample Post</a>
                <a>Contact</a>
            </nav>
            <div className="titleCard">
            <h1>Clean Blog</h1>
            <h2>A Blog Theme by Start Bootstrap</h2>
            </div>
        </div>
    )
}