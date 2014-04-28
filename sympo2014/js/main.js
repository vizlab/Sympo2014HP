var debugContainer;
(function laod_jQuery_and_init(){
	if(typeof jQuery == "undefined"){
		console.log("failed to load jquery from google lib");
		
		var d = document;
		var s = d.createElement("script");
		s.type = "text/javascript";
		s.src = "js/jquery-1.7.2.min.js";
		var h = d.getElementsByTagName("head").item(0);
		h.appendChild(s);
		
		(function wait_for_jQuery(){
			var i = 0;
			if(typeof jQuery !== "undefined"){
				console.log("jQuery has loaded successfully from local server");
				init(jQuery);
			}else if(typeof jQuery == "undefined" && i < 100){
				i++;
				setTimeout(arguments.callee,20);
			}else{
				console.log("failed to laod jQuery");
			}
		})();
	}else{
		init(jQuery);
	}
	
	function init($){
		sympo(jQuery);
	}
})();

function sympo($){
	$(function(){
		//jQueyを用いた左サイドバーのスクロール処理
		// var $leftNav = $("#left_nav");
		// if($leftNav.length != 0){
			// var offset_leftNav = $leftNav.offset();
			// console.log($leftNav);
			// console.log(offset_leftNav.top);
// 		
			// $(window).scroll(function () {
			  // if($(window).scrollTop() > offset_leftNav.top -120){
			    // $leftNav.addClass('fixed');
			  // } else {
			    // $leftNav.removeClass('fixed');
			  // }
			// });
		// }
				
		// くっついてくるトップナビゲーションバー
		// var $headerNav = $("#header_navBox");
		// if($headerNav.length != 0){
			// var offset_headerNav = $headerNav.offset();
			// console.log($headerNav);
			// console.log(offset_headerNav.top);							
			// $(window).scroll(function () {
			  	// if($(window).scrollTop() > offset_headerNav.top){
					// $headerNav.addClass('fixed_header_navBox');
			  	// } else {
					// $headerNav.removeClass('fixed_header_navBox');
				// }
			// });
		// }
		// くっついてくるホームボタン
		var $goTopBtn = $("#goTopBtn");
		$goTopBtn.hide();
		$(window).scroll(function () {
            if($(this).scrollTop() > 100) {
                $goTopBtn.fadeIn();
            }else{
                $goTopBtn.fadeOut();
            }
        });
        // scroll body to 0px on click
        $goTopBtn.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
        
        // するするスクロール
        $(function(){
    		$('a[href^=#]').click(function() {
        		var speed = 500;
        		var href= $(this).attr("href");
        		var target = $(href == "#" || href == "" ? 'html' : href);
        		var position = target.offset().top;
        		$($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');
        		return false;
    		});
		});
        
        
        // for BBS
        var $replyBtns = $(".replyBtn");
        $replyBtns.bind("click",function(){
        	var $replyBtn = $(this);
        	var $form = $replyBtn.next('form');
        	debugContainer = [$form.is(":hidden")];
        	if($form.is(":hidden")){
	        	$form.show();
	        	$replyBtn.text('閉じる');
	        	toggleFlag = false;
        	}else{
        		$form.hide();
        		$replyBtn.text('返信する');
        		toggleFlag = true;
        	}
        });
        var $forms = $(".formReply");
        $forms.bind("click", function(){
        	var $form = $(this);
        	$form.hide();
        });
	});
}
