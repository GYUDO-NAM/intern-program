function largestNumbers(n, arr) {
    // 1. 숫자를 작은 순서대로 정렬 (숫자 정렬 공식 사용)
    arr.sort((a, b) => a - b);

    // 2. n이 0일 경우 빈 배열을 'return' (반환) 합니다.
    if (n === 0) {
        return [];
    }

    // 3. 뒤에서 n개만큼 잘라서 'return' 합니다.
    return arr.slice(-n);
}