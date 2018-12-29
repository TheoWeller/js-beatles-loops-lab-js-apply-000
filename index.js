
let allMusicians = [];

function theBeatlesPlay(musicians, instruments) {
  //const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  //const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

for (var i = 0; i < musicians.length; i++) {
  allMusicians.push(musicians[i] + " plays " + instruments[i]);
  }
return allMusicians;
};


function johnLennonFacts() {
    var facts = ["He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"];

    const loudBeatlesFacts = [];
    var i = 0;

    while (i < facts.length) {
        loudBeatlesFacts.push(facts[i] +"!!!");
        i++;
    }
    return loudBeatlesFacts;
}


function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;

    } while (num < 15);

    return love;
}
