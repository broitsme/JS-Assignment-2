function getMiddle(s) {
    var len = s.length;
    return len % 2 == 0 ? s.substring((len / 2) - 1, (len / 2) + 1) : s[parseInt(len / 2)];
}