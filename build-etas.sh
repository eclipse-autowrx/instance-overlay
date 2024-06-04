cp -r ./etas/* ./autowrx
cd ./autowrx
npm install --force
npm run build
cp -r ./dist ../dist-etas
cd ..