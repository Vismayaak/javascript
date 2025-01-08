const songs=["song1","song2","song3","song4","song5"]
songs.push("song6")
console.log(songs);

songs.pop()
console.log(songs);

let size=songs.length
console.log(size);

l=songs.length-1
console.log(songs.at(0));
console.log(songs.at(l));

console.log(songs.join(","));

let newsongs=["song7","song8","song9"]
let a=songs.concat(newsongs);
console.log(a);

songs3=[["aab","aac"],["aad"]]
let b=songs3.flat();
console.log(b);
