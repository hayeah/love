// @St. 2016-01-27-17.14
//      2016-02-13-08.36
// init controller
//var controller = new ScrollMagic.Controller();
import $ from "jquery";

$(function(){
    var dom = [
        {
        text:   '<div class="sectionIn">'+
                    '<p>献给我最亲爱的老婆阿紫～<br>' +
                        '情人节快乐！<br>' +
                        '来自你的阿木 / 2016-02-14' +
                    '</p>' +
                    '<img src="img/qrcode.gif" width="220" height="220" class="qrcode" /> 扫码或微信长按二维码分享 <br>' +
    //              '<br>' +
    //                '<div class="tiny">' +
    //                    '<a href="https://github.com/superwoods">' +
    //                    '<img src="img/github.png" width="30%" alt="点击访问超级木木的" /><br>' +
    //                    '点击访问超级木木的Github </a>' +
    //                '</div>' +
                    '<div class="license">' +
                        '／后面还有哦／' +
                    '</div>' +
                '</div>'
        }, {
        text:   '<div class="sectionIn">'+
                    '<h2>特别感谢</h2>' +
                    '<p>木木的React老师<a href="https://github.com/hayeah" class="textu">Howard</a>先森<br>' +
                    'Google doodle／Github！</p>' +
                    '<div class="btn">' +
                        '<a href="https://github.com/superwoods">' +
                        '访问超级木木的Github首页</a>' +
                    '</div>' +
                    '<div class="license">' +
                        '<a href="https://github.com/superwoods">'+
                            '本页面由 / 超级木木 / 木Studio 设计制作, ' +
                            '我们使用MIT开源协议, 欢迎转载分享, '+
                            '但请您务必保留我们的署名, 感谢！'+
                        '</a>' +
                    '</div>' +
                '</div>'
       }
    ];
    $('#section5').html(dom[0].text);
    $('#section6').html(dom[1].text);
    $('body').append('<div id="jquery_jplayer_1" class="jp-jplayer"></div>'+
                     '<div id="jp_container_1" class="jp-audio" role="application" aria-label="media player">' +
                         '<button class="jp-play iconPlay" role="button" tabindex="0">play</button>' +
                     '</div>');


    $("#jquery_jplayer_1").jPlayer({
        ready: function (event) {
            $(this).jPlayer("setMedia", {
                mp3: 'media/Shayne-Ward-Until-You.mp3'
            });
            $(this).jPlayer("play").jPlayer("repeat");
        },
        swfPath: "js",
        supplied: "m4a, oga, mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true,
        volume: 1
    });

//    var player = new jPlayerPlaylist({
//        jPlayer: "#player",
//        cssSelectorAncestor: "#playWindow"
//    }, {
//        mp3: 'media/Shayne-Ward-Until-You.mp3'
//    }, {
//        swfPath: "js/",
//        supplied: "mp3",
//        errorAlerts:true,
//        //supplied: "m4v, mp3",
//        wmode: "window",
//        useStateClassSkin: true,
//        autoBlur: true,
//        smoothPlayBar: true,
//        keyEnabled: true,
//        remainingDuration: true,
//        volume: 1,
//        //size: {
////            width: "650px",
////            height: "380px"//,
////            //cssClass: "jp-video-360p"
////        },
//        ready: function() {
//            $(this).jPlayer("play").jPlayer("repeat");
//
//            /*var $jpDetails = $('.jp-details');
//            $jpDetails.show();*/
//        }//,
//        //play: function() { // To avoid multiple jPlayers playing together.
////            $(this).jPlayer("pauseOthers");
////        }
//    });


});





// 当页面加载完毕时开始动画。
window.onload = function() {
    ani.init();
    updateSliderControl();
    addSmoothScrolling();
};

// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
  updateSliderControl();
  //locator.stop();
}

var ani = {
    init: function (){
        this.logo("#hvd");
        this.logo("#ani1");
        this.logo("#ani2");
        this.logo("#ani3");
        //this.robot();
    },
    logo: function (tag){
        TweenMax.fromTo(tag, 2, {
            // from
            css: {
              y: 0,
            }
            },{
            // to
            css: {
              y: "30px",
            },
            // 永久重复动画的选项
            repeat: -1,
            // 反转、重新运行动画的选项
            yoyo: true,
            // 改变 easing 类型
            ease: Sine.easeInOut
            }
        );
    }//,
//    robot: function () {
//       var tag = "#android-robot";
//       //var tag = document.querySelectorAll("#android-robot");
//       var t = new TimelineMax({yoyo: true, repeat: -1, ease: Sine.easeInOut});
//           t.to(tag, 1, {rotation: '-=10deg'})
//            .to(tag, 1, {rotation: '+=20deg'}); // 可以使用 += / -= 在原有角度上做动画
//    },
      // create a scene
  // var scene1 = new ScrollMagic.Scene({
  //         duration: 100,  // the scene should last for a scroll distance of 100px
  //         offset: 50      // start this scene after scrolling for 50px
  //     })
  //     .setPin("#my-sticky-element") // pins the element for the the scene's duration
  //     .addTo(controller); // assign the scene to the controller
    //scene1: function(){
//
//    }
};


// scene.setTween(TweenMax.to("obj"), 1, {x: 100});
// function windowHeight(){
//   return window.innerHeight;
// }


// build scene
//var scene = new ScrollMagic.Scene({
//                    triggerElement: "#intro-section",
//                    triggerHook: "onLeave" ,
//                    duration: window.innerHeight
//                })
//                .setTween("#mask", {opacity: 1}) // trigger a TweenMax.to tween
//                .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
//                .addTo(controller);


function updateSliderControl() {
    // 获得所有的 slider 链接
    var links = document.querySelectorAll("#slider-control a");
    for(var i = 0; i < links.length; i++) {
        var link = links[i];
        //console.log(link);
        var attr = link.getAttribute('href');
        // 获取被链接指向的部分
        //var section = document.querySelector('#intro-section', '#native', '#touch', '#android');
        var section = document.querySelector(attr);

        //console.log(section);


        var sectionTop    = section.offsetTop;
        var sectionBottom = sectionTop + window.innerHeight;  //  section.offsetHeight
        //var sectionBottom = sectionTop + section.offsetHeight;
        //console.log(section.offsetHeight);
        //console.log(sectionTop + " / " + sectionBottom);
        //console.log(window.scrollY);
        //console.log(window.scrollY);

        // 检查 window.scrollY 是否在这部分中
        if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            //console.log(attr);
            link.className = "active";
            //event.preventDefault();
            //location.hash = attr;
            //console.log(link);
        }
        else {
            link.className = "";
        }
    }
}


// 练习：网页滚动动画
function scrollToElement(element) {
  // create a scene
  // var scene1 = new ScrollMagic.Scene({
  //         duration: 100,  // the scene should last for a scroll distance of 100px
  //         offset: 50      // start this scene after scrolling for 50px
  //     })
  //     .setPin("#my-sticky-element") // pins the element for the the scene's duration
  //     .addTo(controller); // assign the scene to the controller

  //console.log(num);
  //console.log(element);

    //声明变量topOfElement = element.offsetTop
    var topOfElement = element.offsetTop;
    // window 的动画滚动，使用TweenMax plugins
    TweenMax.to(window, 1, {
    scrollTo: {
        y: topOfElement,
    },
        ease: Sine.easeInOut
    });
}

function addSmoothScrolling() {
    var links = document.querySelectorAll("#slider-control a");

    for(var i = 0; i < links.length; i++) {
        var link = links[i];

        //if (typeof window.addEventListener === 'function'){
        // 闭包
        (function (_link) {
            //console.log('_link: ' + _link);
            //console.log(link);
            link.addEventListener('click', function(event){
                /*
                  这里禁用了鼠标的点击事件, 会导致hash无法更新，
                  也就是说hash就没有作用了
                  动画是否可以考虑换一种逻辑方式，
                  利用hash的方式去执行窗体混动的动画呢？？？
                */
                event.preventDefault();
                var attr = _link.getAttribute('href');
                //console.log('href: ' + _link);
                scrollToElement(document.querySelector(attr));
                //location.hash = attr;
            });
        })(link);
    }
}
