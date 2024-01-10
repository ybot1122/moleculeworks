# /bin/sh
rm -rf dist
rm -rf dist.zip
npm run build
cp .htaccess ./dist
zip dist.zip dist
