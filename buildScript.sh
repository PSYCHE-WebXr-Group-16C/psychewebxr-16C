npm install
echo 'Installed modules.'

npm run build
echo 'Build finsihed.'

(cd /mnt/dev1/capstone/docker && sudo docker-compose down)
echo 'Bringing down apache server.'

sudo rm -rf /mnt/dev1/capstone/docker/build_old
echo 'Removed build_old/.'

sudo cp -r /mnt/dev1/capstone/docker/build /mnt/dev1/capstone/docker/build_old
echo 'Copied previous build to build_old'

sudo rm -rf /mnt/dev1/capstone/docker/build
echo 'Removed previous build.'

sudo cp -r build/ /mnt/dev1/capstone/docker
echo 'Copied new build to /mnt/dev1/capstone/docker/build'

(cd /mnt/dev1/capstone/docker && sudo chmod -R 777 build && sudo chmod -R 777 build_old )
echo 'Setting file permissions'

(cd /mnt/dev1/capstone/docker && sudo docker-compose up -d)
echo 'Bringing up apache server.'

echo 'Pipeline Finished!'
