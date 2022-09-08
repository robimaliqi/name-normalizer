export const normalize = (name) => {
  const names = name.trim().split(" ");
  if (names.length <= 1) {
    return name;
  }

  const firstName = names[0];
  const lastName = names[names.length - 1];
  const middleNames = names.slice(1, -1);
  const middleInitials = middleNames.map((n) => `${n.substring(0, 1)}.`);
  const namesOtherThanLast = [firstName, ...middleInitials];

  return `${lastName}, ${namesOtherThanLast.join(" ")}`;
};
