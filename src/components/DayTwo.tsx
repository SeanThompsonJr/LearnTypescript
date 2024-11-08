/* eslint-disable @typescript-eslint/no-unused-vars */

function DayTwo() {
  //console.log("test");
  const age: number = 23;
  const username: string = "johndoe";
  const isActive: boolean = true;

  function greetUser(name: string): string {
    return `hello ${name}`;
  }
  //console.log(greetUser("sean"));
  //console.log(age);

  //! exercise one
  function multiply(num1: number, num2: number): number {
    const sum: number = num1 * num2;

    return sum;
  }
  //console.log(multiply("test", 5));

  //!exercise two
  //object literal type -  this allows us to require that title be a string and pages be a number
  //make a object type for what a book should look like
  type Book = {
    title: string;
    pages: number;
  };
  // make a var that holds an array of books
  const Bible: Array<Book> = [
    { title: "genesis", pages: 22 },
    { title: "exodus", pages: 19 },
    { title: "leviticus", pages: 19 },
    { title: "deuteronomy", pages: 19 },
  ];
  //make a function that loops through an array of books and prints the titles
  function lofBookTitles(books: Array<Book>) {
    for (let i = 0; i < books.length; i++) {
      console.log(books[i].title);
    }
  }
  //call the function that loops through an array of books
  //lofBookTitles(Bible);
  //!exercise three
  //making an array of week days
  const daysOfWeek: Array<string> = ["monday", "tuesday", "saturday", "sunday"];
  // making a function that receives a string or number representing the day of the week and outputs true if weekend
  function isWeekend(weekend: string | number): boolean {
    let torf: boolean = false;
    if (
      weekend === "saturday" ||
      weekend === "sunday" ||
      weekend === 6 ||
      weekend === 7
    ) {
      torf = true;
    }
    return torf;
  }
  //printing yes or no if its the weekend or not
  if (isWeekend(daysOfWeek[0])) {
    console.log("yes");
  } else {
    console.log("no");
  }
  return <></>;
}

export default DayTwo;
