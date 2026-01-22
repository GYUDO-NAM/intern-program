export default function Clock({ time }) {
    const hours = time.getHours();
    let className;
    if (hours >= 0 && hours <= 6) {
        document.getElementById('time')
        className = 'night';
    } else {
        document.getElementById('time')
        className = 'day';
    }
    return (
        <h1 className={className}>
            {time.toLocaleTimeString()}
        </h1>
    );
}
