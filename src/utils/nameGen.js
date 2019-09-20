import { adjectives } from "./adjectives";
import { nouns } from "./nouns";
import shuffle from "lodash.shuffle";

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const randomName = () => {
  const nounsShuffled = shuffle(nouns);
  const adjectivesShuffled = shuffle(adjectives);
  return `${capitalizeFirst(adjectivesShuffled[0])}${capitalizeFirst(
    nounsShuffled[0]
  )}`;
};
