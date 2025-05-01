export const command = "test2";
export const desc = "test2";
export const builder = {};
export const middlewares = []; // Comment out this line of code will cause errors

export const handler = function (argv) {
  console.log("argv", argv);
  console.log("2 + 3 =", argv.$utils.sum(1, 1));
};
