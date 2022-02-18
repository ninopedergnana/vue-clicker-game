#!/bin/bash
npm run build
git commit -am "build project"
git push origin `git subtree split --prefix dist main`:gh-pages --force