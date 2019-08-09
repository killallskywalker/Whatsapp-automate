'use strict';

// Load the twilio module
const twilio = require('twilio');

// Create a new REST API client to make authenticated requests against the twilio back-end services
const client = new twilio(process.env.TWILIO_SID, process.env.AUTH_TOKEN);

//store all wish in array
const wish = [ 
	"Thinking about you is the tipping point where my nightmares end and sweet dreams begin. I love you.",
	"As long as they are about me and you, I wish that all your dreams come true. Good night",
	"I want to be the cool night breeze which gives you goosebumps as you sleep. Good night love.",
	"This message has the following attachments – the sweetest kiss and coziest hug, the cutest cuddle and warmest snuggle. Good night.",
	"The moon is angry at me and jealous of you because I said that no one can light my nights up like my girlfriend. Good night.",
	"The night is far too long, for you to be away. I am desperately waiting, for it to turn into day. My heart will rot away, if things keep going on like this. All I want to do, is give you a kiss. Good night.",
	"I Googled… What are the best words I can use in a good night message for my girlfriend? Google replied… Ask your heart. xoxo",
	"Just like how the sun rises no matter what, I too can’t stay away from you because I miss you a lot. xoxo",
	"This text is a drug which drives away NIGHTMARES and induces SWEET DREAMS. Recommended dosage is One Message every few hours. Good night.",
	"I wish we could cuddle all night long… and fall asleep after watching the sun rise together. Good night.",
	"Whenever I think about my love for you, I see all my dreams coming true. Good night.",
	"I have never felt so lonely like this, all I can think about is giving you a kiss. Such is the blissful effect of our love on me, that all I do is miss you dearly. Good night."
	]

module.exports.sendWish = (event, context, callback) => {
	  client.messages.create({
	  from: 'whatsapp:+14155238886',
	  body: wish[Math.floor(Math.random() * wish.length)], //randomly choose text to send
	  to: `whatsapp:${process.env.TWILIO_SID}`
	}).then(message => callback(null,`Message id: ${message.sid} ${process.env.TWILIO_SID}`))
	  .catch((err) => {
        callback(null,`Error ${err}`)
    });
};


