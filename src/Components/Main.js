import React from "react";
import { HiMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs"

export default function Main() {
    return (
        <div className="main">
            <div className="info">
                <h1>Kim Min-hee</h1>
                <h2>Actress</h2>
                <h3>MinheeKim.website</h3>
                <div className="btn--group">
                    <a href="mailto:xgeng0309@gmail.com">
                        <button className="btn--email">
                            <HiMail />
                            <span> Email</span>
                        </button>
                    </a>
                    <a href="https://sg.linkedin.com/in/minhee-kim-9a4b8077/en?trk=people-guest_people_search-card">
                        <button className="btn--linkedin">
                            <BsLinkedin />
                            <span> Linkedin</span>
                        </button>
                    </a>
                </div> 
            </div>
            <div className="about">
                <h1>About</h1>
                <p>
                    Kim Min-hee began modeling when she was in middle school, and soon appeared as a cover girl in teen magazines.
                    In 1999, she was cast in the campus drama School 2 as a rebellious high school girl, which launched her to stardom.
                    She became a popular young star at barely 20 years old, appearing in TV dramas and movies.
                </p>
            </div>
            <div className="interests">
                <h1>Interests</h1>
                <p>
                    Fashionista, Drawing, Painting, Photography, Interior Design, Piano.
                </p>
            </div>
        </div>
    )
}

