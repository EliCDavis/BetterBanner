# BetterBanner

[Extension Here.](https://chrome.google.com/webstore/detail/better-banner/kphichjfjfaadmiehjplnmpfgfjkblbm)

**THIS IS NOT A PRODUCT OF MISSISSIPPI STATE UNIVERSITY NOR DID THEY HAVE ANY SAY OR DEVELOPMENT IN THE EXTENSION**

This extension allows students to check their grades, view their MyCourses classes, check their email, and more in a single page.  It uses an iframe that doesn't take up the entire screen in an annoying manner.  It redirects you from the annoying "can't find resources" page when you first log in.  It saves the classes you are taking for easy access.

Hope you enjoy
xoxo

## How It Works
This extension works entirely client side to "reskin" what students would see on their side of things.  This extension *modifies nothing* on the server end of things. 

### Deletion Step
When a user logs in, the extension waits for the resulting screen to completely load.  Once loaded, the extension completely deletes whatever html is on the page as well as style sheets loaded in.

### Injection Step
Once we have a blank canvas our code inserts our custom html file and the extension loads in our own custom css file for the page.  The javascript that does this has been loaded in it's own isolated world that chrome extensions run in so other peoples code can not mess with our extension.

### Angular Step
Then we begin building and binding our angular application to the newly loaded html to make the page dynamic.  We instantiate our directives and services and include angular material.

## Dev Env Setup

This extension uses the Node.js for compiling.  In the past we've had trouble using 6, so if gulp is giving you trouble (or hanging) try instead installing the LTS edition.

If you have just installed Node.js you should anywhere in the command line run:
```shell
npm install gulp -g
```

Afterwords navigate to the root directory of this repository and run:
```shell
npm install
gulp # Leave running while you develop
```

Running just 'gulp' in the root directory of the repository will run a watch command that will listen to any changes in the javascript and will recompile when you save.  You will need to restart this task if you try saving javascript that is syntactically wront.

Load unpacked chrome extension in Chrome.
Making changes to inject.html does require you to restart the gulp task.
To have any changes appear in the extension you need to hit the reload link in the [extension settings](chrome://extensions/).

## Known Issues

### A break in was detected

#### Summary
Loading a banner link in an i-frame displays a page that a break-in was detected.

#### Solution
Go to your chrome settings and clear you session/cache/history/cookies/everything.  
My thoughts is that getting this error you browser is still using some old code that existed before this summers magical update.
That's most of the problem I think and even the site itself battles with caching of the old site.

*Beautiful*

## TODO
* Autologin
* Popup links to school email
* ~~Auto-forward from login to main page.~~
* Easy to turnoff
* Documentation
* Prettify page
