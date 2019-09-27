import React, { Fragment } from 'react';
import { classes } from "../style"

export default function Colors(props) {
    const showColors = () => {
        return (
            <Fragment>
            <h3 className = {classes.h3}>Color</h3>
                <div className = {classes.colorsDiv}>
                    <div style = {{background: `${props.colors[0]}`}}>
                        <span>{props.colors[0]}</span>
                    </div>
                    <div style = {{background: `${props.colors[1]}`}}>
                        <span>{props.colors[1]}</span>
                    </div>
                </div>
        </Fragment>
        )
    }
    console.log(props);
    return (
        <Fragment>
        {showColors()}
        </Fragment>
    )
}