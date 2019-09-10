import React, { Fragment } from 'react';
import { classes } from "../style"

export default function Colors() {
    return (
        <Fragment>
            <h3 className = {classes.h3}>Color</h3>
                <div className = {classes.colorsDiv}>
                    <div>
                        <span>black</span>
                    </div>
                    <div>
                        <span>brown</span>
                    </div>
                </div>
        </Fragment>
    )
}