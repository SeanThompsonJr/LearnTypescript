export class DataService {
  async getPostTitles() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //in order to access the response we must wait for the json parsing
      const data = await response.json();
      console.log(" this is inside data", data);
      //figure out to use date from the inside of the method that calls it
      //search in the titles property
      //if it has qui anywhere in the sting
      //print that out
      const filteredData = data.filter((user: { title: string }) =>
        user.title.includes("qui")
      );
      const filteredArray: Array<string> = [];
      filteredData.forEach((data: { title: string }) => {
        filteredArray.push(data.title);
      });
      console.log(filteredArray);
    } catch (error) {
      console.error("theres an error here" + error);
    }
  }
}
