import React from "react"
import Banner from "../components/Banner/Banner.js";
import FooterPages from "../components/Footer/FooterPages.js";
import AboutCollapse from "../components/Body/Collapse/AboutCollapse.js";

function About () {
    return (
        <div>
            <Banner />
            <AboutCollapse />
            <FooterPages />
        </div>
    );
}

export default About 