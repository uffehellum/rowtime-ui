# rowtime
cell phone regatta timer

## Running UI locally:

cd client/app1
npm start

## Deploying to heroku

cd client/app1
npm run build
rm -r ../../../rowtime/build
cp -r build ../../../rowtime/build
