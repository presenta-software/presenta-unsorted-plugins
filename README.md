# PRESENTA Unsorted Plugins

This repository contains Proof-Of-Concept and experimental plugins for **PRESENTA Lib**.

The main purpose is to test new ideas quickly leaving them available pubblicly for easy evaluation and learning.

For that reason, the whole repository is published under on NPM and available with UNPKG with this base URL:

```
https://unpkg.com/@presenta/unsorted/
```

as an example, `aCircle.js` can be reached by adding the relative parth:

```
https://unpkg.com/@presenta/unsorted/blocks/aCircle.js
```

This means that you can include one or more plugins both in [Playground](https://play.presenta.cc/view/qJyA0pW1bCcaQ) tool or within any online coding tool such as [Codepen](https://codepen.io/abusedmedia/pen/BapMvLQ).

**A word of caution:**

All these plugins have to be considered experimental or proof-of-concept, even if they looks finalized.

A well-structure plugin usually lives in its own repository, ideally alongside a build toolchain, in order to publish a single javscript file that might include external dependencies.