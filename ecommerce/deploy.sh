docker stop helloworld
docker rm helloworld
docker rmi aprynur/helloworld
docker run -d --name helloworld -p 5000:5000 aprynur/helloworld:latest
