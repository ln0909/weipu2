// 右侧客服
$(document).ready(function(){
    $(".suspend").mouseover(function() {
        $(this).stop();
        $(this).animate({width: 160}, 400);
    })

    $(".suspend").mouseout(function() {
        $(this).stop();
        $(this).animate({width: 40}, 400);
    });

});

//左侧导航
//全兼容的 事件绑定  and  阻止默认事件
var EventUtil = {
    addHandler: function(element, type, handler){
		if (element.addEventListener){
			element.addEventListener(type, handler, false);
		} else if(element.attachEvent){
			element.attachEvent('on'+type, handler);
		} else {
			element['on'+type] = handler;
		}
	},

	preventDefault: function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	}
};
var mediaQuery = {
	init:function(){
		var _this = this;
		_this.outputSize();
		EventUtil.addHandler(window,"resize",function(){
			_this.outputSize();
		});
	},
	outputSize:function(){
		var result1 = window.matchMedia('(min-width:1200px)');
		var result2 = window.matchMedia('(min-width:992px)');
		var result3 = window.matchMedia('(min-width:768px)');
		//console.log(window.innerWidth);
		//console.log(result.matches);
		if(result1.matches) {
			//  >=1200 大型设备 大台式电脑
			$(function(){
				$(window).scroll(function() {
					if($(window).scrollTop() >= 300){
						$('.lift').fadeIn(300);
					}else{
						$('.lift').fadeOut(300);
					}
				});
				$('#btn0').click(function(){$('html,body').animate({scrollTop: '500'}, 800);});
				$('#btn1').click(function(){
					$('html,body').animate({scrollTop: '800'}, 800);});
				$('#btn2').click(function(){
					$('html,body').animate({scrollTop: '1100'}, 800);});
				$('#btn3').click(function(){
					$('html,body').animate({scrollTop: '1400'}, 800);});
				$('#btn4').click(function(){
					$('html,body').animate({scrollTop: '1600'}, 800);});
				$('#btn5').click(function(){
					$('html,body').animate({scrollTop: '0px'}, 800);});
			});

		}else if(result2.matches){
			//  992=< <=1200 中型设备 台式电脑
			$(function(){
				$(window).scroll(function() {
					if($(window).scrollTop() >= 300){
						$('.lift').fadeIn(300);
					}else{
						$('.lift').fadeOut(300);
					}
				});
				$('#btn0').click(function(){$('html,body').animate({scrollTop: '500'}, 800);});
				$('#btn1').click(function(){
					$('html,body').animate({scrollTop: '800'}, 800);});
				$('#btn2').click(function(){
					$('html,body').animate({scrollTop: '1100'}, 800);});
				$('#btn3').click(function(){
					$('html,body').animate({scrollTop: '1400'}, 800);});
				$('#btn4').click(function(){
					$('html,body').animate({scrollTop: '1600'}, 800);});
				$('#btn5').click(function(){
					$('html,body').animate({scrollTop: '0px'}, 800);});
			});
		}
	}
};
window.onload = function(){
	mediaQuery.init();
};







