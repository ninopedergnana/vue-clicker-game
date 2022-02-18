#!/bin/bash
npm run build
git commit -am "build project"
git subtree push --prefix dist origin gh-pages