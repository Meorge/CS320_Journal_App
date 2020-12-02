import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import {getElementById} from "domutils";

export class ListEntries extends Component {
    constructor() {
        super(props);
        let userRecord = Meteor.user();
        console.log(userRecord); //Test. This should return null because there is no logged in user at this time
    }
    render() {
        return (
            <div>
                <h2> Your Entries </h2>
            </div>
        );
    }
}