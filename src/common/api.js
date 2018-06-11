/**
 * @file    统一配置需要的请求地址
 * @authors huaxia@huar.love
 *
 * @version 1.0.0
 * @date    2018-6-8 13:44:09
 */

// url不以/开头则表明当前是绝对路径
const url = {
    getCategorys: {
        get: '/content/categorys'
    },
    getArticles: {
        get: '/content/articles'
    }
};

export default {
    getPageUrl: (type = 0, method = 'post') => {
        return (url[type] || {})[method];
    }
};
