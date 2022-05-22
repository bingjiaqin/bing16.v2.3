const headerForm={
        data: function() {
            return {
                "hide": true,
                "navs": [
                { "title": "主页", "style": {"width": "72px"}, "href": "index.html"},
                { "title": "乌有之乡", "style": {"width": "100px"}, "href": "wyzx.html"},
                { "title": "随思乱想", "style": {"width": "100px"}, "href": "sslx.html"},
                { "title": "浮光掠影", "style": {"width": "100px"}, "href": "fgly.html"},
                { "title": "|", style: {width: "20px"}},
                { "title": "关于我", style: {width: "70px"}, href: "about.html"}
                ]
            }
        },
        methods: {
            click: function () {
                console.log(this.hide)
                this.hide = !this.hide
            }
        },
        template: '\
<div>\
    <div class="NavLeft">\
        <div class="NavLogo">\
            <img src="images/logo.jpg" width="40px" height="40px">\
        </div>\
        <div class="NavName">Bing16</div>\
    </div>\
    <div class="NavRight">\
        <ul class="NavUl">\
            <span v-for="nav in navs" class="NavList" >\
                <span v-if="nav.title==pageTitle">\
                    <li v-bind:style="nav.style">\
                        <span class="rcolor"><span class="divcss5-x2-header" @click="click()">{{ nav.title }}</span>\
                    </li>\
                </span>\
                <span v-else v-show="!mobile_flag || !hide">\
                    <li v-bind:style="nav.style"><a v-bind:href="nav.href">{{ nav.title }}</a></li>\
                </span>\
            </span>\
            <span class="NavList" v-show="!mobile_flag || !hide">\
                <li class="NavList" style="width: 40px">\
                    <a href="https://github.com/bingjiaqin"><img src="images/github.jpg" width="19px" height="19px" style="margin-top: 3px"></a>\
                </li>\
            </span>\
        </ul>\
    </div>\
    <div class="clear">\
    </div>\
</div>'
    }