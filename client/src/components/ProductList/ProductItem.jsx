import React from 'react';
import {classes} from './style'

const ProductItem =()=>{
    const {
        productItem,
        itemImg,
        goodsTitle,
        goodsPrise
    } = classes;

    return(
        <>
        <li className = {productItem}>
            <img src="http://bm.img.com.ua/nxs/img/prikol/images/large/0/0/307600.jpg" alt="" className={itemImg}/>
            <p className={goodsTitle}>black jacet</p>
            <p className={goodsPrise}>420 $</p>
        </li>
        <li className = {productItem}>
            <img src="http://bm.img.com.ua/nxs/img/prikol/images/large/0/0/307600.jpg" alt="" className={itemImg}/>
            <p className={goodsTitle}>black jacet</p>
            <p className={goodsPrise}>420 $</p>
        </li>
        <li className = {productItem}>
            <img src="http://bm.img.com.ua/nxs/img/prikol/images/large/0/0/307600.jpg" alt="" className={itemImg}/>
            <p className={goodsTitle}>black jacet</p>
            <p className={goodsPrise}>420 $</p>
        </li>
        <li className = {productItem}>
            <img src="http://bm.img.com.ua/nxs/img/prikol/images/large/0/0/307600.jpg" alt="" className={itemImg}/>
            <p className={goodsTitle}>black jacet</p>
            <p className={goodsPrise}>420 $</p>
        </li>
        <li className = {productItem}>
            <img src="http://bm.img.com.ua/nxs/img/prikol/images/large/0/0/307600.jpg" alt="" className={itemImg}/>
            <p className={goodsTitle}>black jacet</p>
            <p className={goodsPrise}>420 $</p>
        </li>
        <li className = {productItem}>
            <img src="http://bm.img.com.ua/nxs/img/prikol/images/large/0/0/307600.jpg" alt="" className={itemImg}/>
            <p className={goodsTitle}>black jacet</p>
            <p className={goodsPrise}>420 $</p>
        </li>
        </>
    )
}
export default ProductItem;