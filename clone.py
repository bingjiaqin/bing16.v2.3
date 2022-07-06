import os

os.system("sudo git fetch origin master:temp")
os.system("sudo git merge temp")
os.system("sudo git branch -d temp")
