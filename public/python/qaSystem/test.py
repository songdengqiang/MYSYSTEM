#-*- coding: UTF-8 -*-
# @Time    : 2019/4/13 20:49
# @Author  : xiongzongyang
# @Site    : 
# @File    : test.py
# @Software: PyCharm
#
# def hello():
#     print("hello")
#
# def bye():
#     print("bye")
# b={0:hello,1:bye}
#
# b[0]()
#
# exit()

import sys
import io
import pandas as pd
from pandas import Series, DataFrame
from preprocess_data import Question
# 创建问题处理对象，这样模型就可以常驻内存
que=Question()
# Restore
def enablePrint():
    sys.stdout = sys.__stdout__
enablePrint()
sys.stdout= io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')#改变标准输出的默认编码
result=que.question_process(sys.argv[1])
if len(str(result).strip()) ==0:
    result = "我也不知道!"
print(result)