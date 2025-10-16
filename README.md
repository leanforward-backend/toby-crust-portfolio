Going to be building my contracting portfolio.

Goals for this project:
Time limit - 3 days
Embeded videos and animations
Contact section - user can send me a contract request via / text message
Requester will recive a confirmation email stating that I will get back to them
Backend storage of who has sent the email and thair contact details
Website scannable on QR
Works on mobile
Potentially a reactive codded background, such as game of life to add intrest and engagement





Ideas:
could have a request to cluade to generate some sort of code image each time the page loads for the background. you are able to then click to see what it has created with a button at the bottom of the page



Problems:
Ran into some annoying email problems. 
Initally I was using resend, which I got working well, however the issue is that it only lets you send an email to your own email and not anyone else, unless you have a domain, but I don't want to spend money one that. This lead me through a rabbit hole of other email providers. Initally I used web3forms, but this had the same issue of only being able to send emails to yourself again. Next I used email.js. This does work with sending emails to other people, however they have a very stingy free tier of 200 emails. Therefore I will use react email in conjuction with email.js, so that I will recive and email when someone signs up and the first 200 will also recive a confirmation email. I am only going to uncomment the email.js part once all the other code is ready in order to not waste emails. 