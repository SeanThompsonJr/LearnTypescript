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
  console.log(isIsogram("aba"));
  console.log(isIsogram("christ"));
  console.log(isIsogram("bbb"));
  console.log("moose" + isIsogram("mOose"));

  return <div></div>;
}
