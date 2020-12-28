// 指定代理的前缀
let prefix = "/api/";


//设置代理前缀
let payoff="/apy";

export default {
    payoff,
    // 获取首页信息
    getHome:prefix+"/other",
    getPHP:payoff+"/getAirPortInfo.php",
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