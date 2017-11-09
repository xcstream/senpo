/// <reference path="../../typings/modules/express/index.d.ts" />
import {Server} from "~express/lib/express";
import * as express from "express";
import BaseController from "./BaseController";

export default class extends BaseController{
    constructor(app:Server){
        super(app)
        app.use('/user/login', this.login)
        app.use('/user/create', this.create)
    }

    async login(req: express.Request, res: express.Response){
        res.send({ some: 'json' })
        this.print()
    }

    async create(req: express.Request, res: express.Response){
        res.send({ some: 'json' })
        this.print()
    }

    print(){
        console.log(1)
    }
}
