# Twitter V2 Simple

<a name="readme-top"></a>

<!-- ABOUT THE PROJECT -->
## About The Project
A simplified version of Twitters V2 api with straight forward functions and callbacks. This package is still in development and will add new features in the future.


<!-- GETTING STARTED -->
## Getting Started
There are a few steps that need to take place before you can use the full functionality of Twitters V2 Api.

1. Create a developer account for Twitter [Twitter Developer](https://developer.twitter.com/en/apply-for-access)
2. After obtaining your developer account, you must get elevated access to Twitter V2 Api to complete all functions such as, follow, delete, RT, and more. [Twitter Developer - Elevated Access](https://developer.twitter.com/en/portal/products/elevated). 

### Installation

You will need to access your API keys, and Tokens to initiate the Twitter V2 client.

1. Install NPM packages
   ```sh
   npm install twitter-v2-simple
   ```
2. Import Twitter-V2-Simple
    ```js
    import TwitterV2Simple from 'twitter-v2-simple';
    //or
    const TwitterV2Simple = require('twitter-v2-simple')
    ```
4. Enter your Twitter API tokens and secrets. Also make sure to use .ENV to protect your keys.
   ```js
   const twitter = new TwitterV2Simple({
        appKey: 'KdfeirYYhdf........',
        appSecret: 'TYRhdiIuh......',
        accessToken: '1435667.......',
        accessSecret: 'mxGHjgjj.....'
   });
   ```

<!-- USAGE EXAMPLES -->
## Usage

### Get a tweets details.
   ```js
   //Pass the tweet id as a string argument.
   async function getTweetDetails(){
      const tweet = await twitter.getTweet('1564694842311049217')
      console.log(tweet)
   }
   ```
   Returns tweet object.
   ```js
   {
      data: {
         edit_history_tweet_ids: [ '1564694842311049217' ],
         text: 'who is brave enough to add us to their Twitter Circle?',
         id: '1564694842311049217',
         author_id: '783214'
      }
   }
   ```

   ### Get all users who replied to a tweet.
   You can get up to 100 users who replied to a tweet. Pass the conversation id (same as post id) as an argument along with a number between 10-100. If you do not pass an amount it will default to 10.
   ```js
   //Must be a number between 10 and 100. Pass the tweet id as a string argument. 
   const allRepliedUsers = await twitter.getAllRepliedUsers('1580661436132757506', 10)
   console.log(allRepliedUsers)  
   ```
   Returns an array of up to 100 user objects who replied to a tweet. Along with the original tweet details.
   ```js
   users: [
            {
               id: '121497883484980166656',
               name: 'John Smith',
               username: 'thesmithman'
            },
            {
               id: '158071034563650621440',
               name: 'Kim B',
               username: 'bkim9033'
            },
            {
               id: '158168275334791299584',
               name: 'Alpha G ',
               username: 'g_aalfa_1'
            },
            // More users
   tweets: [
            {
               text: 'This is the original tweet everyone responded to.🤝🏽',
               author_id: '314084634',
               id: '158249263045184706048',
               edit_history_tweet_ids: [Array]
            },
         ]
   ```

