# Firebase connection fix

The debug log shows `firebase init hosting` was cancelled with SIGINT, so Firebase never created `firebase.json` or `.firebaserc`. This package adds both files and points the project to `event-41b5e`.

## Run these commands from this folder

```bash
firebase login
firebase use event-41b5e
firebase deploy --only firestore:rules,hosting
```

## Important

1. In Firebase Console, open **Build > Firestore Database** and create the database if it does not exist.
2. Do not open the HTML pages by double-clicking them with a `file:///` URL. ES module imports can fail there. Use Firebase Hosting or a local server:

```bash
npx serve .
```

3. Open `/form.html` to submit and `/dashboard.html` to see live results.
4. The pages now show the actual Firebase error code when a connection or permission problem occurs.
