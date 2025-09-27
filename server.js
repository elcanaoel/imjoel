const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static('.', {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Explicitly serve static files (needed for Vercel)
app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'styles.css'), {
    headers: {
      'Content-Type': 'text/css'
    }
  });
});

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'script.js'), {
    headers: {
      'Content-Type': 'application/javascript'
    }
  });
});

app.get('/security.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'security.js'), {
    headers: {
      'Content-Type': 'application/javascript'
    }
  });
});

app.get('/profile-pic.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'profile-pic.jpg'), {
    headers: {
      'Content-Type': 'image/jpeg'
    }
  });
});

// Serve manifest.json with correct content type
app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'manifest.json'), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
});

// Serve the main index.html file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view your portfolio`);
});