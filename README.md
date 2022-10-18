# Twitter V2 Simple

<a name="readme-top"></a>

<!-- ABOUT THE PROJECT -->
## About The Project
A simplified version of Twitters V2 api with straight forward functions and callbacks.


<!-- GETTING STARTED -->
## Getting Started
There are a few steps that need to take place before you can use the full functionality of Twitters V2 Api.

1. Create a developer account for Twitter [Twitter Developer](https://developer.twitter.com/en/apply-for-access)
2. After obtaining your developer account, you must get elevated access to Twitter V2 Api to complete all functions such as, follow, delete, RT, and more. [Twitter Developer - Elevated Access](https://developer.twitter.com/en/portal/products/elevated). 

"Elevated" access comes with 2,000,000 tweet pulls per month up to 7 days old. 
"Academic Research" comes with 10,000,000 tweet pulls and full history archive. Both operate on the same functions in this package.

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
Below are basic usage for the API.

###Get your twitter account details
   ```js
   const me = twitter.whoami()
   console.log(me)
   ```

