require('dotenv').config();

export default {
    port: parseInt(process.env.PORT) || 4000,
    enviroment: process.env.ENVIROMENT || 'prod',
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    api: {
        prefix: '/api',
    },
} 