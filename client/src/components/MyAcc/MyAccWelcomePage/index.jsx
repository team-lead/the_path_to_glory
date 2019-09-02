import React,{Fragment} from 'react';

import {classes} from './style';


const WelcomePage =()=>{
    const name =  'SUZANNE EATON'// после удалить
    const{
        title,
        categoryList,
        categoryItem,
        categoryTitle,
        categoryDescription,
        icon,
    }=classes

    return(
        <Fragment>
            <h1 className={title}>Welkome, {name}</h1>
            <main className={categoryList}>
                <a href='/myaccount/profile' className={categoryItem} >
                    <h3 className={categoryTitle}>My profile</h3>
                    <p className={categoryDescription}>Show and update your personal information</p>
                </a>
                <a href='/myaccount/history' className={categoryItem} >
                    <i className={`fas fa-shopping-basket ${icon}`}></i>
                    <h3 className={categoryTitle}>Purchase History</h3>
                    <p className={categoryDescription}>Check the status of your purchase history and returns</p>
                </a>
                <a href='/myaccount/wishlist' className={categoryItem} >
                    <i class={`fas fa-heart ${icon}`}></i>
                    <h3 className={categoryTitle}>My wishlist</h3>
                    <p className={categoryDescription}>Manage your wishlist</p>
                </a>
                <a href='/myaccount/addressbook' className={categoryItem} >
                    <i class={`far fa-file-alt ${icon}`}></i>
                    <h3 className={categoryTitle}>Address book</h3>
                    <p className={categoryDescription}>Save and manage your addresses</p>
                </a>
            </main>
        </Fragment>
    )
};

export default WelcomePage;