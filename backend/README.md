### My notes:

Steps:

npm init
npm i express dotenv mongoose cors
npm i bcrypt jsonwebtoken
npm i nodemon --save
"start": "nodemon app.js"
"type": "module"


https://blog.logrocket.com/building-simple-login-form-node-js/
https://dev.to/jahongir2007/creating-a-login-and-registration-form-with-nodejs-expressjs-and-mysql-database-160n

# Auth
POST /login
POST /signup
GET /logout

# Videos
GET /video -> get random reccomended videos -> query for tag, search 
GET /video/:id -> get exact video
POST /video -> upload video

# channels
GET /channels/subscribed -> get subscribed channels / if not exist then random

## 
{
    "channel": {
        "_id": "id",
        "name": "name",
        "email": "email",  
        "password": "passwordHash", 
        "subscribers": 0,
        "thumbnail": "thumbnail_url",
        "subscribedTo": [
            "id"
        ],
        "likedVideos": [
            "id"
        ],
        "videos": [
            {
                "_id": "id",
                "videoId": "videoId",
                "url": "url",
                "title": "title",
                "description": "description",
                "thumbnail": "thumbnail_url",
                "views": 0,
                "uploadedAt": "uploadedAt",
                "likes": 0,
                "tags": [],
                "comments": [
                    {
                        "_id": "id",
                        "text": "text",
                        "commentedBy": "id",
                        "likes": 0,
                        "commentedAt": "commentedAt"
                    }
                ]
            }
        ]
    }
}