const circle = {
    radius: 1, // 콤마(,) 추가
    draw() {
        console.log('draw');
    }
};

//  const another = Object.assign({}, circle);
//  for (let key in circle) 
//      another[key] = circle[key];

const another = Object.assign({}, circle);

const another2 = { ...circle }; // 변수명 변경 (another -> another2)

console.log(another2);
