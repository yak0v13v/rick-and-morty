export function cn(...classes: Array<false | null | string | undefined>) {
  const len = classes.length;
  let str = "";

  for (let i = 0; i < len; i++) {
    if (classes[i]) {
      str += (str && " ") + classes[i];
    }
  }
  return str;
}
