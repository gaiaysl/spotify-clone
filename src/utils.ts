function secondsToTime(seconds: number): string {
    return new Date(1000 * seconds)
        .toISOString()
        .substring(14, 19);
}

export {
    secondsToTime
};
