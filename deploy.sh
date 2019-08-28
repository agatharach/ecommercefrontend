docker stop react
docker rm react
docker rmi agatharach/react:latest
docker run -d --name react -p 3000:80 agatharach/react:latest
