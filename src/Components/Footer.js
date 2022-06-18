import React from 'react';
import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from "react-icons/fa"

export default function Footer() {
     return (
        <div classsName="footer">
            <div className="icons">
                <div><FaTwitterSquare  /></div>
                <div><FaFacebookSquare /></div>
                <div><FaInstagramSquare /></div>
                <div><FaGithubSquare /></div>
            </div>
        </div>
     )
}


