console.log("进入main.js")
require.config({
    paths: {
        "jquery": "jquery",
        'template': "template",
        'templateEasy': "templateEasy",
        'viewTpl': '../assets/template',
        "text": "text",
        "text1": "../template/test1.html", //这里千万注意路径
        "text2": "../template/test2.html",

    }
})
