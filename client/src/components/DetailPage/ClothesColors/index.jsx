import React, { Fragment } from 'react';
import { classes } from "../style"

export default function Colors(props) {
    const showColors = () => {
        return (
            <Fragment>
            <h3 className = {`${classes.h3} ${classes.filterType}`}>Color</h3>
                <div className = {classes.colorsDiv}>
                    <Fragment>
                        <div onClick = {(event) => {props.activeColor1();console.log(event)}} style = {{background: `${props.colors[0]}`}}>
                            <span>{props.colors[0]}</span>
                        </div>
                    </Fragment>
                    <Fragment >
                        <div onClick = {(event) => {props.activeColor2();console.log(event)}} style = {{background: `${props.colors[1]}`}}>
                            <span>{props.colors[1]}</span>
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