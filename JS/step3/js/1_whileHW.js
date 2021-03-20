// todo.1 구구단 숫자를 입력받아 출력하는 while문.
function gugudan(){
    var guguNumb = window.prompt('구구단숫자를 입력 (1-9)');
    var i = 1;
    while(i <= 9){
        document.write(guguNumb + 'x' + i + '=' + guguNumb * i + '<br>');
        i++;
    }
}

// todo.2 end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하고,
// prompt에는 몇번 수행 했는가에 대한 "x 번째 입력" 이 표시되야함. 

function sum1(){
    var s=0,i=1;
    while(true){ //? 조건식
        var value = window.prompt("숫자를입력하세요."); //? 이하 실행구문
        if(value!= 'end'){
            document.write(i + '번째숫자는: ' + value + '<br>'); 
            i++;
            s = s+parseInt(value);
        }else{
            document.write('총 값은:'+ s +'입니다.');
            break;
        }
    }
} 
function sumNumb(){
    var i = 1; //? count var
    var result = 0; //? result var
    while(true){
        var numb = window.prompt(i + '번째 입력중');
        if(numb == 'end'){
            alert('입력종료');
            break;
        }
        result += parseInt(numb);
        document.write('현재까지의 총합 : ' + result + '<br>');
        i++;
    }
}