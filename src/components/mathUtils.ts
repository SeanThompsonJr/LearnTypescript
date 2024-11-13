export async function delaySquare(num: number) {
  setTimeout(function () {
    console.log(num ** 2);
  }, 2000);
}
