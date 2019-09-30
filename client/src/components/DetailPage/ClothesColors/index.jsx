import React, { Fragment } from 'react';
import { classes } from "../style"

export default function Colors(props) {
    const showColors = () => {
        return (
            <Fragment>
            <h3 className = {classes.h3}>Color</h3>
                <div className = {classes.colorsDiv}>
                    <Fragment>
                        <div onClick = {() => props.activeColor1()} style = {{background: `${props.colors[0]}`}}>
                            <span>{props.colors[0]}</span>
                        </div>
                    </Fragment>
                    <Fragment >
                        <div onClick = {() => props.activeColor2()} style = {{background: `${props.colors[1]}`}}>
                            <span onClick = {props.activeColor}>{props.colors[1]}</span>
                        </div>
                    </Fragment>
                </div>
        </Fragment>
        )
    }
    return (
        <Fragment>
        {showColors()}
        </Fragment>
    )
}