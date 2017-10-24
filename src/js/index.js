define(['template', 'text!viewTpl/index.tpl', 'viewTpl/index'], function(template, tpl, tpl1) {
    var data = {
        data1: [1, 2, 3, 4]
    }
    console.log('woshi123');
    var model = template.compile(tpl);
    $("#box").html(model(data));
    $("#box1").html(tpl1(data));


});
