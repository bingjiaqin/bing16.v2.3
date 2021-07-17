import os
import sys

if __name__ == '__main__':
    msg = sys.argv[1]
    os.system("git add .")
    os.system("git commit -a -m \".\"")
    os.system("git push origin master")
