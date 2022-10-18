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
    ```
4. Enter your Twitter API tokens and secrets
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

Get a tweets details.
   ```js
   //Pass the tweet id as a string argument.
   const tweet = twitter.getTweet('1564694842311049217')
   console.log(tweet)
   ```

