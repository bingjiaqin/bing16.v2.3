import os

os.system("git fetch origin master:temp")
os.system("git merge temp && ^X")
os.system("git branch -d temp")
