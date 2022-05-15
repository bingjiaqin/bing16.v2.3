const subscribeForm={
        data: function() {
            return {
                userName: "",
                userEmail: "",
                contents: ["乌有之乡","随思乱想","浮光掠影"],
                href: "mailto:bingjiaqin@foxmail.com?subject=【Bing16】订阅重要动态&body="
            }
        },
        template: '\
    <div class="Subscribe">\
        <div class="Subscribe_box_l">\
            <h2><span class="divcss5-x2-r">订阅重要动态</span></h2>\
            <p>每当有以下动态时，将会直接发送到你的邮箱：</p>\
                    <ul>\
                        <li>网站域名变更</li>\
                        <li>推出新的网站</li>\
                        <li>推出非常值得分享的内容</li>\
                    </ul>\
        </div>\
        <div class="Subscribe_box_r" align="right">\
            <table style="margin-top: 6em"><tbody><tr>\
                <td></td>\
                <td>\
                    <table cellpadding="0em" cellspacing="0px" border="0px"><tbody>\
                        <tr height="330">\
                            <td bgcolor="#F0F0F0" style="padding-left: 2em; padding-top: 0em">\
                                <table style="word-wrap:break-word;word-break:break-all;background-color: #ffffff" border="1px"><tbody>\
                                    <tr>\
                                    <td>\
                                        <div style="width: 11em;height: 11em"><div style="font-size: 0.7em">\
                                            【Bing16】订阅重要动态<hr>\
                                            <div style="margin-left: 0.5em">\
                                                用户名：{{userName}}<br>\
                                                邮箱：{{userEmail}}<br><br>\
                                                订阅主题：<br>\
                                                <span v-for="(content,index) in contents" v-if="index!=contents.length-1">{{content}},\
                                                </span><span v-for="(content,index) in contents" v-if="index==contents.length-1">{{content}}</span>\
                                            </div>\
                                        </div></div>\
                                    </td>\
                                </tr></tbody></table>\
                            </td>\
                            <td bgcolor="#F0F0F0" style="padding-right: 2.5em; padding-left: 2em; padding-top: 2em">\
                                <div style="width: 12em">\
                                <p align="left">Name<br><input type="text" placeholder="在这里输入名字喔！" v-model="userName" style="width: 15em"></p>\
                                <p align="left">Email<br><input type="text" placeholder="在这里输入邮箱喔！" v-model="userEmail" maxlength="50" style="width: 15em"></p>\
                                <p style="font-size: 0.6em">\
                                    <input type="checkbox" id="乌有之乡" value="乌有之乡" v-model="contents"/>\
                                    <label for="jack">乌有之乡</label>\
                                    <input type="checkbox" id="随思乱想" value="随思乱想" v-model="contents"/>\
                                    <label for="john">随思乱想</label>\
                                    <input type="checkbox" id="浮光掠影" value="浮光掠影" v-model="contents"/>\
                                    <label for="mike">浮光掠影</label>\
                                </p>\
                                <p align="right">\
                                    <a v-bind:href="href+\'用户名：\'+userName+\'%0C\'+\'邮    箱：\'+userEmail+\'%0C%0C\'+\'订阅主题：\'+\'%0C\'+contents+\'%0C\'"><button style="color: #ff5959">提交</button></a>\
                                </p>\
                                </div>\
                            </td>\
                        </tr>\
                    </tbody></table>\
                </td>\
            </tr></tbody></table>\
        </div>\
    </div>\
    <div class="clear"></div>'
    }