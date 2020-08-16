# LoopBack 4 Docker MongoDB authentication expample

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

To run this project:

Make sure you have Nodejs, Docker Server and Docker Compose installed globally on your machine. 

* clone the repo
* `cd lb4-docker-mongo-auth-example`
* `npm i`

Go to the `.env` file and replace the `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD` values with the desired user name and password for MongoDB.

`docker-compose up -d` to boot the MongoDB Docker container.

And finally...
`npm start`

You can find an extensive explanation of the code in my 2 Medium articles:
https://medium.com/@juli4geek/implementing-basic-jwt-based-authentication-with-loopback-4-and-docker-for-complete-noobs-1-2-12e919970a48
