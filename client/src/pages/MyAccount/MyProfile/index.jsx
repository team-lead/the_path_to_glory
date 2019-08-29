import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/Header";
import MyProfile from "../../../components/MyAccount/MyProfile"


const MyAccount = () => {
    return (
        <>
            <Helmet>
                <title>My Profile</title>
            </Helmet>
            <div >
            <Header />
            <MyProfile />
            </div>
        </>
    );
};

export default MyAccount;
