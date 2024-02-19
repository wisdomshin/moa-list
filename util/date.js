export const getDate = () => {
  let _date = new Date();
  let yyyy = _date.getFullYear();
  let mm = (`0` + (_date.getMonth() + 1)).slice(-2);
  let dd = (`0` + _date.getDate()).slice(-2);
  let hours = (`0` + _date.getHours()).slice(-2);
  let minutes = (`0` + _date.getMinutes()).slice(-2);

  return `${yyyy}-${mm}-${dd} ${hours}:${minutes}`;
};
