from fastHan import FastHan

model = FastHan()

sentance = argv0

answer = model(sentance,target="Parsing")


for i,sentance in enumerate(answer):
    for token in sentance:
        print(token.word)
