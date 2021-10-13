function login_clicked(element) {
  switch (element.innerHTML) {
    case "Add":
      element.innerHTML = "Trail"
      break;
    case "Trail":
      element.innerHTML = "None";
      break;
    default:
      break;
  }
}