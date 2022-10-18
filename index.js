import { TwitterApi } from 'twitter-api-v2';

export default class TwitterV2Simple {
        constructor(config){
            this.client = new TwitterApi({
                appKey: config.appKey,
                appSecret: config.appSecret,
                accessToken: config.accessToken,
                accessSecret: config.accessSecret
            })
        }

        async getTweet(id){
            return await this.client.v2.singleTweet(id, {
                "tweet.fields": [
                    "author_id"
                ],
                expansions: [
                  'entities.mentions.username',
                  'in_reply_to_user_id',
                ],
              })
              .then((response)=>{
                return response;
              })
              .catch((error)=>{
                return error;
              })
        };






}
