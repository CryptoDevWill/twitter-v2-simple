const { TwitterApi } = require('twitter-api-v2')

    class TwitterV2Simple {
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
              .then(async (response)=>{
                return response;
              })
              .catch(async (error)=>{
                return error;
              })
        };

}


const twitter = new TwitterV2Simple({
    appKey: 'kxtjskUj4U3Uc7JkiU42hfAQl',
    appSecret: 'VTnfhCl1xNTu3yrU58LmBdaPIYTwK4DlTJWJ32v3auCXKYTIIZ',
    accessToken: '1581493602009628672-7FynGeBPqMfzt4rqchp8ZE4vIHFUXH',
    accessSecret: 'exM5dzIFLK6a06SuVX3QZNyhWsnxsNYsHT75L8uUQCce1'
});



async function getTweetDetails(){
    const tweet = await twitter.getTweet('1564694842311049217')
    console.log(tweet)
}

getTweetDetails()










// module.exports = TwitterV2Simple
