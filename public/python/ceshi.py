import sys
from fastHan import FastHan

model = FastHan()

sentance =sys.argv[1]

answer = model(sentance,target="Parsing")


for i,sentance in enumerate(answer):
    for token in sentance:
        print(token.word)
