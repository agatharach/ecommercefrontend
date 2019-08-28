sudo docker stop react
sudo docker rm react
sudo docker rmi agatharach/react:latest
sudo docker run -d --name react -p 3000:80 agatharach/react:latest
