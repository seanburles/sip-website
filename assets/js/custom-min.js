$(document).ready(function(){var e;$(".slick").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,fade:!0,arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:6e3,appendDots:".dot-anchor"}),e=new HqyLazyload;var t=$(".benefits .row").waypoint(function(e){$(this.element).addClass("start")},{offset:"65%"}),t=$(".at-a-glance .col-sm-4").waypoint(function(e){$(this.element).addClass("start")},{offset:"65%"});$("select").selectpicker(),$(".nav-link.dropdown-toggle").hover(function(){$(this).removeAttr("data-toggle"),$(this).parent().addClass("show"),$(this).next().addClass("show")},function(){var e=$(this).next().filter(":hover").length,t=$(this).filter(":hover").length;e||t||($(this).attr("data-toggle","dropdown"),$(this).parent().removeClass("show"),$(this).next().removeClass("show"))}),$(".dropdown-menu").hover(function(){},function(){var e=$(this).prev().filter(":hover").length,t=$(this).filter(":hover").length;e||t||($(this).parent().removeClass("show"),$(this).removeClass("show"))}),$(function(){$("#submit").hide(),$("#page-changer select").change(function(){window.location=$("#page-changer select option:selected").val()})}),$("a.scrollLink").click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500)}),$(function(){$("#selectFilter").change(function(){console.log($(this).val()),"conference"==$(this).val()&&($(".webinar, .sip-release").slideUp(),$(".conference").slideDown()),"webinars"==$(this).val()&&($(".conference, .sip-release").slideUp(),$(".webinar").slideDown()),"sip-release"==$(this).val()&&($(".conference, .webinar").slideUp(),$(".sip-release").slideDown()),"show-all"==$(this).val()&&$(".conference, .sip-release, .webinar").slideDown()})});var o=$(".down-arrow");o.waypoint(function(e){"down"===e&&TweenMax.to(".down-arrow",2,{ease:Elastic.easeOut.config(1,.3),scale:"0.65"})},{offset:"25%"}),o.waypoint(function(e){"up"===e&&TweenMax.to(".down-arrow",2,{ease:Elastic.easeOut.config(1,.3),scale:"1"})},{offset:"25%"})});