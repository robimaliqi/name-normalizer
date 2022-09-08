export const normalize = (name) => {
  const names = name.trim().split(" ");

  if (names.length <= 1) {
    return name;
  }
  
  const lastName = names[names.length - 1];
  const namesOtherThanLast = names.slice(0, -1);

  return `${lastName}, ${namesOtherThanLast.join(", ")}`;
};
