#!/bin/bash
npm run build
cd dist
cp index.html 404.html
echo "nino-pedergnana.ch" > dist/CNAME
git add --all
git commit -m "build project"
git push
git push origin `git subtree split --prefix dist main`:gh-pages --force