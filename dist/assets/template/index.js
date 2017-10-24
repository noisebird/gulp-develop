/*TMODJS:{"version":1,"md5":"e13cd2904bcee2b5e5b24ff210ef5b12"}*/
define(['./template',''],function(template){return template('index', function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data1=$data.data1,value=$data.value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<ul> ';
$each(data1,function(value,$index){
$out+=' <li>';
$out+=$escape(value);
$out+='</li> ';
});
$out+=' </ul> <div>12345678990</div> <div>woshi</div> ';
return new String($out);
});});