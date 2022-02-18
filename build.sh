#!/bin/bash
npm run build
git commit -am "build project"
git subtree merge --prefix dist gh-pages 
git subtree push --force --prefix dist origin gh-pages