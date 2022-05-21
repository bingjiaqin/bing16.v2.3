const headerForm={
        data: function() {
            return {
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
        template: '\
<div>\
    <div class="NavLeft">\
        <div class="NavLogo">\
            <img src="images/logo.jpg" width="40px" height="40px">\
        </div>\
        <div class="NavName">Bing16</div>\
    </div>\
    <div class="NavRight">\
        <ul>\
            <li class="NavList" v-for="nav in navs" v-bind:style="nav.style">\
                <a v-bind:href="nav.href"><span v-if="nav.title==pageTitle"><span class="rcolor"><span class="divcss5-x2-header">{{ nav.title }}</span></span></span><span v-else>{{ nav.title }}</span></a>\
            </li>\
            <li class="NavList" style="width: 40px">\
                <a href="https://github.com/bingjiaqin"><img src="images/github.jpg" width="19px" height="19px" style="margin-top: 3px"></a>\
            </li>\
        </ul>\
    </div>\
    <div class="clear">\
    </div>\
</div>'
    }