export const command = "test1";
export const desc = "test1";
export const builder = {};
export const middlewares = []; // Comment out this line of code will cause errors

export const handler = function (argv) {
  console.log("argv", argv);
  console.log("1 + 1 =", argv.$utils.sum(1, 1));
};
