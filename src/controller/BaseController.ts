/// <reference path="../../typings/modules/express/index.d.ts" />
import {Server} from "~express/lib/express";
import * as express from "express";
import db from '../service/db'

var db_instance = null
export default class {
    [x: string]: any;
    constructor(app:Server){
        if(!db_instance) {
            db_instance = new db()
        }
        return db_instance
    }
}
