const myMarquee={
        data: function() {
            return {
                "msg": "【2022-07-23】你好，欣喜相逢",
            }
        },
        template: '\
<marquee width="100%" direction="left" onmouseover="this.stop()"onmouseout="this.start()">\
    {{ msg }}\
</marquee>'
    }