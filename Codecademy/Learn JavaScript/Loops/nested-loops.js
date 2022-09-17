// Write your code below
var bobsFollowers = ["A", "B", "C", "D"];
var tinasFollowers = ["A", "B", "E"];
var mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}
