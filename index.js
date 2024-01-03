function superbowlWin(arr) {
    let gameResult = arr.find(element => element.result === "W");
    return gameResult === undefined ? undefined : gameResult.year;
}