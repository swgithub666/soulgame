

$(function(){
	$('#headnavul li').mouseover(function(){
		if($(this).index()==1){
			$('#headnavul .ll .p1').addClass('show');;
		}else if($(this).index()==3){
			$('#headnavul .ll .p2').addClass('show');;
		}else if($(this).index()==6){
			$('#headnavul .ll .p3').addClass('show');;
		};
	});
	$('#headnavul li').mouseout(function(){
		if($(this).index()==1){
			$('#headnavul .ll .p1').removeClass('show');;
		}else if($(this).index()==3){
			$('#headnavul .ll .p2').removeClass('show');;
		}else if($(this).index()==6){
			$('#headnavul .ll .p3').removeClass('show');;
		};
	});
	
	$('#c2_l li').mouseover(function(){
		$('#c2_l li').removeClass('active');
		$('#c2_l a').removeClass('show');
		$(this).addClass('active');
		$('#c2_l a').eq($(this).index()).addClass('show');
	});
	$('#c2rt li').mouseover(function(){
		$('#c2rt li').removeClass('active');
		$('#c2rb div').removeClass('bb');
		$(this).addClass('active');
		$('#c2rb div').eq($(this).index()).addClass('bb');
		
	});
	$('#num li').mouseover(function(){
		$('#num li').removeClass('active');
		$(this).addClass('active');
		$('#img li').removeClass('show');
		$('#img li').eq($(this).index()).addClass('show');
	});
	$('#img2').width($('#img2 a').width()*$('#img2 a').length);
	var n=0;
	$('#next').mouseover(function(){
		n--;
		if(n<=0){n=0};
		$('#img2').animate({left:-$('#img2 img').width()*n},700);
	});
	var n=0;
	$('#prev').mouseover(function(){
		n++;
		if(n>=3){n=3}
		$('#img2').stop().animate({left:-$('#img2 img').width()*n},700);
	});
	
	$('#img3 a').mouseover(function(){
		$('#img3 img').stop().animate({'margin-left':'-205'},600);
	});
	$('#img3 a').mouseout(function(){
		$('#img3 img').stop().animate({'margin-left':'0'},600);
	})
	
	$('#num4 li').mouseover(function(){
		$('#num4 .aa').removeClass('active');
		$('#num4 .aa').eq($(this).index()).addClass('active');
		
		$('#img4 div').removeClass('show');
		$('#img4 div').eq($(this).index()).addClass('show');
	});
	$('#num5 li').mouseover(function(){
		$('#num5 .aa').removeClass('active');
		$('#num5 .aa').eq($(this).index()).addClass('active');
		
		$('#img5 div').removeClass('show');
		$('#img5 div').eq($(this).index()).addClass('show');
	});
	$('#num6 li').mouseover(function(){
		$('#num6 .aa').removeClass('active');
		$('#num6 .aa').eq($(this).index()).addClass('active');
		
		$('#img6 div').removeClass('show');
		$('#img6 div').eq($(this).index()).addClass('show');
	});
	$('#wushen li').mouseover(function(){
		$('#wushen .p1').removeClass('active');
		$('#wushen .p1').eq($(this).index()).addClass('active');
		
		$('#wushen .wus').removeClass('show');
		$('#wushen .wus').eq($(this).index()).addClass('show');
	});
	
	$('#hezuo').mouseover(function(){
		$('#gund').stop().animate({height:'74'});
		$('#hezuo h4 a').addClass('move');
	});
	$('#hezuo').mouseout(function(){
		$('#gund').stop().animate({height:'0'});
		$('#hezuo h4 a').removeClass('move');
	});
	
	
	
	
});
	/*window.onload=function(){
		function aaa(a,b,c,d){
			var oNum=document.getElementById(a);
			var aA=oNum.getElementsByTagName(b);
			var oImg=document.getElementById(c);
			var aDiv=oImg.getElementsByTagName(d);
			for(var i=0;i<aA.length;i++){
				aA[i].index=i;
				aA[i].onmouseover=function(){
					for(var i=0;i<aA.length;i++){
						aA[i].className='';
						aDiv[i].className='';
					}
					this.className='active';
					aDiv[this.index].className='show';
				}
			}
			
		}
		aaa('num','a','img','li')
	}*/












