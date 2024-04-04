import React from "react"
import HomeComponent from "../components/home/Home.js";
import Layout from "../components/layout/Layout.js";

function Home () {
  return (
    <div class="full">
      <Layout>
        <HomeComponent />
      </Layout>
    </div>
    );
}

export default Home