export const normalize = (name) => {
  const names = name.trim().split(" ");
  if (names.length <= 1) {
    return name;
  }

  const firstName = first(names);
  const lastName = last(names);
  const middleNames = names.slice(1, -1);
  const middleInitials = middleNames.map(initialize);

  const namesOtherThanLast = [firstName, ...middleInitials];
  return `${lastName}, ${namesOtherThanLast.join(" ")}`;
};

const first = (array) => array[0];
const last = (array) => array[array.length - 1];

const initialize = (name) => {
  if (name.length > 1) {
    return `${name.substring(0, 1)}.`;
  } else {
    return name;
  }
};
