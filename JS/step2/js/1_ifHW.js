//todo hw.1 각 수를 입력 받아 해당하는 조건의 메시지를 출력하라.
//? 1일 경우 "1등 10억", 2일 경우 "2등 5천만원", 3일 경우 "3등 300만원", 그외 수일 경우 "낙첨되었습니다."

function lottery(){
    var n = window.prompt("숫자를 입력하세요.");

    if(n=="1"){
        alert("1등 10억");
    }else if(n=="2"){
        alert("2등 5천만원");
    }else if(n=="3"){
        alert("3등 300만원");
    }else{
        alert("낙첨되었습니다.");
    }
}
//todo hw.2 다음 코드를 간소화 시키시오. Hint. else if가 모두 삭제되어야함.
function btnMouseEx(){
    var clickBtn = window.prompt("누르실 마우스 버튼을 입력하세요 (왼쪽,오른쪽,가운데)");

    if(clickBtn=="오른쪽" || clickBtn=="왼쪽" || clickBtn=="가운데"){
        document.write(clickBtn + "!");
    }else{
        document.write("올바른값을 입력하세요.");
    }


}