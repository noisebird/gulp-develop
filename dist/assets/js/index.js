define(["template","text!viewTpl/index.tpl","viewTpl/index"],function(e,l,t){var i={data1:[1,2,3,4]};console.log("woshi123");var o=e.compile(l);$("#box").html(o(i)),$("#box1").html(t(i))});