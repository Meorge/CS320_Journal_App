import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import {getElementById} from "domutils";

export class ReadEntries extends Component {
    render() {
        return (
            <div>
                <h2> Wouldn't you like to know weather boi</h2>
                <button type="button" className="btn btn-primary" onClick={alert("You do not want to click that believe me")}>you won't click this</button>
                <button onClick={prompt("What is the seceret password", "")} type={"button"} className={"btn"}/>
                <p>some bs</p>
            </div>
        );
    }
}