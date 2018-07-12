var timeout=0;
$(window).resize(function(){resizeWindow();});
 
function resizeWindow(){
    clearTimeout(timeout);//while resizing timeout gets cleared
    timeout=setTimeout(function(){
        var windowWidth=$(window).width();
        
        switch(true){
            case(windowWidth<767)://xs
                setImg("data-xs-src");
            break;
            case(windowWidth<992)://sm
                setImg("data-sm-src");
            break;
            case(windowWidth<1200)://md
                setImg("data-md-src");
            break;
            default://lg or default
                setImg("data-default-src");
        }
        
    },200);
}
resizeWindow();

function setImg(size){
    
    var currUrl=window.location.href.split("/");
    currUrl[currUrl.length-1]="";//remove the XXX.html
    currUrl=currUrl.join("/");//join them back together
    /*
    $("img").each(function(size){
        if($(this).attr(size)){
            $(this).attr("src",$(this).attr(size));
        }
    });*/
    
    $("div").each(function(){
        if(!$(this).attr(size)){
            size="data-default-src";
        }
        if($(this).attr(size)){
            var new_url="url('"+$(this).attr(size)+"')";
            if($(this).css("background")!=new_url){
                $(this).css("background",new_url);
            }
        }
    });
}

$(function(){
    $(".boxClickable").on("click",function(){
        window.location.href=$(this).attr("data-url");
    });

    var submited=0;

    $("#submitFrm").on("click",function(){
        err = checkRequired();
        if(err==0){
            document.forms[0].submit();
        }
    });
	$("input").keyup(function(){
		if($(this).hasClass("error")) {
			$(".error").removeClass("error");
			$(".errorTxt").hide();
			checkRequired();
		}
    });
	/* check onload */
    //checkRequired();
	try{
    $('input, textarea').placeholder();
	}catch(e){}
});

function checkRequired(){
	var valOK=false,err=0;
    $(".required").each(function(){
		valOK=true;
		if($(this).hasClass("input-email")){
			valOK=validateEmail($(this).val());
		}
		if($(this).hasClass("input-nbr") || $(this).hasClass("input-cp") || $(this).hasClass("input-tel")) {
			valOK=validateNumber($(this).val());
		}
		if($(this).val().length<1 || !valOK){
			var name=$(this).attr("name");
			$("."+name).show();
			$(this).addClass("error");
		}
		if($(this).attr("type")=="radio"){
			if(!$("input[name='"+$(this).attr("name")+"']:checked").val()){
				err++;
			}
		}
		if(valOK===false)err++;
	});
   
   console.log("err",err);
   return err;
   
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateNumber(value) {
	var re = /^\d+$/;
    return re.test(value);;
}

jQuery(document).ready(function() {
    jQuery(".toggle-cat-list").on("mouseover", function(e) {
        e.preventDefault();
        if (jQuery(".hidemenu").css( "display" ) == "none") {
            jQuery(".hidemenu").slideDown(200);
            }
    })
})

jQuery(document).ready(function() {
    jQuery(".toggle-cat-list").on("mouseleave", function(e) {
        e.preventDefault();
        if (jQuery(".hidemenu").css( "display" ) == "block") {
            jQuery(".hidemenu").slideUp(300);
            }
    })
})