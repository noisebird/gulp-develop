/*TMODJS:{"version":2,"md5":"c696630e443e7362c48c3b589edf6f56"}*/
template('E:/gulpproject/src/tpl/index',function($data,$filename
/*``*/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,data1=$data.data1,value=$data.value,$index=$data.$index,$escape=$utils.$escape,$out='';$out+='<ul> ';
$each(data1,function(value,$index){
$out+=' <li>';
$out+=$escape(value);
$out+='</li> ';
});
$out+=' </ul> ';
return new String($out);
});