"use strict"
var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {label:'Опубликовать:',kind:'submit'},
];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {label:'Зарегистрироваться:',kind:'submit'},
];

function formCreation(formElem, formDef) {
    for (var i = 0; i < formDef.length; i++) {
      var hash = formDef[i];
      
        if ( "variants" in hash ) {
            if (hash.kind == 'combo') {
              var hashCombo ='';
              hash.variants.forEach(function(v, i, a) {
                hashCombo += '<option value='+v.value+'>'+v.text+'</option>';  
              });
              
            } else if (hash.kind == 'radio') {
              var hashRadio ='';
              hash.variants.forEach(function(v, i, a) {
                hashRadio += '<input type="radio" value='+v.value+'>'+v.text+'</option>';  
              });
              
            }
          } 
          switch (hash.kind) {
            case 'longtext':  formElem.innerHTML += hash.label +' <input name =' + hash[name] + 'type="text"><br/><br/>'; break;
            case 'number':    formElem.innerHTML += hash.label +'  <input name =' + hash[name] + 'type="text"><br/><br/>'; break;
            case 'shorttext': formElem.innerHTML += hash.label +'  <input name =' + hash[name] + 'type="text"><br/><br/>'; break;
            case 'combo':     formElem.innerHTML += hash.label + '<select name= '+hash[name]+ '>' + hashCombo+ '</select><br/><br/>'; break;
            case 'radio':     formElem.innerHTML += hash.label + hashRadio + '<br/><br/>'; break;
            case 'check':     formElem.innerHTML += hash.label + '<input type="checkbox" checked '+'name='+hash[name]+'><br/>'; break;
            case 'memo':      formElem.innerHTML += hash.label + '<textarea name=' +hash[name]+'></textarea><br/><br/>'; break;
            case 'submit':    formElem.innerHTML += '<button>'+ hash.label +'</button>'; break;
          }
        }
        return;
    }


var formElem1 = document.forms.form1;
var formElem2 = document.forms.form2;
formCreation(formElem1, formDef1);
formCreation(formElem2, formDef2);