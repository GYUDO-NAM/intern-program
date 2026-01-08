checkSpeed(130);

function checkSpeed(speed) {
    const speedLimut = 70;
    const kmPerPoint = 5;

    if (speed < speedLimut + kmPerPoint) {
        console.log('Ok');
        return;

    }
    const point = Math.floor((speed - speedLimit) / kmPerPoint);
    if (point >= 12)
        console.log('License suspended');
    else
        console.log('points', points);
}