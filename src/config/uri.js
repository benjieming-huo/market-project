// 指定代理的前缀
let prefix = "/api/";

export default {
    // 获取首页信息
    getHome:prefix+"/other",
    getPHP: prefix +"/getAirPortInfo.php",
    //获取其他数据
    getOther:prefix+"/home",
    //获取婴儿的数据
    getBaby:prefix+"/baby",
    //获取玩具数据
    getToys:prefix+"/toys",
    //获取家居数据
    getFurniture:prefix+"/furniture",
    // 获取名
    getData:prefix + "/userinfo",
    getDetails:prefix+"/details"
}