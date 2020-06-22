set -e

npm run build
npm run test:unit


cd dist
git init
git add -A 
git commit -m 'deploy'
git push -f git@github.com:JohnWink/vueCovidTestLuis.git master
cd -