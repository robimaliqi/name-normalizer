export const normalize = (name) => {
  const names = name.trim().split(" ");
  if (names.length <= 1) {
    return name;
  }

  const firstName = first(names);
  let middleName;
  let middleInitial;
  let lastName;

  if (names.length === 3) {
    middleName = names[1];
    middleInitial = initialize(middleName);
    lastName = names[2];
  } else {
    lastName = names[1];
  }

  return `${lastName}, ${firstName}${middleInitial ? ` ${middleInitial}` : ""}`;
};

const first = (array) => array[0];
const last = (array) => array[array.length - 1];

const initialize = (name) => {
  if (name.length > 1) {
    return `${name.slice(0, 1)}.`;
  } else {
    return name;
  }
};
