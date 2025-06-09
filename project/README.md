# Docker Node.js Assignment - Mohammad ALMESTRAH

**Student:** Mohammad ALMESTRAH  
**Professor:** Dr. Mohammad HAMZE  
**Assignment:** Docker Assignment 2 - Container Management & Node.js Application

This project demonstrates Docker containerization of a Node.js application with comprehensive container management examples.

## 🎯 Assignment Objectives

1. ✅ **Install and configure Docker on any OS**
2. ✅ **Manage containers** (create, run, stop, monitor, remove)
3. ✅ **Create and run a small Node.js application in a container**

## 👨‍🎓 Student Information

- **Name:** Mohammad ALMESTRAH
- **Course:** Container Technologies
- **Instructor:** Dr. Mohammad HAMZE
- **Assignment:** Docker Assignment 2
- **Submission Date:** $(date)

## 🚀 Quick Start

### 1. Install Docker
Follow the installation guide in `docker-commands.md` for your operating system.

### 2. Build and Run
```bash
# Install dependencies
npm install

# Build Docker image
npm run docker:build

# Run container
npm run docker:run-detached

# Check if it's running
docker ps
```

### 3. Test the Application
Open your browser and visit:
- http://localhost:3000 - Main application (shows student/professor info)
- http://localhost:3000/api/health - Health check with assignment details
- http://localhost:3000/api/info - System information
- http://localhost:3000/api/student - Student assignment information

## 📁 Project Structure

```
docker-nodejs-app/
├── server.js              # Main Node.js application (personalized)
├── package.json           # Dependencies and scripts
├── Dockerfile             # Docker image configuration
├── docker-compose.yml     # Multi-service orchestration
├── .dockerignore          # Files to exclude from build
├── docker-commands.md     # Comprehensive Docker commands guide
└── README.md              # This file
```

## 🐳 Docker Features Demonstrated

### Basic Container Operations
- Building custom images with personalized branding
- Running containers (interactive and detached)
- Port mapping and environment variables
- Container lifecycle management

### Advanced Features
- Multi-stage builds for optimization
- Health checks for monitoring with student info
- Non-root user for security
- Volume mounts for data persistence
- Docker Compose for orchestration

### Container Management
- Starting, stopping, and restarting containers
- Viewing logs and monitoring resources
- Executing commands in running containers
- Cleaning up containers and images

## 📊 Application Features

### Web Interface
- Personalized header showing Mohammad ALMESTRAH → Dr. Mohammad HAMZE
- Modern, responsive UI with assignment branding
- Real-time system information
- Container status display
- Docker assignment completion confirmation

### API Endpoints
- `GET /` - Personalized web interface
- `GET /api/health` - Health check with student/professor info
- `GET /api/info` - Detailed system information including assignment details
- `GET /api/student` - Complete student assignment information
- `POST /api/echo` - Echo service with personalized responses

## 🛠️ Available NPM Scripts

```bash
# Application
npm start                    # Start Mohammad ALMESTRAH's Node.js server
npm run dev                  # Development mode

# Docker - Basic
npm run docker:build         # Build Docker image
npm run docker:run           # Run container (interactive)
npm run docker:run-detached  # Run container (background)

# Docker - Management
npm run docker:stop          # Stop container
npm run docker:remove        # Remove container
npm run docker:logs          # View container logs
npm run docker:exec          # Access container shell

# Docker Compose
npm run compose:up           # Start all services
npm run compose:down         # Stop all services
```

## 🔧 Container Management Examples

### Basic Operations
```bash
# Build Mohammad ALMESTRAH's Docker image
docker build -t nodejs-docker-app .

# Run container with student branding
docker run -d -p 3000:3000 --name mohammad-nodejs-app nodejs-docker-app

# Check status
docker ps

# View logs
docker logs mohammad-nodejs-app

# Stop container
docker stop mohammad-nodejs-app

# Remove container
docker rm mohammad-nodejs-app
```

### Advanced Operations
```bash
# Run with environment variables
docker run -d -p 3000:3000 -e NODE_ENV=production -e STUDENT="Mohammad ALMESTRAH" --name mohammad-nodejs-app nodejs-docker-app

# Execute commands in container
docker exec -it mohammad-nodejs-app /bin/sh

# Monitor resource usage
docker stats mohammad-nodejs-app

# Copy files to/from container
docker cp ./config.json mohammad-nodejs-app:/app/
docker cp mohammad-nodejs-app:/app/logs ./logs
```

## 🐳 Docker Compose Usage

Start the complete application stack:
```bash
# Start all services for Mohammad ALMESTRAH's assignment
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f

# Scale the application
docker-compose up -d --scale nodejs-app=3

# Stop all services
docker-compose down
```

## 🔍 Health Monitoring

The application includes built-in health checks with student information:

```bash
# Check health status with assignment details
curl http://localhost:3000/api/health

# Get student assignment information
curl http://localhost:3000/api/student

# Docker health check
docker inspect --format='{{.State.Health.Status}}' mohammad-nodejs-app
```

## 🧹 Cleanup Commands

```bash
# Remove specific container
docker rm -f mohammad-nodejs-app

# Remove image
docker rmi nodejs-docker-app

# Clean up everything
docker system prune -a
```

## 📝 Assignment Completion Checklist

- [x] Docker installed and configured
- [x] Node.js application created with personalized branding
- [x] Dockerfile written with best practices
- [x] Container built successfully
- [x] Application running in container with student/professor information
- [x] Container management demonstrated
- [x] Health checks implemented with assignment details
- [x] Docker Compose configuration
- [x] Security best practices applied
- [x] Comprehensive documentation provided
- [x] Personalized features added (Mohammad ALMESTRAH → Dr. Mohammad HAMZE)

## 🎉 Success Criteria Met

1. **Docker Installation**: Complete installation guide for Windows, macOS, and Linux
2. **Container Management**: Full lifecycle management with 30+ essential commands
3. **Node.js Application**: Feature-rich web application with personalized branding
4. **Best Practices**: Security, optimization, and monitoring implemented
5. **Documentation**: Comprehensive guides and examples provided
6. **Personalization**: Student and professor information integrated throughout

## 👨‍🎓 Assignment Submission

**Student:** Mohammad ALMESTRAH  
**Professor:** Dr. Mohammad HAMZE  
**Course:** Container Technologies  
**Assignment:** Docker Assignment 2  

Visit http://localhost:3000 to see Mohammad ALMESTRAH's running Docker application and confirm the assignment completion! 🐳

---

*Developed with ❤️ by Mohammad ALMESTRAH for Dr. Mohammad HAMZE's Container Technologies course*