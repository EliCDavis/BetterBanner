# BetterBanner

## Known Issues

### A break in was detected

#### Summary
Loading a banner link in an i-frame displays a page that a break-in was detected.

#### Solution
Go to your chrome settings and clear you session/cache/history/cookies/everything.  
My thoughts is that getting this error you browser is still using some old code that existed before this summers magical update.
That's most of the problem I think and even the site itself battles with caching of the old site.

*Beautiful*

## Dev Env Setup

```shell
npm install
gulp # Leave running while you develop
```

Load unpacked chrome extension in Chrome.
Making changes to inject.html does require you to restart the gulp task.
To have any changes appear in the extension you need to hit the reload link in the [extension settings](chrome://extensions/).

## TODO
* Autologin
* Popup links to school email
* ~~Auto-forward from login to main page.~~
* Easy to turnoff
* Documentation
* Prettify page
