import sys
import io
from fastHan import FastHan
sys.stdout= io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')#改变标准输出的默认编码
model = FastHan()

sentance =sys.argv[1]

answer = model(sentance,target="Parsing")

str = ''
for i,sentance in enumerate(answer):
    for token in sentance:
        # print(token.word)
        str = str + token.word + ','
print(str)