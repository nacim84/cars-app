Create a new repository on the command line

echo "# cars-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/nacim84/cars-app.git
git push -u origin main

Push an existing repository from the command line

git remote add origin https://github.com/nacim84/cars-app.git
git branch -M main
git push -u origin main
