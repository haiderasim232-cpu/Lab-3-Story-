let deskImage = "images/desk.jpg";
let airplaneImage = "images/airplane.jpg";
let beachImage = "images/beach.jpg";
let beginningImage = document.getElementById("beginning-image");
let middleImage = document.getElementById("middle-image");
let endImage = document.getElementById("end-image");
let beginningCaption = document.getElementById("beginning-caption");
let middleCaption = document.getElementById("middle-caption");
let endCaption = document.getElementById("end-caption");
let storyTitle = document.getElementById("story-title");
let storyDescription = document.getElementById("story-description");
let escapeButton = document.getElementById("escape-button");
let realityButton = document.getElementById("reality-button");
function showEscape() {
  beginningImage.src = deskImage;
  middleImage.src = airplaneImage;
  endImage.src = beachImage;
  beginningImage.alt = "A person working at a desk";
  middleImage.alt = "A view from an airplane window";
  endImage.alt = "A peaceful beach scene";
  storyTitle.innerHTML = "The Escape";
  storyDescription.innerHTML =
    "Everyday routine gives way to adventure. " +
    "A flight carries someone away from their desk " +
    "and toward a peaceful beach holiday.";
  beginningCaption.innerHTML = "The everyday routine.";
  middleCaption.innerHTML = "A journey away.";
  endCaption.innerHTML = "A chance to escape.";
  escapeButton.setAttribute("aria-pressed", "true");
  realityButton.setAttribute("aria-pressed", "false");
}
function showReality() {
  beginningImage.src = beachImage;
  middleImage.src = airplaneImage;
  endImage.src = deskImage;
  beginningImage.alt = "A peaceful beach scene";
  middleImage.alt = "A view from an airplane window";
  endImage.alt = "A person working at a desk";
storyTitle.innerHTML = "Back to Reality";
  storyDescription.innerHTML =
    "A peaceful holiday comes to an end. " +
    "A flight brings someone home to their everyday routine, " +
    "with memories of the beach left behind.";
  beginningCaption.innerHTML = "The last moments of a holiday.";
  middleCaption.innerHTML = "The journey home.";
  endCaption.innerHTML = "Back to the everyday routine.";
  escapeButton.setAttribute("aria-pressed", "false");
  realityButton.setAttribute("aria-pressed", "true");
}
escapeButton.addEventListener("click", showEscape);
realityButton.addEventListener("click", showReality);
showEscape();