$(document).ready(function(){
    // *exp.1 원움직이기
    moveCircle();

    // *exp.2 원움직이기(detail)
    // detailMoveCircle();
    detailMoveCircleExt();

    // *exp.3 방향키조작으로 움직이는 원
    keyControl();
});

function moveCircle(){
    var $circle = $('.circle');
    $('#btnMoveCircle').click(function(){
        var xpos = window.prompt('0부터 380이하의 숫자만 입력하세요.');
        xpos = parseInt(xpos);
        if(xpos >= 0 && xpos <= 380){
            $circle.css("left",xpos);
        }else{
            alert("잘못된입력값입니다.");
        }
    });
}

function detailMoveCircle(){
    var $circle = $(".circleDetail");
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        if(xpos < 0 || xpos > 380 || ypos < 0 || ypos > 380){
            alert('잘못된 입력값입니다.');
        }else{
            $circle.css("left",xpos);
            $circle.css("top",ypos);
            // $($circle).css({
            //     'left': xpos,
            //     'top' : ypos
            // });
        }
    });
}

// *exp.2 function Grouping
function detailMoveCircleExt(){
    var $circle = null;

    circleInit();
    circleEvent();
}
function circleInit(){
    $circle = $('.circleDetail');
}
function circleEvent(){
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        circleMovCommand(xpos,ypos);
    });
}
function circleMovCommand(xpos,ypos){
    if(xpos > 380 || xpos < 0 || ypos < 0 || ypos > 380){
        alert('잘못된 입력값입니다.');
    }else{
        $($circle).css("left",xpos);
        $($circle).css("top",ypos);
    }
}

function keyControl(){
    var $circle = $(".circleKey");
    var range = 10;
    var currentXPos = 0;
    var currentYPos = 0;

    $(document).keydown(function(e){
        console.log('입력한 키코드' + e.keyCode);
        if(e.keyCode == 38 && currentYPos >= 0 && currentYPos <= 380){
            currentYPos -= range;
            if(currentYPos < 0){
                currentYPos = 0;
            };
            $($circle).css("top",currentYPos);
        }
        if(e.keyCode == 40 && currentYPos >= 0 && currentYPos <= 380){
            currentYPos += range;
            if(currentYPos > 380){
                currentYPos = 380;
            };
            $($circle).css("top",currentYPos);
        }
        if(e.keyCode == 37 && currentXPos >= 0 && currentXPos <= 380){
            currentXPos -= range;
            if(currentXPos < 0){
                currentXPos = 0;
            };
            $($circle).css("left",currentXPos);
        }
        if(e.keyCode == 39 && currentXPos >= 0 && currentXPos <= 380){
            currentXPos += range;
            if(currentXPos > 380){
                currentXPos = 380;
            };
            $($circle).css("left",currentXPos);
        }
    });
}