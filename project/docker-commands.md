# Docker Assignment - Container Management Commands

## 1. Docker Installation

### Windows
1. Download Docker Desktop from https://www.docker.com/products/docker-desktop
2. Run the installer and follow the setup wizard
3. Restart your computer
4. Verify installation: `docker --version`

### macOS
1. Download Docker Desktop from https://www.docker.com/products/docker-desktop
2. Drag Docker to Applications folder
3. Launch Docker from Applications
4. Verify installation: `docker --version`

### Linux (Ubuntu/Debian)
```bash
# Update package index
sudo apt update

# Install prerequisite packages
sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io

# Add user to docker group
sudo usermod -aG docker $USER

# Verify installation
docker --version
```

## 2. Building and Running the Application

### Build the Docker image
```bash
# Build image with tag
docker build -t nodejs-docker-app .

# Build with specific tag and version
docker build -t nodejs-docker-app:1.0.0 .

# Build with no cache
docker build --no-cache -t nodejs-docker-app .
```

### Run the container
```bash
# Run container interactively
docker run -p 3000:3000 nodejs-docker-app

# Run container in detached mode (background)
docker run -d -p 3000:3000 --name nodejs-app nodejs-docker-app

# Run with environment variables
docker run -d -p 3000:3000 -e NODE_ENV=production --name nodejs-app nodejs-docker-app

# Run with volume mount
docker run -d -p 3000:3000 -v $(pwd)/logs:/app/logs --name nodejs-app nodejs-docker-app
```

## 3. Container Management Commands

### List containers
```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# List containers with formatting
docker ps --format "table {{.ID}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}"
```

### Container lifecycle
```bash
# Start a stopped container
docker start nodejs-app

# Stop a running container
docker stop nodejs-app

# Restart a container
docker restart nodejs-app

# Pause a container
docker pause nodejs-app

# Unpause a container
docker unpause nodejs-app

# Kill a container (force stop)
docker kill nodejs-app
```

### Container logs and monitoring
```bash
# View container logs
docker logs nodejs-app

# Follow logs in real-time
docker logs -f nodejs-app

# View last 50 lines of logs
docker logs --tail 50 nodejs-app

# View logs with timestamps
docker logs -t nodejs-app

# Check container resource usage
docker stats nodejs-app

# Get container details
docker inspect nodejs-app
```

### Execute commands in containers
```bash
# Execute interactive bash shell
docker exec -it nodejs-app /bin/bash

# Execute interactive shell (Alpine Linux)
docker exec -it nodejs-app /bin/sh

# Execute a single command
docker exec nodejs-app ls -la

# Execute command as root user
docker exec -u root -it nodejs-app /bin/bash
```

### Container cleanup
```bash
# Remove a stopped container
docker rm nodejs-app

# Force remove a running container
docker rm -f nodejs-app

# Remove all stopped containers
docker container prune

# Remove container when it exits
docker run --rm -p 3000:3000 nodejs-docker-app
```

## 4. Image Management

### List and manage images
```bash
# List all images
docker images

# Remove an image
docker rmi nodejs-docker-app

# Remove unused images
docker image prune

# Remove all unused images
docker image prune -a

# Tag an image
docker tag nodejs-docker-app nodejs-docker-app:latest
```

## 5. Docker Compose Commands

### Basic Compose operations
```bash
# Start services
docker-compose up

# Start services in background
docker-compose up -d

# Stop services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# View logs
docker-compose logs

# Follow logs
docker-compose logs -f

# Scale a service
docker-compose up -d --scale nodejs-app=3
```

### Individual service management
```bash
# Start specific service
docker-compose start nodejs-app

# Stop specific service
docker-compose stop nodejs-app

# Restart specific service
docker-compose restart nodejs-app

# View service logs
docker-compose logs nodejs-app
```

## 6. Network and Volume Management

### Networks
```bash
# List networks
docker network ls

# Create a network
docker network create my-network

# Connect container to network
docker network connect my-network nodejs-app

# Disconnect container from network
docker network disconnect my-network nodejs-app
```

### Volumes
```bash
# List volumes
docker volume ls

# Create a volume
docker volume create my-volume

# Remove unused volumes
docker volume prune

# Inspect volume
docker volume inspect my-volume
```

## 7. Health Checks and Monitoring

### Check container health
```bash
# View health status
docker inspect --format='{{.State.Health.Status}}' nodejs-app

# View health check logs
docker inspect --format='{{range .State.Health.Log}}{{.Output}}{{end}}' nodejs-app
```

## 8. Useful Commands for Development

### Development workflow
```bash
# Build and run in one command
docker build -t nodejs-docker-app . && docker run -p 3000:3000 nodejs-docker-app

# Quick cleanup and restart
docker stop nodejs-app && docker rm nodejs-app && docker run -d -p 3000:3000 --name nodejs-app nodejs-docker-app

# Copy files from container
docker cp nodejs-app:/app/package.json ./

# Copy files to container
docker cp ./config.json nodejs-app:/app/
```

### System cleanup
```bash
# Remove all stopped containers, unused networks, images, and build cache
docker system prune -a

# Show disk usage
docker system df

# Remove everything (use with caution!)
docker system prune -a --volumes
```


## 9. Advanced Docker Features

### Multi-stage builds
The Dockerfile includes multi-stage build capabilities for production optimization.

### Security best practices implemented:
- Non-root user execution
- Minimal base image (Alpine Linux)
- .dockerignore to exclude sensitive files
- Health checks for container monitoring
- Proper signal handling for graceful shutdown

### Container orchestration:
- Docker Compose for multi-service applications
- Network isolation
- Volume management
- Service dependencies
- Health checks
- Restart policies