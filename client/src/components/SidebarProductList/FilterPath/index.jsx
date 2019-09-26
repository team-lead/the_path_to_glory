import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { classes } from "./style";

export default class FilterPath extends Component {
    render() {
        return(
            <div className={classes.filterPath}>
                <Link to={'/'} className={classes.filterPathText}>Home</Link>
                <span className={classes.filterPathText}> &rsaquo; </span>
                <Link href='#' className={classes.filterPathText}>Woman</Link>
                <span className={classes.filterPathText}> &rsaquo; </span>
                <Link href='#' className={classes.filterPathText}>Jakets</Link>
            </div>
        )
    }
}