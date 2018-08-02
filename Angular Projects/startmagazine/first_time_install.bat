@echo off
echo installing gulp...

npm install gulp -g

echo installing bower...

npm install bower -g

echo installing node packages (npm install)...

npm install

echo installing gulp locally

npm install gulp

echo installing bower packages (bower install)...

bower install

echo done!

echo run 'gulp serve' to load live server

echo run 'gulp' to build minified production ready version
