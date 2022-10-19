git init 
echo "node_modules" > .gitignore
git add .
git commit -m "Init" 
open -a "Google Chrome" https://github.com/new
git remote add origin git@github.com:vladknd/${PWD##*/}.git
git push -u origin master
