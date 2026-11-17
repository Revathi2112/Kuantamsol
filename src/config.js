// Version 4 settings: which hero visual and which interactive effects are on.
// Subscribe form -> your Gmail. Paste your Google Apps Script Web app URL (ends with /exec) between the quotes.
// Step-by-step: GOOGLE_MAIL_SETUP.md
export default {
  mailScript: "https://script.google.com/macros/s/AKfycbyrA_suhrpepL3CpLPfkNVMQ6Uf-3bQ2i79svGWwNoLFbQih574TGl2p1xFE7JspdIQbg/exec",
  id: 4,
  heroVisual: "growth",      // "growth" | "iso" | "network"
  featureVisuals: false,    // animated visuals + wide cards in Key Features
  spot: false,              // cursor spotlight on cards
  tilt: false,              // gentle 3D tilt on cards
  parallax: false,          // hero visual follows the pointer
  progress: false,          // scroll progress bar
};
