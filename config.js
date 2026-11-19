/* Live version: fill in the values from the Firebase console (see FIREBASE-SETUP.md).
   Leave everything empty to run without a database (single file, or the Python server). */
window.PP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyAB703TA3Uh-AibGZ-MtU07pJPIwrByeKk",          // Project settings -> General -> Your apps -> apiKey (it is meant to be public)
    databaseURL: "https://sports-event-organizer-83541-default-rtdb.firebaseio.com",     // e.g. "https://my-project-default-rtdb.europe-west1.firebasedatabase.app"  // only used when multi is false (one event, one organiser)
    multi: true                                // true = organisers register and create several events (see FIREBASE-MULTI-SETUP.md); false = the single event of the first version
  }
};
