const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
  console.log('working');
});

// "heroku-postbuild": "cd client && yarn && yarn --only=dev --no-shrinkwrap && yarn build"
