import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'
import {classes} from './style';
import Login from '../../User/Login';

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
                <Link to='/myaccount/myprofile' className={categoryItem} >
                    <h3 className={categoryTitle}>My profile</h3>
                    <p className={categoryDescription}>Show and update your personal information</p>
                </Link>
                <Link to='/myaccount/history' className={categoryItem} >
                    <i className={`fas fa-shopping-basket ${icon}`}></i>
                    <h3 className={categoryTitle}>Purchase History</h3>
                    <p className={categoryDescription}>Check the status of your purchase history and returns</p>
                </Link>
                <Link to='/myaccount/wishlist' className={categoryItem} >
                    <i className={`fas fa-heart ${icon}`}></i>
                    <h3 className={categoryTitle}>My wishlist</h3>
                    <p className={categoryDescription}>Manage your wishlist</p>
                </Link>
                <Link to='/myaccount/addressbook' className={categoryItem} >
                    <i className={`far fa-file-alt ${icon}`}></i>
                    <h3 className={categoryTitle}>Address book</h3>
                    <p className={categoryDescription}>Save and manage your addresses</p>
                </Link>
            </main>
        </Fragment>
    )
};

export default WelcomePage;