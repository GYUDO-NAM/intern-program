const courses = [
    { id: 1, name: 'b' },  // 1. 여기에 쉼표(,) 추가
    { id: 2, name: 'a' }
];

// 2. 함수 본문에 중괄호 {} 추가
// 3. 변수명 오타 수정 (cousres -> foundIndex 혹은 유사한 이름)
const foundIndex = courses.findIndex(function (course) {
    return course.name === 'a';
});

console.log(foundIndex); // 4. 올바른 변수명 출력