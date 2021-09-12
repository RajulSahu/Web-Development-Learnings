const day = prompt("ENTER A DAY!");
const dayLower = day.toLowerCase();

switch (dayLower) {
  case "monday":
    console.log("ITs MONDAY!");
    break;
  case "tuesday":
    console.log("ITs TUESDAY!");
    break;
  case "wednesday":
    console.log("ITs WEDNESDAY!");
    break;
  case "thursday":
    console.log("ITs THURSDAY!");
    break;
  case "friday":
    console.log("ITs FRIDAY!");
    break;
  case "saturday":
    console.log("ITs SATURDAY!");
    break;
  case "sunday":
    console.log("ITs SUNDAY!");
    break;
  default:
    console.log("INVALID DAY ENTERED!");
}
