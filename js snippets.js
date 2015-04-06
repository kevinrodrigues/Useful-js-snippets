js snippets

ONE LINE JS DETECTION
=====================
Put this in the head:
<script>(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement)</script>


/* DETECT MOBILE BROWSERS */
/*========================*/
// http://detectmobilebrowsers.com/  -- iPad not counted as mobile
/*isMobile = function (a) {
	if (/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test (a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test (a.substr (0, 4))) {
		return true;
	} else {
		return false;
	}
}(navigator.userAgent || navigator.vendor || window.opera);*/





GET MAJOR VERSION OF IE
=======================
// get major IE version number 
// http://stackoverflow.com/questions/5574842/best-way-to-check-for-ie-less-than-9-in-javascript-without-library
// http://james.padolsey.com/javascript/detect-ie-in-js-using-conditional-comments/
var ie = (function () {
	
	var undef,
		v = 3,
		div = document.createElement('div'),
		all = div.getElementsByTagName('i');
	while (
		div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
		all[0]);
	
	return v > 4 ? v : undef;
	
}());




TRULY RANDOM INTEGERS
=====================
/**
 * Returns a truly random integer.
 * @param	high (an integer)
 * @param	low (an integer)
 * @return an integer between low and high inclusive
 */
function randInt(high, low){
	return Math.floor(Math.random() * (1 + high - low)) + low;
}
usage examples:
// random integer from 0 to 9 inclusive
randInt(9, 0);
// or
for (var i = 0; i < 100; i++) {
	// 100 random integers from 0 to 9 inclusive
	console.log( randInt(9,0) );
}


RANDOM ELEMENT FROM ARRAY (depends on randInt(), above)
=========================
// returns the value of one random element from the passed array
function randArrayElement(pArray) {
	var len = pArray.length,
		randIndex = randInt(len - 1, 0);
	return pArray[randIndex];
}
	


ACCORDION - from National Grid / Toby Denham.
=========
    $("#accordion h2").click(function () {
        $(this).next("div.wrapper").slideToggle(400).siblings("div.wrapper:visible").slideUp(400);
        $(this).toggleClass("active");
        $(this).siblings("h2").removeClass("active");
    });

	

GET THIS SCRIPT'S PATH
======================
// get this script's path - make sure this is run when the html page executes
scripts = document.getElementsByTagName('script'),
path = scripts[scripts.length-1].src.split('?')[0], // remove any ?query
mydir = path.split('/').slice(0, -1).join('/')+'/',

	
	

LOAD CONTENT INTO PORTION OF PAGE
=================================

HTML:
<a class="internal" href="/newPage.html">New Page</a>
<div class="wrapper">
	<div id="copy">
	</div>
</div>

JS:
$(document).ready(function(){
  
	var ie7 = false, 
		ie8 = false;   

	ie7 = $('html').hasClass('ie7');
	ie8 = $('html').hasClass('ie8');

	// the id/class name of the anchor needs to be added to the relevant html elements
	$('a.internal').click(function(e) {
		
		// the space#divname appended to the href allows a fragment of the returned page to be inserted
		var url = $(this).attr('href') + ' #copy'; 

		if (ie7 || ie8) {
			$('.wrapper').hide();
			loadContent();		  
		} else {
			$('.wrapper').fadeOut(500, loadContent);
		};  		

		function loadContent() { 
			$('.wrapper').load(url, '', showNewContent);
		} 
		
		function showNewContent() {  
			if (ie7 || ie8) {
				$('.wrapper').show();  		  
			} else {
				$('.wrapper').fadeIn(500);  
			}
		}

		e.preventDefault();
	})	

});

COOKIE FUNCTIONS
================
    // cookie functions from http://www.quirksmode.org/js/cookies.html
    function createCookie(name, value, days) {
        var date = new Date(),
			expires;
        if (days) {
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=",
			ca = document.cookie.split(';'),
			c,
			i;
        for (i = 0; i < ca.length; i++) {
            c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }
    // end of quirksmode.org cookie functions

	
// get major IE version number 
// http://stackoverflow.com/questions/5574842/best-way-to-check-for-ie-less-than-9-in-javascript-without-library
// http://james.padolsey.com/javascript/detect-ie-in-js-using-conditional-comments/
var ie = (function () {
	
	var undef,
		v = 3,
		div = document.createElement('div'),
		all = div.getElementsByTagName('i');
	while (
		div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
		all[0]);
	
	return v > 4 ? v : undef;
	
}());
