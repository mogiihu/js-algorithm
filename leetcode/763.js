var partitionLabels = function(S) {
    const last = new Array(26);
    const length = S.length;
    const codePointA = 'a'.codePointAt(0);
    for (let i = 0; i < length; i++) {
        last[S[i]] = i;
    }
    const partition = [];
    let start = 0, end = 0;
    for (let i = 0; i < length; i++) {
        end = Math.max(end, last[S[i]]);
        if (i == end) {
            partition.push(end - start + 1);
            start = end + 1;
        }
    }
    return partition;
};

let S = "bababcbacadefegdehijhklij";
partitionLabels(S)