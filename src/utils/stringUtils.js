export const getFirstCapitalLetter = (word) => {
  if (!word) return "";
  return word.charAt(0).toUpperCase();
};

export const capitalizeFirstLetter = (word) => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const truncateText = (text, number) => {
  if (text.length <= number) {
    return text;
  }
  return text.slice(0, number) + "...";
};
