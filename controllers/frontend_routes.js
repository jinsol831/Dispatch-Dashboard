const path = require('path');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
  });

  app.get('/checkin/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/checkin.html'));
  });

  app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/dispatcher.html'));
  });

  app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/css/style.css'));
  });

  app.get('/login.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/js/login.js'));
  });

  app.get('/camera.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/js/camera.js'));
  });

  app.get('/checkin.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/js/checkin.js'));
  });

  app.get('/dashboard.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/js/dashboard.js'));
  });

  app.get('/bg.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/images/bg.jpg'));
  });
};
