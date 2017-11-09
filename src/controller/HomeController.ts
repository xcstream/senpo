/// <reference path="../../typings/modules/express/index.d.ts" />
import {Server} from "~express/lib/express";
import * as express from "express";
import BaseController from './BaseController'
export default class extends BaseController{
    constructor(app:Server){
        super(app)
        app.use('/', this.index)
    }
    async index(req: express.Request, res: express.Response){
        res.send('hello1')
    }
    print(){
        console.log(1)
    }
}
