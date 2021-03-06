
module.exports = {
    // 开发服务器设置
    devServer: {
        // 自动打开浏览器
        open: true,
        // 设置npm run serve启动后的端口号
        port: 8080,
        // eslint  不要遮罩，错误会在console.log打印
        overlay: false,
        // vue项目代理请求
        proxy: {
            // 规则
            // axios中相对地址开头的字符串  匹配请求uri中的前几位
            "/api": {
                // 把相对地址中的域名映射到目标地址中
                // localhost：3000  =》  https://api.iynn.cn/film/api/v1/
                target: "https://www.fastmock.site/mock/ea048cdd7cc588a2d5249f00efe41969/v1",
                // target: "https://api.iynn.cn/film/api/v1",
                //  this.$http.get("http://127.0.0.1:80/getAirPortInfo.php",{page:1,cateid:78})
                // 修改host请求的域名为目标域名
                // changeOrigin:false
                changeOrigin: true,
                // 请求uri和目标uri有一个对应关系
                // 请求/api/login  ==>  目标 /v1/api/login
                pathRewrite: {
                    "^/api": ""
                },
            },
            "/v1": {
                // 把相对地址中的域名映射到目标地址中
                // localhost：3000  =》  https://api.iynn.cn/film/api/v1/
                target: "http://127.0.0.1:3333/v1/user",
                // target: "https://api.iynn.cn/film/api/v1",

                // 修改host请求的域名为目标域名
                // changeOrigin:false
                changeOrigin: true,
                // 请求uri和目标uri有一个对应关系
                // 请求/api/login  ==>  目标 /v1/api/login
                pathRewrite: {
                    "^/v1": ""
                },
            },
            //支付宝支付功能
            "/apy": {
                // 把相对地址中的域名映射到目标地址中
                // localhost：3000  =》  https://api.iynn.cn/film/api/v1/
                target: "http://127.0.0.1:80/getAirPortInfo.php",
                // target: "https://api.iynn.cn/film/api/v1",

                // 修改host请求的域名为目标域名
                // changeOrigin:false
                changeOrigin: true,
                // 请求uri和目标uri有一个对应关系
                // 请求/api/login  ==>  目标 /v1/api/login
                pathRewrite: {
                    "^/pay": ""
                },
            },
        }
    }
}

