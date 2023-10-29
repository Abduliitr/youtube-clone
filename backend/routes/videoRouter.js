import authMiddleware from "../utils/authMiddleware.js";
import express from 'express';
import Video from "../database/models/videos.js";
import User from '../database/models/users.js'
import Comment from '../database/models/comments.js'
import { createErrorResponse, createResponse } from "../utils/response.js";

export const videoRouter = express.Router();

videoRouter.get('/videos', authMiddleware, videoFetchHandler);
videoRouter.get('/video/:id', authMiddleware, getVideo);

videoRouter.post('/video', authMiddleware, videoUploadHandler);
videoRouter.post('/video/:id/like', authMiddleware, likeUnlikeAvideo);
videoRouter.post('/video/:id/comment', authMiddleware, commentOnAvideo);

videoRouter.get('/user', authMiddleware, getUserInfo);
videoRouter.post('/user/:id/subscribe', authMiddleware, subscribeOrUnsubscribeAchannel);

async function videoFetchHandler(req, res){
    // get subscribed videos
    try{ 
        const videos = [];
        const user = await User.findById(req.user._id);

        for(let i = 0; i < user.subscribedTo.length; i++){
            const subscribedUsers = await User.findById(user.subscribedTo[i]._id);
            for(let j = 0; j<subscribedUsers.videos.length; j++){
                videos.push(subscribedUsers.videos[j]);
            }
        }

        const len = videos.length;
        let videosFromdb = await Video.find();
        // filter out above entered videos
        videosFromdb = videosFromdb.filter((video) => {
            return !videos.includes(video);
        })

        for(let i = 0; i< Math.min( videosFromdb.length, 20 - len) ; i++){
            videos.push(videosFromdb[i]);
        }

        console.log(`Fetched ${videos.length} videos for user ${req.user.email}`);
        
        return res.send(createResponse(videos));
    } catch (error) {
        console.log('Error:', error.message);
        res.send(createErrorResponse(error));
    }
}

async function getVideo(req, res){
    try{
        const videoId = req.params.id;
        const video = await Video.findById(videoId);
        await video.populate('comments');
        await video.populate('user');
        res.send(createResponse(video));
    } catch (error) {
        console.log('Error:', error.message);
        res.send(createErrorResponse(error, false));
    }
}

async function videoUploadHandler(req, res) {
    try {
        const id = req.user._id;
        // add video to the channel
        const video = new Video(req.body);
        video.user = id;
        const user = await User.findById(id);
        await video.save();
        user.videos.push(video._id);
        await user.save();

        console.log(`Video ${video._id} upload succes for user ${req.user.email}`);
        res.send(createResponse(video));
    } catch (error) {
        console.log('Error:', error.message);
        res.send(createErrorResponse(error));
    }
}

async function likeUnlikeAvideo(req, res){
    try {
        const videoId = req.params.id;
        const video = await Video.findById(videoId);
        const userOrChannel = await User.findById(req.user._id);

        // Intelligent like or unlike feature
        if(userOrChannel.likedVideos.includes(videoId)){
            video.likes = video.likes - 1;
            userOrChannel.likedVideos.pull(videoId);
        } else {
            video.likes = video.likes + 1;
            userOrChannel.likedVideos.push(videoId);
        }
        await userOrChannel.save();
        await video.save();

        res.send(createResponse(video));
    } catch (error) {
        console.log('Error:', error.message);
        res.send(createErrorResponse(error, false));
    }
}

async function commentOnAvideo(req, res){
    try{
        const userOrChannelName = req.user.name || 'Anonymous User';
        const videoId = req.params.id;
        const video = await Video.findById(videoId);
        req.body.commentedBy = userOrChannelName;
        const comment = new Comment(req.body);
        video.comments.push(comment._id);

        await comment.save();
        await video.save();
        res.send(createResponse(comment));
    } catch (error) {
        console.log('Error:', error.message);
        res.send(createErrorResponse(error, false));
    }
}

// '/user' endpoints.

async function getUserInfo(req, res){
    try {
        const user = await User.findById(req.user._id);
        await user.populate('videos');

        console.log(`Fetched Details for user ${req.user.email}`);
        return res.send(createResponse(user));
    } catch (error) {
        console.log('Error:', error.message);
        res.send(createErrorResponse(error));
    }
}

async function subscribeOrUnsubscribeAchannel(req, res){
    try{
        const subscribeToChannel = req.params.id;
        const userId = req.user._id;

        const currentUser = await User.findById(userId);
        const targetChannel = await User.findById(subscribeToChannel);

        // Intelligent subscribe or unsubscribe feature
        if(currentUser.subscribedTo.includes(subscribeToChannel)){
            console.log('Already subscribed. Unsubscribing..')
            currentUser.subscribedTo.pull(subscribeToChannel);
            targetChannel.subscribers--;
        } else {
            currentUser.subscribedTo.push(subscribeToChannel);
            targetChannel.subscribers++;
        }

        await currentUser.save();
        await targetChannel.save();

        res.send(createResponse(currentUser));

    } catch (error) {
        console.log('Error:', error.message);
        res.send(createErrorResponse(error, false));
    }
}