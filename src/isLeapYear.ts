function isLeapYear(year: number): boolean {
  let isLY = false;
  if (year % 4 !== 0) {
    isLY = false;
  } else if (year % 400 === 0) {
    isLY = true;
  } else if (year % 100 === 0) {
    isLY = false;
  } else {
    isLY = true;
  }

  return isLY;
}

export default isLeapYear;
