let toggled = false;

function buttonAction() {
  if(!toggled) {
    toggled = true;
    document.getElementById("text-button").style.display = none;
    return;
  }
  if(toggled) {
    toggled = false;
    document.getElementById("text-button").style.display = block;
    return;
  }
}