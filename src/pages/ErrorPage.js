import React from "react"
import Layout from "../components/layout/Layout.js";
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