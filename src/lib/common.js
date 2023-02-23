export function calcAge(birth) {
  if (!birth) {
    return 0;
  }

  if (birth.length < 4) {
    return 0;
  }

  const date = new Date();
  const year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  birth = birth.replace("-", "").replace("-", "");

  const birthYear = birth.substr(0, 4);
  const koreanAge = year - birthYear + 1;

  return koreanAge;
}


export function parseToKoreanDateTime(isoDate, mode) {
  var tDate = new Date(isoDate);
  const year = tDate.getFullYear();
  const month =
    tDate.getMonth() + 1 < 10
      ? "0" + (tDate.getMonth() + 1)
      : tDate.getMonth() + 1;
  const day = tDate.getDate() < 10 ? "0" + tDate.getDate() : tDate.getDate();
  const hour =
    tDate.getHours() < 10 ? "0" + tDate.getHours() : tDate.getHours();
  const minute =
    tDate.getMinutes() < 10 ? "0" + tDate.getMinutes() : tDate.getMinutes();
  switch (mode) {
    case "yyyy-mm-dd":
      return year + "-" + month + "-" + day;
    case "yyyy":
      return year;
    case "mm":
      return month;
    case "dd":
      return day;
    case "yyyymmdd":
      return year + "-" + month + "-" + day;
    case "yy-mm-dd":
      return year.toString().substring(2) + "-" + month + "-" + day;
    case "date":
      return year + "." + month + "." + day;
    case "mmddhhmm":
      return month + "." + day + " " + hour + ":" + minute;

    default:
      return year + "." + month + "." + day + " " + hour + ":" + minute;
  }
}

