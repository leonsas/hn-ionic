## HN Ionic
This project is a [Hacker News][1] reader built with the new [Ionic Framework][2]. It was mainly a toy project to start learning AngularJS and check out Ionic to evaluate for use in a bigger project thats coming up.

Built on top of Ionic, this is a hybrid HTML5 app meant to be run via phonegap or cordova, and not as a web app.
I've tested it on a Nexus 4, but should work on most modern devices and iDevices.

### Run it
1. Make sure to have phonegap (or cordova) installed.
2. `git clone http://www.github.com/leonsas/hn-ionic && cd hn-ionic`
3. Run with phonegap: `phonegap local run android`

### Features
I just got around to implement the most basic features.
- See the current HN front page.
- Browse front page articles within the app.
- Read comments of front page articles.

#### Screenshots
<img src="http://leonsas.github.io/HNIonicFrontPage.png" alt="Front page" height="600" width="360">
<span/>
<img src="http://leonsas.github.io/HNIonicComments.png" alt="Comment Tab" height="600" width="360">

***
Currently using the unofficial HN api [node-hnapi][3].

[1]:	news.ycombinator.com
[2]:	ionicframework.com
[3]:	http://node-hnapi.herokuapp.com/
