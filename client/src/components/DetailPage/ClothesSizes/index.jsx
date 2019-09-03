import React from 'react';
import { classes } from "../style"

export default function Sizes() {
        return (
            <div className = {classes.sizeStyles}>
                    <h3 className = {classes.h3}>Size</h3>
                    <ul>
                        <li>6</li>
                        <li>8</li>
                        <li>10</li>
                        <li>12</li>
                        <li>14</li>
                        <li>16</li>
                    </ul>
                </div>
        )
}