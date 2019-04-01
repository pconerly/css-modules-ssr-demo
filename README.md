# CSS-Modules with SSR demo

First build the project and then run `npm start`:

```
npm run build
npm start
```

### BUG REPORT

This repo is acting as an example for a bug report for `css-modules-require-hook`

When building & running this server, React gives the warning:

```
warning.js:33 Warning: React attempted to reuse markup in a container but the checksum was invalid.
This generally means that you are using server rendering and the markup generated on the server was
not what the client was expecting. React injected new markup to compensate which works but you have
lost many of the benefits of server rendering. Instead, figure out why the markup being generated is
different on the client or server:
 (client) ="text__text___2QWV5 text__bold___Naeo8"
 (server) ="text__text___2QWV5" data-reactid="3">L
```

Webpack is identifying the `.bold` class in the imported `.scss` file, but `css-modules-require-hook` isn't.
