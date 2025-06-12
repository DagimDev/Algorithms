// Baseball Batting Average
// A baseball player's batting average is calculated by the following formula:

// BA = (number of hits) / (number of official at-bats)
// Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

// Ty Cobb .366
// Rogers Hornsby .358
// Shoeless Joe Jackson .356
// The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

// Examples
// battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]]) ➞ ".286"

// battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]]) ➞ ".350"

// battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]]) ➞ ".273"
// Notes
// The number of hits will not exceed the number of official at-bats.
// The array includes official at-bats only. No other plate-appearances (walks, hit-by-pitches, sacrifices, etc.) are included in the array.
// HINT: Think in terms of total hits and total at-bats.

// My Solution
const battingAvg = (arr) => {
    const res = arr.flat()
    let hits = 0
    let at_bats = 0
    for (let i = 0; i < res.length - 1; i += 2) {
        hits += res[i]
    } 
    for (let j = 1; j < res.length; j += 2) {
        at_bats += res[j]
    }
    const BA = hits / at_bats
    return BA.toFixed(3).slice(1)
}

console.log(battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]]))
console.log(battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]]))
console.log(battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]]))


// Optimized Solution Code
const battingAvg1 = (arr) => {
    let totalHits = 0;
    let totalAtBats = 0;
    for (const [hits, atBats] of arr) {
        totalHits += hits;
        totalAtBats += atBats;
    }
    const average = totalHits / totalAtBats;
    return average.toFixed(3).slice(1);
};

console.log(battingAvg1([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]])); // ➞ ".286"
console.log(battingAvg1([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]])); // ➞ ".350"
console.log(battingAvg1([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]])); // ➞ ".273"