# Twitter V2 Simple

<a name="readme-top"></a>

<!-- ABOUT THE PROJECT -->
## About The Project
A simplified version of Twitters V2 api with straight forward functions and callbacks. If you need quick simple functions such as follow, like, DM and others, then this package is for you. Contributor williamdsanders05@gmail.com This package is still under development. 

<!-- TABLE OF CONTENTS -->
## Table Of Contents
### User
1. [Who am I](#who-am-i)
2. [Get user details](#get-user-details)
3. [Get users replied to tweet](#get-users-replied-to-tweet)
4. [Follow a user](#follow-a-user)
5. [Unfollow a user](#unfollow-a-user)
5. [Get followers of a user](#get-followers-of-a-user)
6. [Get following of a user](#get-following-of-a-user)
7. [Direct Message a user](#direct-message-a-user)
### Tweets
8. [Make a tweet](#make-a-tweet)
9. [Make a media tweet image/video](#make-a-media-tweet-image/video)
10. [Get a tweet](#get-a-tweet)
11. [Reply to a tweet](#reply-to-a-tweet)
12. [Like a tweet](#like-a-tweet)
13. [Unlike a tweet](#unlike-a-tweet)
14. [Delete a tweet](#delete-a-tweet)
<!-- GETTING STARTED -->
## Getting Started
There are a few steps that need to take place before you can use the full functionality of Twitters V2 Api.

1. Create a developer account for Twitter [Twitter Developer](https://developer.twitter.com/en/apply-for-access)
2. After obtaining your developer account, you must get elevated access to Twitter V2 Api to complete all functions such as, follow, delete, like, and more. [Twitter Developer - Elevated Access](https://developer.twitter.com/en/portal/products/elevated). 

### Installation

You will need to access your API keys, and Tokens to initiate the Twitter V2 client.

1. Install NPM packages
   ```sh
   npm install twitter-v2-simple
   ```
2. Import Twitter-V2-Simple
    ```js
    import TwitterV2Simple from 'twitter-v2-simple';

    //Or

    const TwitterV2Simple = require('twitter-v2-simple');
    ```
4. Enter your Twitter API tokens and secrets. Also make sure to use .ENV to protect your keys.
   ```js
   const twitter = new TwitterV2Simple({
      appKey: 'KdfeirYYhdf........',
      appSecret: 'TYRhdiIuh......',
      accessToken: '1435667.......',
      accessSecret: 'mxGHjgjj.....',
      bearerToken: 'AAAAAAAAA......'
   });
   ```

<!-- USAGE EXAMPLES -->
## Usage
V2 simple only focuses on the main core functions in the user and tweet category. For more advanced functions please visit the original Twitter SDK for further documentation. [Twitter SDK](https://github.com/twitterdev/twitter-api-typescript-sdk)
## User
### Who Am I
Get the current logged in user for Twitter. 
```js
//Async Function
const me = await twitter.whoami()
console.log(me)
```

Returns an object with your id, name, and username.
```js
{
   id: '158143493602009628672',
   name: 'Your Name',
   username: 'yourusername'
}
```

### Get a user details
Get the details of a single user. Pass the Twitter username as an argument.
```js
//Async Function
const user = await twitter.getUser('twitter')
console.log(user)
```
Returns an object with the users id, name, and username.
```js
{ id: '783214', name: 'Twitter', username: 'Twitter' }
```


### Get users replied to tweet.
You can get up to 100 users who replied to a tweet. Pass the conversation id (same as post id) as an argument along with a number between 10-100. If you do not pass an amount it will default to 10.
```js
//Async Function
const allRepliedUsers = await twitter.getAllRepliedUsers('1580661436132757506', 10)
console.log(allRepliedUsers)  
```
Returns an array of up to 100 user objects who replied to the tweet. Along with the original tweet details.
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
            text: 'a hit Tweet. 🤝🏽',
            author_id: '783214',
            id: '158249263045184706048',
            edit_history_tweet_ids: [Array]
         },
      ]
```

### Follow a user
You can follow a user by passing the user id as an argument.

```js
//Async Function
const follow = await twitter.follow('783214')
console.log(follow)
```
Returns a boolean following object with the value of true or false, along with pending status.
```js
{ following: true, pending_follow: false }
```

### Unfollow a user
You can also unfollow a user by passing the users id as an argument.

```js
//Async Function
const unfollowed = await twitter.unfollow('783214')
console.log(unfollowed)
```
Returns a boolean following object with the value of false. 
```js
{ following: false }
```

### Get followers of a user
You can get the followers from a user by providing the user id and the amount of users you want to return as an argument.
```js
//Async Function
const followers = await twitter.getFollowers('783214', 100)
console.log(followers)
```
Returns an array with user objects and total result count. 
```js
{
  data: [
   {
      id: '158260446354554138113',
      name: 'Tina',
      username: 'tin452'
    ,
   {
      id: '1582604434533938063360',
      name: 'Melese',
      username: 'Melese85'
   },
   { id: '158234529484546396160', 
      name: 'James', 
      username: 'james5118' 
   }
   //More usernames
  ],
  meta: { result_count: 100, next_token: 'MISPFPRRGFTCV1GZZZ' }
}
```

### Get following of user
You can get everyone a user is following by passing the user id and the amount of users as an argument.
```js
//Async Function
const following = await twitter.getFollowing('783214', 5)
console.log(following)
```
Returns an array with user objects and total result count. 
```js
{
  data: [
   {
      id: '158260446354554138113',
      name: 'Bossman',
      username: 'boss_man-4000'
    ,
   {
      id: '1582604434533938063360',
      name: 'Michael Fin',
      username: 'fin-mich3456'
   },
   { id: '158234529484546396160', 
      name: 'ChrisTy', 
      username: 'christy4you' 
   }
   //More usernames
  ],
  meta: { result_count: 5, next_token: 'MISPFPRRGFTCV1GZZZ' }
}
```

### Direct Message a user
You can send a Direct Message to a user by passing the user id and the message you want to send as an argument.
```js
//Async
const sendDm = await twitter.dm('783214', 'Twitter API is the best!')
console.log(sendDm)
```
Returns an object with the Direct Message details.
```js
   {
      type: 'message_create',
      id: '158261136734898521605',
      created_timestamp: '1666158928261',
         message_create: {
            target: { recipient_id: '783214' },
            sender_id: '15826342311348438521605',
            message_data: { text: 'Twitter API is the best!', entities: [Object] }
         }
   }
```
## Tweets
### Make a tweet
You can make a tweet by passing a message in as an argument.
```js
//Async Function
const makeTweet = await twitter.tweet('You are the number one dev in the world!')
console.log(makeTweet)
```
Returns a large object with the status of the created tweet. 
```js
{
  created_at: 'Sat Oct 22 19:22:30 +0000 2022',
  id: 1583901622342344305700,
  id_str: '1583901627605405696',
  full_text: 'You are the number one dev in the world!',
  truncated: false,
  display_text_range: [ 0, 38 ],
  entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
  // Alot more information 
```

### Make a media tweet image/video
You can make a video or image tweet by passing the messsage and path to the file as an argument.
```js
//Async Function
const tweetImage = await twitter.tweetMedia('Check out me new image! 👀', '/home/images/your_image.png')
console.log(tweetImage)
```
Returns a large object with the media tweet details along with the media link. 
```js
{
  created_at: 'Sun Oct 23 01:53:52 +0000 2022',
  id: 158345434121582166000,
  id_str: '1584543521582166019',
  full_text: 'Check out me new image! 👀 https://t.co/Oj0sMb5gdf45r',
  truncated: false,
  display_text_range: [ 0, 4 ],
  entities: {
    hashtags: [],
    symbols: [],
    user_mentions: [],
    urls: [],
    media: [ [Object] ]
  },
  extended_entities: { media: [ [Object] ] },
  // Alot more information 
```

### Get a tweet.
Get the details of a given tweet.
```js
//Async Function
const tweet = await twitter.getTweet('1580661436132757506')
console.log(tweet)
```
Returns tweet object.
```js
{
   users: [ { id: '783214', name: 'Twitter', username: 'Twitter' } ],
   tweets: [
         {
            text: 'a hit Tweet. 🤝🏽',
            edit_history_tweet_ids: [Array],
            id: '1580661436132757506',
            author_id: '783214'
         }
      ]
}
```

### Reply to a tweet
You can reply to a tweet by passing a message and the tweet id in as an argument.
```js
//Async Function
const replyTweet = await twitter.reply("Let's work together!", '1580661436132757506')
console.log(replyTweet)
```
Returns a large object with the tweet reply status. 
```js
{
  created_at: 'Sat Oct 22 19:30:55 +0000 2022',
  id: 15839037345344486412000,
  id_str: '158395435436186412032',
  full_text: "@twitter Let's work together!",
  truncated: false,
  display_text_range: [ 13, 33 ],
  entities: { hashtags: [], symbols: [], user_mentions: [ [Object] ], urls: [] },
  // Alot more information 
```

### Like a tweet
You can like a tweet by passing it's id as an argument. Tweet ids are located at the end of the twitter.com link. (Example: https://twitter.com/Twitter/status/1580661436132757506)
```js
//Async Function
const liked = await twitter.like('1580661436132757506')
console.log(liked)
```
Returns a boolean liked object with the value of true. 
```js
{ liked: true }
```

### Unlike a tweet
You can unlike a tweet by passing it's id as an argument. Tweet ids are located at the end of the twitter.com link. (Example: https://twitter.com/Twitter/status/1580661436132757506)

```js
//Async Function
const unliked = await twitter.unlike('1580661436132757506')
console.log(unliked)
```
Returns a boolean liked object with the value of false. 
```js
{ liked: false }
```

### Delete a tweet
You can delete a tweet that belongs to you by passing the tweet id as an argument.
```js
//Async Function
const deleteTweet = await twitter.delete('1580661436132757506')
console.log(deleteTweet)
```
Returns a large object with the deleted tweet's status. 
```js
{
  created_at: 'Mon Oct 17 08:23:23 +0000 2022',
  id: 158192381666432424323400,
  id_str: '15819238123423939968',
  full_text: "@twitter Let's work together!",
  truncated: false,
  display_text_range: [ 0, 24 ],
  entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
  // Alot more information 
```
