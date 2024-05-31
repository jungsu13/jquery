// console.log($('li'));
$('li:first').css('border','5px solid red')   // 첫번째 요소
$('li').first().css('border','5px solid blue')
$('li:last').css('border','5px solid red')  // 마지막 요소
$('li').last().css('border','5px solid blue')
$('li:odd').css('border','5px solid green')  // 홇수 인덱스
$('li:even').css('border','5px solid red')

$('li:first-of-type').css('border','5px solid blue')  // 요소 무리 중 첫번째 요소
$('li:last-of-type').css('border','5px solid yellow')  // 요수 무리 중 마지막 요소
$('li:nth-child(2)').css('fontSize',30)  // 요소 무리 중  n번째 요소
$('li:nth-child(3n)').css('backgroundColor','#ccc')  //요소 무리 중 3배수 번째 요소

$('li:eq(1)').css('backgroundColor','#ddd')  // 요소 중 인덱스 1인 요소    0부터 시작 0 1 2 ...
$('li').eq(8).css('backgroundColor','#ddd')  // 요소 중 인덱스 8인 요소
$('li:gt(5)').css('backgroundColor','lightgreen')  // 인덱스 5보다 큰 요소
$('li:lt(4)').css('backgroundColor','lightblue')  // 인덱스 4보다 작은 요소
$('li').slice(7).css('backgroundColor','yellow')  // 요소 중 인덱스 7부터 전부

