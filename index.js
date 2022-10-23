const { TwitterApi } = require('twitter-api-v2')
const { Client } = require("twitter-api-sdk");



class TwitterV2Simple {
  //Constructor stores this.id with current logged in user id to propagate values required by the user.
  constructor(config){
      this.client = new TwitterApi({
          appKey: config.appKey,
          appSecret: config.appSecret,
          accessToken: config.accessToken,
          accessSecret: config.accessSecret
      })
      this.client2 = new Client(config.bearerToken);
      this.id = this.client.v2.me()
      .then((response)=>{
          return this.id = response.data.id
      })
      .catch((error)=>{
          return console.log(error)
      }); 
  }

  //Get current logged in user.
  async whoami(){
      return await this.client.v2.me()
      .then((response)=>{
          this.id = response.data.id;
          return response.data;
      })
      .catch((error)=>{
          return error.message;
      });
  };

  //Get a single user details.
  async getUser(name){
      if(!name) return "Enter username.";
      return await this.client.v2.userByUsername(name)
      .then((response)=>{
          return response.data;
      })
      .catch((error)=>{
          return error.message;
      });
  }

  //Make a tweet
  async tweet(message){
    if(!message) return 'Enter message to tweet';
        return await this.client.v1.tweet(message)
    .then((response)=>{
        return response
    })
    .catch((error)=>{
        return error.message;
    });
  }

  //Make media tweet
  async tweetMedia(message, mediaPath){
    if(!message) return 'Enter a message.';
    if(!mediaPath) return 'Enter image or video path.';
    return await this.client.v1.uploadMedia(mediaPath)
        .then(async (mediaId)=>{
            return await this.client.v1.tweet(message, { media_ids: mediaId })
                .then((response)=>{
                    return response;
                })
                .catch(()=>{
                    return error;
                });
        })
        .catch((error)=>{
            return error.data;
        });
  }

  //Delete a tweet
  async delete(tweetId){
    if(!tweetId) return 'Enter tweet id to delete.';
    return await this.client.v1.deleteTweet(tweetId)
        .then((response)=>{
            return response;
        })
        .catch((error)=>{
            return error.message;
        });
  }

  //Reply to a tweet
  async reply(message, tweetId){
    if(!message) return 'Enter a message.';
    if(!tweetId) return 'Enter tweet id.';
        return await this.client.v1.reply(message, tweetId)
        .then((response)=>{
            return response;
        })
        .catch((error)=>{
            return error.message;
        });
  }

  //Get a tweet details.
  async getTweet(tweetId){
      if(!tweetId) return "Enter Tweet id.";
      const response = await this.client2.tweets.findTweetsById({
          "ids": [
              tweetId
          ],
          "expansions": [
              "attachments.poll_ids",
              "author_id",
              "edit_history_tweet_ids",
              "entities.mentions.username",
              "in_reply_to_user_id",
              "referenced_tweets.id",
              "referenced_tweets.id.author_id"
          ]
        })
        .then((response)=>{
            return response.includes;
        })
        .catch((error)=>{
            return error.error.errors[0].message;
        });
  }

  //Get all replied user details from a tweet.
  async getAllRepliedUsers (tweetId, amount){
      if(!tweetId) return "Enter Tweet id";
      return await this.client2.tweets.tweetsRecentSearch({
          "query": `conversation_id:${tweetId}`,
          "max_results": amount? amount : 10,
          "expansions": [
              "in_reply_to_user_id",
              "referenced_tweets.id",
              "referenced_tweets.id.author_id"
          ]
      })
      .then((response)=>{
          return response.includes;
      })
      .catch((error)=>{
          return error.error.errors[0].message;
      })
  }

  //Follow user
  async follow(userId){
      if(!userId) return "Enter user id.";
      return await this.client.v2.follow(await this.id, userId)
      .then((response)=>{
          return response.data;
      })
      .catch((error)=>{
          return error.message;
      })
  }

  //Unfollow a user
  async unfollow(userId){
      if(!userId) return "Enter user id.";
      return await this.client.v2.unfollow(await this.id, userId)
      .then((response)=>{
          return response.data;
      })
      .catch((error)=>{
          return error.message;
      })
  }

  //Get followers of a user
  async getFollowers(userId, amount){
      if(!userId) return "Enter user id.";
      return await this.client.v2.followers(userId, {
          "max_results": amount? amount : 5,
      })
      .then((response)=>{
          return response;
      })
      .catch((error)=>{
          return error.message;
      });
  };

  //Get following of a user
  async getFollowing(userId, amount){
      if(!userId) return "Enter user id.";
      return await this.client.v2.following(userId, {
          "max_results": amount? amount : 5,
      })
      .then((response)=>{
          return response;
      })
      .catch((error)=>{
          return error.message;
      });
  };

  //Like a tweet
  async like(postId){
      if(!postId) return "Enter post Id.";
      return await this.client.v2.like(await this.id, postId)
      .then((response)=>{
          return response.data;
      })
      .catch((error)=>{
          return error.message;
      });
  };

  //Unlike a tweet
  async unlike(postId){
      if(!postId) return "Enter post Id.";
      return await this.client.v2.unlike(await this.id, postId)
      .then((response)=>{
          return response.data;
      })
      .catch((error)=>{
          return error.message;
      });
  };

  //Send a Direct Message
  async dm(userId, message){     
      if(!message) return "You must enter a message to send.";
      if(!userId) return "Enter a username.";
      return await this.client.v1.sendDm({
          recipient_id: userId,
          text: message,
      })
      .then((response)=>{
          return response.event;
      })
      .catch((error)=>{
          return error.errors[0].message;
      });
  };

//More functions to come
//Retweet
//Get all user reply text
//Create Tweet
//Delete Tweet
//Tweet Media Video/Audio/Image
//And more..
}

module.exports = TwitterV2Simple
