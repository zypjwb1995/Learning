//todo.1 구구단 숫자를 입력받아 출력하는 for문.
function gugudan(){
    var gugudan = prompt('구구단 숫자를 입력');
    for(var i=1; i<=9; i++){
        document.write(gugudan + 'x' + i + '=' + gugudan*i + '<br>');
    }
}


// todo.2 배열의 총 합을 구하기. var data = [10,20,30,40,50];
function sumData(){
    var data = [10,20,30,40,50];
    var result = 0;
    for(var i=0; i<data.length; i++){
        result += data[i];
    }
    document.write('해당 배열의 총합은 ' + result + '입니다.');
}