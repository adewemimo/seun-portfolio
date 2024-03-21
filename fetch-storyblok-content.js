//const fetch = require('node-fetch');
const fs = require('fs');

async function fetchStoryblokContent(version, token, lang) {
 const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&cv=1701903822&language=${lang}`;
 const response = await fetch(url, {cache: "no-store"});
 const data = await response.json();
 // Write data to a temporary file
 fs.writeFileSync('./storyblok-data.json', JSON.stringify(data));
}

// Replace these with your actual Storyblok version, token, and language
const version = "draft";
const token = "4RWgsQjWWNFCzfqgaSO2PAtt";
const lang = "en";

fetchStoryblokContent(version, token, lang).catch(console.error);
