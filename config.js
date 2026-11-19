/* Live version: fill in the values from the Firebase console (see FIREBASE-SETUP.md).
   Leave everything empty to run without a database (single file, or the Python server). */
window.PP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyAB703TA3Uh-AibGZ-MtU07pJPIwrByeKk",          // Project settings -> General -> Your apps -> apiKey (it is meant to be public)
    databaseURL: "https://ping-pong-tournament-2887e-default-rtdb.europe-west1.firebasedatabase.app",     // e.g. "https://my-project-default-rtdb.europe-west1.firebasedatabase.app"
    organiserEmail: "edam.feki@siemens.com",   // only used when multi is false (one event, one organiser)
    multi: true                                // true = organisers register and create several events (see FIREBASE-MULTI-SETUP.md); false = the single event of the first version
  }
};
