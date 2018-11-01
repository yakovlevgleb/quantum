"use strict";(function(){window.animation={};window.animation.fadeIn=function(elem,ms,cb){var d=arguments.length>3&&arguments[3]!==undefined?arguments[3]:"block";if(!elem)return;elem.style.opacity=0;elem.style.display=d;if(ms){var opacity=0;var timer=setInterval(function(){opacity+=50/ms;if(opacity>=1){clearInterval(timer);opacity=1;if(cb)cb()}elem.style.opacity=opacity},50)}else{elem.style.opacity=1;if(cb)cb()}};window.animation.fadeOut=function(elem,ms,cb){if(!elem)return;elem.style.opacity=1;if(ms){var opacity=1;var timer=setInterval(function(){opacity-=50/ms;if(opacity<=0){clearInterval(timer);opacity=0;elem.style.display="none";if(cb)cb()}elem.style.opacity=opacity},50)}else{elem.style.opacity=0;elem.style.display="none";if(cb)cb()}};window.animation.scrollTo=function(to,duration){if(duration<=0)return;var element=document.documentElement,difference=to-element.scrollTop,perTick=difference/duration*10;setTimeout(function(){element.scrollTop=element.scrollTop+perTick;window.animation.scrollTo(to,duration-10)},10)};window.animation.visChecker=function(el){var rect=el.getBoundingClientRect();return(//rect.top >= 0 &&
//rect.left >= 0 &&
rect.bottom-el.offsetHeight*.35<=(window.innerHeight||document.documentElement.clientHeight)&&rect.right<=(window.innerWidth||document.documentElement.clientWidth))};window.site={};window.site.form={init:function init(){var _th=this,inputs=document.querySelectorAll(".common__input, .common__textarea"),forms=document.querySelectorAll("form"),selectors=document.querySelectorAll(".js-select"),choicesArr=[],digitsInput=document.querySelectorAll(".js-digits");$(".js-phone").mask("+7(999) 999-9999");function emptyCheck(event){event.target.value.trim()===""?event.target.classList.remove("notempty"):event.target.classList.add("notempty")}var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=inputs[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var item=_step.value;item.addEventListener("keyup",emptyCheck);item.addEventListener("blur",emptyCheck)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}if(document.querySelectorAll(".js-common-file").length){var commonFile=document.querySelectorAll(".js-common-fileinput"),commonFileDelete=document.querySelectorAll(".js-common-filedelete");var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{var _loop=function _loop(){var fileInp=_step2.value;fileInp.addEventListener("change",function(e){var el=fileInp.nextElementSibling,path=fileInp.value.split("\\"),pathName=path[path.length-1].split("");pathName.length>=30?pathName=pathName.slice(0,28).join("")+"...":pathName=pathName.join("");el.textContent=pathName;el.classList.add("choosed")})};for(var _iterator2=commonFile[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){_loop()}}catch(err){_didIteratorError2=true;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{var _loop2=function _loop2(){var fileDelete=_step3.value;fileDelete.addEventListener("click",function(e){var el=fileDelete.previousElementSibling,fileInput=fileDelete.previousElementSibling.previousElementSibling;el.textContent=el.getAttribute("data-default");fileInput.value="";el.classList.remove("choosed")})};for(var _iterator3=commonFileDelete[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){_loop2()}}catch(err){_didIteratorError3=true;_iteratorError3=err}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return()}}finally{if(_didIteratorError3){throw _iteratorError3}}}}var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{var _loop3=function _loop3(){var form=_step4.value;form.addEventListener("submit",function(e){return!_th.checkForm(form)&&e.preventDefault()&&e.stopPropagation()})};for(var _iterator4=forms[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){_loop3()}}catch(err){_didIteratorError4=true;_iteratorError4=err}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return){_iterator4.return()}}finally{if(_didIteratorError4){throw _iteratorError4}}}var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=selectors[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var selector=_step5.value;var choice=new Choices(selector,{searchEnabled:false,itemSelectText:"",position:"bottom"});choicesArr.push(choice)}}catch(err){_didIteratorError5=true;_iteratorError5=err}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return){_iterator5.return()}}finally{if(_didIteratorError5){throw _iteratorError5}}}var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=digitsInput[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var digitInput=_step6.value;digitInput.addEventListener("keydown",function(e){var validArr=[46,8,9,27,13,110,190];if(validArr.indexOf(e.keyCode)!==-1||e.keyCode==65&&(e.ctrlKey===true||e.metaKey===true)||e.keyCode==67&&(e.ctrlKey===true||e.metaKey===true)||e.keyCode==88&&(e.ctrlKey===true||e.metaKey===true)||e.keyCode>=35&&e.keyCode<=39){return}if((e.shiftKey||e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)){e.preventDefault()}})}}catch(err){_didIteratorError6=true;_iteratorError6=err}finally{try{if(!_iteratorNormalCompletion6&&_iterator6.return){_iterator6.return()}}finally{if(_didIteratorError6){throw _iteratorError6}}}return this},checkForm:function checkForm(form){var checkResult=true;var warningElems=form.querySelectorAll(".warning");form.classList.remove("warning");if(warningElems.length){var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{for(var _iterator7=warningElems[Symbol.iterator](),_step7;!(_iteratorNormalCompletion7=(_step7=_iterator7.next()).done);_iteratorNormalCompletion7=true){var warningElem=_step7.value;warningElem.classList.remove("warning")}}catch(err){_didIteratorError7=true;_iteratorError7=err}finally{try{if(!_iteratorNormalCompletion7&&_iterator7.return){_iterator7.return()}}finally{if(_didIteratorError7){throw _iteratorError7}}}}var _iteratorNormalCompletion8=true;var _didIteratorError8=false;var _iteratorError8=undefined;try{for(var _iterator8=form.querySelectorAll("input, textarea, select")[Symbol.iterator](),_step8;!(_iteratorNormalCompletion8=(_step8=_iterator8.next()).done);_iteratorNormalCompletion8=true){var elem=_step8.value;if(elem.getAttribute("data-req")){switch(elem.getAttribute("data-type")){case"tel":var re=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;if(!re.test(elem.value)){elem.classList.add("warning");checkResult=false}break;case"email":var re=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;if(!re.test(elem.value)){elem.classList.add("warning");checkResult=false}break;case"file":if(elem.value.trim()===""){elem.parentNode.classList.add("warning");checkResult=false}break;default:if(elem.value.trim()===""){elem.classList.add("warning");checkResult=false}break;}}}}catch(err){_didIteratorError8=true;_iteratorError8=err}finally{try{if(!_iteratorNormalCompletion8&&_iterator8.return){_iterator8.return()}}finally{if(_didIteratorError8){throw _iteratorError8}}}var _iteratorNormalCompletion9=true;var _didIteratorError9=false;var _iteratorError9=undefined;try{for(var _iterator9=form.querySelectorAll("input[name^=agreement]")[Symbol.iterator](),_step9;!(_iteratorNormalCompletion9=(_step9=_iterator9.next()).done);_iteratorNormalCompletion9=true){var item=_step9.value;if(!item.checked){item.classList.add("warning");checkResult=false}}}catch(err){_didIteratorError9=true;_iteratorError9=err}finally{try{if(!_iteratorNormalCompletion9&&_iterator9.return){_iterator9.return()}}finally{if(_didIteratorError9){throw _iteratorError9}}}if(!checkResult)form.classList.add("warning");return checkResult}}.init();window.site.obj={resizeWatcher:function resizeWatcher(){var tableSel=document.querySelectorAll("table"),scrollArray=[];if(tableSel.length){tableSel.forEach(function(item,i){var orgHtml=item.outerHTML,def="default";if(item.getAttribute("class"))def="";item.outerHTML="<div class='table-scroller"+i+" "+def+"'>"+orgHtml+"</div>";var ps=new PerfectScrollbar(".table-scroller"+i,{wheelPropagation:true});scrollArray.push(ps)});window.addEventListener("resize",function(){if(scrollArray.length)scrollArray.forEach(function(item,i){item.update()})})}},asyncScroll:function asyncScroll(){var featElems=document.querySelectorAll(".js-async-scroll");featElems.forEach(function(item){return item.setAttribute("data-top",parseInt(getComputedStyle(item)["top"]))});window.addEventListener("scroll",function(){featElems.forEach(function(item){var rect=item.getBoundingClientRect(),diff=rect.bottom-item.offsetHeight-(window.innerHeight||document.documentElement.clientHeight),dataKoef=item.getAttribute("data-koef"),dataTop=item.getAttribute("data-top");if(diff<=0&&rect.top+item.offsetHeight>=0){item.style.top=dataTop-diff*dataKoef+"px"}})})},banner:function banner(){var bannerSwiper=new Swiper(".js-banner",{loop:true,speed:1200,spaceBetween:30,parallax:true,navigation:{nextEl:".js-banner ~ .swiper-buttons .swiper-button-next",prevEl:".js-banner ~ .swiper-buttons .swiper-button-prev"},autoplay:{delay:5000},breakpoints:{900:{autoHeight:true}},on:{slideChangeTransitionStart:function slideChangeTransitionStart(){document.querySelector(".banner__count span").textContent=("0"+(this.realIndex+1)).slice(-2)}}})},serts:function serts(){var bannerSwiper=new Swiper(".js-serts",{loop:true,slidesPerView:4,speed:700,spaceBetween:30,navigation:{nextEl:".js-serts ~ .swiper-buttons .swiper-button-next",prevEl:".js-serts ~ .swiper-buttons .swiper-button-prev"},breakpoints:{450:{slidesPerView:1,spaceBetween:40},767:{slidesPerView:2,spaceBetween:40},900:{slidesPerView:3,spaceBetween:30}}})},hover3d:function hover3d(){var koef=20;var _iteratorNormalCompletion10=true;var _didIteratorError10=false;var _iteratorError10=undefined;try{var _loop4=function _loop4(){var elem=_step10.value;elem.addEventListener("mousemove",function(e){var x=e.clientX-elem.getBoundingClientRect().x,y=e.clientY-elem.getBoundingClientRect().y,dx=x/elem.offsetWidth-.5,dy=y/elem.offsetHeight-.5;elem.setAttribute("style","transform: rotateY("+dx*koef+"deg) rotateX("+dy*koef+"deg)")});elem.addEventListener("mouseleave",function(e){elem.removeAttribute("style")})};for(var _iterator10=document.querySelectorAll(".js-hover3d")[Symbol.iterator](),_step10;!(_iteratorNormalCompletion10=(_step10=_iterator10.next()).done);_iteratorNormalCompletion10=true){_loop4()}}catch(err){_didIteratorError10=true;_iteratorError10=err}finally{try{if(!_iteratorNormalCompletion10&&_iterator10.return){_iterator10.return()}}finally{if(_didIteratorError10){throw _iteratorError10}}}},contacts:function contacts(){var mapEl=document.querySelector(".js-contacts-map"),geo=mapEl.getAttribute("data-coords").split(", ");var map=new ymaps.Map(mapEl,{center:[geo[0],geo[1]],zoom:14,controls:[],behaviors:["default","scrollZoom"]});var PMitem=new ymaps.Placemark([geo[0],geo[1]],{},{iconLayout:"default#image",iconImageSize:[27,41],iconImageHref:"/static/i/pin.png",iconImageOffset:[-3,-42],hideIconOnBalloonOpen:false,balloonOffset:[-22,-49]});map.geoObjects.add(PMitem)},init:function init(){var burgerEl=document.querySelector(".js-burger"),html=document.querySelector("html"),headerEl=document.querySelector(".header"),elemsToCheck=[".news__elem-imgover",".js-scroll-imgover",".about__steps-elem"];burgerEl.addEventListener("click",function(e){html.classList.toggle("burgeropen");if(burgerEl.classList.contains("open")){burgerEl.classList.add("remove");setTimeout(function(){burgerEl.classList.remove("open","remove")},1000)}else{burgerEl.classList.add("open")}e.preventDefault()});if(document.querySelector(".js-async-scroll"))this.asyncScroll();if(document.querySelector(".js-banner"))this.banner();if(document.querySelector(".js-serts"))this.serts();if(document.querySelectorAll(".js-hover3d").length)this.hover3d();if(document.querySelector(".js-contacts-map"))ymaps.ready(this.contacts);objectFitImages("img.fit");$("[data-fancybox]").fancybox({i18n:{en:{CLOSE:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"}},touch:false});window.addEventListener("scroll",function(){var _iteratorNormalCompletion11=true;var _didIteratorError11=false;var _iteratorError11=undefined;try{for(var _iterator11=elemsToCheck[Symbol.iterator](),_step11;!(_iteratorNormalCompletion11=(_step11=_iterator11.next()).done);_iteratorNormalCompletion11=true){var item=_step11.value;var _iteratorNormalCompletion12=true;var _didIteratorError12=false;var _iteratorError12=undefined;try{for(var _iterator12=document.querySelectorAll(item)[Symbol.iterator](),_step12;!(_iteratorNormalCompletion12=(_step12=_iterator12.next()).done);_iteratorNormalCompletion12=true){var _elem=_step12.value;if(window.animation.visChecker(_elem)){_elem.classList.add("visible")}}}catch(err){_didIteratorError12=true;_iteratorError12=err}finally{try{if(!_iteratorNormalCompletion12&&_iterator12.return){_iterator12.return()}}finally{if(_didIteratorError12){throw _iteratorError12}}}}}catch(err){_didIteratorError11=true;_iteratorError11=err}finally{try{if(!_iteratorNormalCompletion11&&_iterator11.return){_iterator11.return()}}finally{if(_didIteratorError11){throw _iteratorError11}}}});this.resizeWatcher();var _iteratorNormalCompletion13=true;var _didIteratorError13=false;var _iteratorError13=undefined;try{for(var _iterator13=document.querySelectorAll(".js-shave")[Symbol.iterator](),_step13;!(_iteratorNormalCompletion13=(_step13=_iterator13.next()).done);_iteratorNormalCompletion13=true){var sh=_step13.value;shave(sh,sh.getAttribute("data-height"))}}catch(err){_didIteratorError13=true;_iteratorError13=err}finally{try{if(!_iteratorNormalCompletion13&&_iterator13.return){_iterator13.return()}}finally{if(_didIteratorError13){throw _iteratorError13}}}var eventResize=void 0;try{eventResize=new Event("resize")}catch(e){eventResize=document.createEvent("Event");var doesnt_bubble=false,isnt_cancelable=false;eventResize.initEvent("resize",doesnt_bubble,isnt_cancelable)}window.dispatchEvent(eventResize);var eventScroll=void 0;try{eventScroll=new Event("scroll")}catch(e){eventScroll=document.createEvent("Event");var _doesnt_bubble=false,_isnt_cancelable=false;eventScroll.initEvent("scroll",_doesnt_bubble,_isnt_cancelable)}window.dispatchEvent(eventScroll);return this}};Pace.on("hide",function(){setTimeout(function(){window.site.obj.init()},200)})})();