exports.install = function(Vue,options) {
    Vue.prototype.getNowDayStr = function() {
        return new Vue({
            el: "#subscribe",
            data: {
                userName: "",
                userEmail: "",
                contents: ["乌有之乡","随思乱想","浮光掠影"],
                href: "mailto:bingjiaqin@foxmail.com?subject=【Bing16】订阅重要动态&body="
            }
        })
    }
}