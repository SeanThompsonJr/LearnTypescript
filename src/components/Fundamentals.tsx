/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

export default function Fundamentals() {
  //fundamental practice
  function maskify(cc: string): string {
    let lastFour: string = "";
    let mask: string = "";
    if (cc.length > 4) {
      for (let i = 0; i < cc.length - 4; i++) {
        mask += "*";
      }
      lastFour = cc.slice(cc.length - 4, cc.length);
      cc = mask + lastFour;
    }
    return cc;
  }

  function isIsogram(str: string): boolean {
    let splitString: Array<string> = [];
    const usedLetters: Array<string> = [];
    //splits the string into an array
    splitString = str.split("");
    //loop through the string comparing the one letter to the rest
    for (let i: number = 0; i < splitString.length; i++) {
      //if the used letters array has anything in split then return false
      if (usedLetters.includes(splitString[i].toLocaleLowerCase()))
        return false;
      //if the used letters array does not have anything in split then add it to used letters
      usedLetters.push(splitString[i].toLocaleLowerCase());
    }
    /**
     * word: aba
     *  a compares to used returns false; used : [] before push
     *  b compares to used returns false; used : [a] before push
     *  a compares to used returns true; used : [a,b] before push
     */
    //console.log(splitString);
    return true;
  }
  // console.log(isIsogram("aba"));
  // console.log(isIsogram("christ"));
  // console.log(isIsogram("bbb"));
  // console.log("moose" + isIsogram("mOose"));

  function isSquare(n: number): boolean {
    const perfect = Math.sqrt(n);
    if (Number.isInteger(perfect)) {
      return true;
    }
    return false;
  }
  // console.log(isSquare(-1));
  // console.log(isSquare(0));
  // console.log(isSquare(3));

  const likes = (a: string[]): string => {
    let likesString = "";
    switch (a.length) {
      case 0:
        likesString = "no one likes this";
        break;
      case 1:
        likesString = `${a[0]} likes this`;
        break;
      case 2:
        likesString = `${a[0]} and ${a[1]}like this`;
        break;
      case 3:
        likesString = `${a[0]}, ${a[1]} and ${a[2]}like this`;
        break;
      default:
        likesString = `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
    }
    return likesString;
  };
  // console.log(likes(["Alex", "Jacob", "Mark", "Max", "tom", "randy"]));

  const isPangram = (phrase: string): boolean => {
    const lettersUsed: string[] = [];
    const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
    const lowerPhrase = phrase.toLowerCase();
    //loop through each letter of phrase
    for (let i = 0; i < alphabet.length; i++) {
      //check if each letter of phrase is includes each letter from the alphabet
      if (lowerPhrase.includes(alphabet[i])) {
        lettersUsed.push(alphabet[i]);
      }
    }

    if (lettersUsed.length === 26) {
      return true;
    } else {
      return false;
    }
  };
  // console.log(isPangram("the quick"));
  // console.log(isPangram("The Quick brown Fox jumps over the lazy dog."));

  function duplicateEncode(word: string) {
    const lowerWord = word.toLowerCase();
    //an obj named charCount that accepts an obj and returns an obj
    // that has a propery of key that represents each letter and is a string type
    //and returns a number
    const charCount: { [key: string]: number } = {};

    //count of letters that repeated
    for (let i = 0; i < lowerWord.length; i++) {
      //this is lost after the for loop is done
      const char = lowerWord[i];
      //this is not lost after the loop is done
      charCount[char] = (charCount[char] || 0) + 1;
    }

    let encodedString = "";
    for (let i = 0; i < lowerWord.length; i++) {
      //so we can reuse the name here
      const char = lowerWord[i];
      //so we can use it to build the string
      //if the charCount value at the index of char is greater than 1 then add the first parenthesis if not the second
      encodedString += charCount[char] > 1 ? ")" : "(";
      console.log(encodedString);
    }

    return encodedString;
  }
  console.log(duplicateEncode("tommm"));
  console.log(duplicateEncode("tom"));
  console.log(duplicateEncode("(( @"));

  /**
   * function isIsogram(str: string): boolean {
    let splitString: Array<string> = [];
    const usedLetters: Array<string> = [];
    //splits the string into an array
    splitString = str.split("");
    //loop through the string comparing the one letter to the rest
    for (let i: number = 0; i < splitString.length; i++) {
      //if the used letters array has anything in split then return false
      if (usedLetters.includes(splitString[i].toLocaleLowerCase()))
        return false;
      //if the used letters array does not have anything in split then add it to used letters
      usedLetters.push(splitString[i].toLocaleLowerCase());
    }

    return true
   */
  return <div></div>;
}
