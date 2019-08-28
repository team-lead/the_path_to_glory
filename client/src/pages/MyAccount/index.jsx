import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import MyProfile from "../../components/MyAccount/MyProfile"


const MyAccount = () => {
    return (
        <>
            <Helmet>
                <title>Main Page</title>
            </Helmet>
            <div style={{ backgroundColor: "#111" }}>
            <Header />
            <MyProfile />
            </div>
        </>
    );
};

export default MyAccount;
