import request from "../utils/request";

// TODO: 完善接口
import setting from '../../../database/setting.json';
import config from '../../../database/config.json';

const isDev = import.meta.env.DEV;

function handleEnv(json: any): Promise<JSON>{
    return new Promise((resolve, reject) => {
        resolve(json);
    })
}

function getHeader(){
    return request.get('/api/header');
}

function getNav(){
    if (isDev) return handleEnv(setting.nav)
    return request.get('/api/nav');
}

function getMenu(){
    if (isDev) return handleEnv(setting.menu)
    return request.get('/api/menu');
}

function getConfigs(){
    if (isDev) return handleEnv(config)
    return request.get('/api/config');
}


export {
    getHeader,
    getNav,
    getMenu,
    getConfigs,
}
