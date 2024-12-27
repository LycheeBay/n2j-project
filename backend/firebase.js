const admin = require("firebase-admin");
require('dotenv').config();
var serviceAccount = {
  "type": "service_account",
  "project_id": "housing-app-f3e66",
  "private_key_id": `${process.env.FIREBASE_PRIVATE_KEY_ID}`,
  "private_key": `${process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')}`,
  "client_email": "firebase-adminsdk-e7j2g@housing-app-f3e66.iam.gserviceaccount.com",
  "client_id": "114590372755611075288",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-e7j2g%40housing-app-f3e66.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

console.log(process.env.PRIVATE_KEY_ID)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
});

const db = admin.firestore();

 const auth = (req, res, next) => {
  try {
    const tokenId = req.get("Authorization").split("Bearer ")[1];
    return admin
      .auth()
      .verifyIdToken(tokenId)
      .then((decoded) => {
        req.token = decoded;
        next();
      })
      .catch((err) => res.status(401).send(err));
  } catch (e) {
    res.status(400).send("Errors");
  }
};
module.exports = {db, auth}