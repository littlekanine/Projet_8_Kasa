import React from "react"
import Layout from "../components/layoutFile/Layout.js";
import ErrorAlert from "../components/error/ErrorAlert.js";

function Error () {
    return (
        <div>
          <Layout>
            <ErrorAlert />
          </Layout>
        </div>
    );
}

export default Error