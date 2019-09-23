var adjectives = require("./adjectives");
var nouns = require("./nouns");
var shuffle = require("lodash.shuffle");

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = () => {
  const nounsShuffled = shuffle(nouns);
  const adjectivesShuffled = shuffle(adjectives);
  return `${capitalizeFirst(adjectivesShuffled[0])}${capitalizeFirst(
    nounsShuffled[0]
  )}`;
};
