import React, {Component} from 'react';
import { classes } from "./style";

export default class FilterPath extends Component {
    render() {
        return(
            <div className={classes.filterPath}>
                <a href='#' className={classes.filterPathText}>Home</a>
                <span className={classes.filterPathText}> &rsaquo; </span>
                <a href='#' className={classes.filterPathText}>Woman</a>
                <span className={classes.filterPathText}> &rsaquo; </span>
                <a href='#' className={classes.filterPathText}>Jakets</a>
            </div>
        )
    }
}