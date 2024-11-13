/* eslint-disable @typescript-eslint/no-explicit-any */

//!in here we define how to get the user
export async function fetchUserData(url: string) {
  try {
    //waiting for the data from the given url
    const response = await fetch(url);
    //convert the data to json so it can be manipulated
    return response.json();
  } catch (error) {
    console.error("there is an erro here" + error);
  }
}
