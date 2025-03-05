const scoresUlRef = document.querySelector("#scores")

const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38]

for (let index = 0; index < scores.length; index++) {
    const score = scores[index];
    console.log(score);
    
    scoresUlRef.innerHTML += "<li>" + score + "</li>";
}

const avgScorePRef = document.querySelector("#avgScore")

function calAvg(scores) {
    let sum = 0;
    for (let index = 0; index < scores.length; index++) {
        sum += scores[index];
    }
    return sum / scores.length;
}

const avgScore = calAvg(scores);
console.log("Average Score:", avgScore);

avgScorePRef.innerHTML += avgScore