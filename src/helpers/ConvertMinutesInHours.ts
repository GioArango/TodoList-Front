export const ConvertMinutesInHours = (minutes: number) => {
    const MINUTES_PER_HOUR = 60;
    const hours = minutes / MINUTES_PER_HOUR;
    return hours.toFixed(0)
}

export const formatSeconds = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const remainingSecondsAfterHours = timeInSeconds % 3600;
    const minutes = Math.floor(remainingSecondsAfterHours / 60);
    const seconds = remainingSecondsAfterHours % 60;

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    if (hours > 0) {
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
        return `${formattedMinutes}:${formattedSeconds}`;
    }
};