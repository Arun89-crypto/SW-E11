import cors from 'cors';
import express from 'express';
import config from '../config';
import routes from '../api';

export default ({ app }: { app: express.Application }): void => {

    app.use(cors());

    app.use(express.json());

    app.use(config.api.prefix, routes());

}; 
