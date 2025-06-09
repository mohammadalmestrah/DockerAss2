const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Docker Node.js App - Mohammad ALMESTRAH</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          text-align: center;
          max-width: 700px;
          position: relative;
          overflow: hidden;
        }
        .container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
        }
        h1 {
          color: #333;
          margin-bottom: 0.5rem;
          font-size: 2.2rem;
        }
        .assignment-header {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 1.5rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }
        .student-info {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        .professor-info {
          font-size: 1rem;
          opacity: 0.9;
        }
        .info {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 10px;
          margin: 1rem 0;
          border-left: 4px solid #667eea;
        }
        .docker-info {
          background: linear-gradient(135deg, #e3f2fd, #f3e5f5);
          padding: 1.5rem;
          border-radius: 10px;
          margin: 1rem 0;
          border-left: 4px solid #2196f3;
        }
        code {
          background: #f1f3f4;
          padding: 4px 8px;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
        }
        .status {
          color: #28a745;
          font-weight: bold;
          font-size: 1.2rem;
          margin: 1rem 0;
        }
        .api-list {
          text-align: left;
          background: white;
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
        }
        .api-list li {
          margin: 0.5rem 0;
          padding: 0.3rem 0;
        }
        .footer {
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 2px solid #eee;
          color: #666;
          font-size: 0.9rem;
        }
        .docker-icon {
          font-size: 2rem;
          margin-right: 0.5rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="assignment-header">
          <div class="student-info">
            <strong>📚 Assignment Submitted by: Mohammad ALMESTRAH</strong>
          </div>
          <div class="professor-info">
            👨‍🏫 Submitted to: Dr. Mohammad HAMZE
          </div>
        </div>

        <h1><span class="docker-icon">🐳</span>Docker Node.js Application</h1>
        <div class="status">✅ Assignment Completed Successfully!</div>
        
        <div class="info">
          <h3>📊 Application Information</h3>
          <p><strong>Node.js Version:</strong> ${process.version}</p>
          <p><strong>Platform:</strong> ${process.platform}</p>
          <p><strong>Port:</strong> ${PORT}</p>
          <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'development'}</p>
          <p><strong>Container ID:</strong> ${process.env.HOSTNAME || 'local-development'}</p>
        </div>

        <div class="docker-info">
          <h3>🐳 Docker Assignment Requirements Met</h3>
          <p><strong>✅ Docker Installation:</strong> Complete installation guide provided for all OS</p>
          <p><strong>✅ Container Management:</strong> Comprehensive container lifecycle management</p>
          <p><strong>✅ Node.js Application:</strong> Feature-rich web application running in container</p>
          
          <div class="api-list">
            <h4>🔗 Available API Endpoints:</h4>
            <ul>
              <li><code>GET /</code> - Main application interface</li>
              <li><code>GET /api/health</code> - Container health monitoring</li>
              <li><code>GET /api/info</code> - Detailed system information</li>
              <li><code>POST /api/echo</code> - Echo service for testing</li>
              <li><code>GET /api/student</code> - Student assignment information</li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <p><strong>Docker Assignment 2</strong> - Container Management & Node.js Application</p>
          <p>Developed with ❤️ using Docker, Node.js, and Express.js</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    pid: process.pid,
    student: 'Mohammad ALMESTRAH',
    professor: 'Dr. Mohammad HAMZE',
    assignment: 'Docker Assignment 2'
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    application: 'Docker Node.js Assignment',
    version: '1.0.0',
    student: 'Mohammad ALMESTRAH',
    professor: 'Dr. Mohammad HAMZE',
    assignment: 'Docker Assignment 2 - Container Management',
    node_version: process.version,
    platform: process.platform,
    architecture: process.arch,
    environment: process.env.NODE_ENV || 'development',
    container_id: process.env.HOSTNAME || 'not-containerized',
    port: PORT,
    requirements_met: {
      docker_installation: true,
      container_management: true,
      nodejs_application: true
    }
  });
});

app.get('/api/student', (req, res) => {
  res.json({
    student: {
      name: 'Mohammad ALMESTRAH',
      assignment: 'Docker Assignment 2',
      submission_date: new Date().toISOString(),
      requirements_completed: [
        'Docker installation and configuration',
        'Container lifecycle management',
        'Node.js application containerization',
        'Docker Compose orchestration',
        'Health monitoring and logging'
      ]
    },
    professor: {
      name: 'Dr. Mohammad HAMZE',
      course: 'Container Technologies'
    },
    technical_details: {
      containerized: process.env.HOSTNAME ? true : false,
      container_id: process.env.HOSTNAME || 'local-development',
      runtime: 'Node.js ' + process.version,
      framework: 'Express.js'
    }
  });
});

app.post('/api/echo', (req, res) => {
  const { message } = req.body;
  res.json({
    echo: message || 'Hello from Mohammad ALMESTRAH\'s Docker container!',
    timestamp: new Date().toISOString(),
    container: process.env.HOSTNAME || 'local',
    student: 'Mohammad ALMESTRAH',
    professor: 'Dr. Mohammad HAMZE'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`,
    student: 'Mohammad ALMESTRAH',
    available_routes: [
      'GET /',
      'GET /api/health',
      'GET /api/info',
      'GET /api/student',
      'POST /api/echo'
    ]
  });
});

// Start server
app.listen(PORT, HOST, () => {
  console.log(`🐳 Mohammad ALMESTRAH's Docker Node.js app running on http://${HOST}:${PORT}`);
  console.log(`👨‍🎓 Assignment for Dr. Mohammad HAMZE`);
  console.log(`📊 Health check: http://${HOST}:${PORT}/api/health`);
  console.log(`ℹ️  System info: http://${HOST}:${PORT}/api/info`);
  console.log(`🎓 Student info: http://${HOST}:${PORT}/api/student`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});