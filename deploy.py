import os
import time

start = time.perf_counter()

print("========== 开始清除缓存 ==========\n")

os.system("hexo clean")

print("========== 清除缓存完成 ==========\n")
print("\n\n\n")

print("========== 开始获取 steam 游戏数据 ==========\n")

os.system("hexo steam -U")

print("========== 获取 steam 游戏数据完成 ==========\n")
print("\n\n\n")

print("========== 开始生成页面 ==========\n")

os.system("hexo g")

print("========== 生成页面完成 ==========\n")
print("\n\n\n")

print("========== 开始压缩页面 ==========\n")

os.system("gulp")

print("========== 压缩页面完成 ==========\n")
print("\n\n\n")

print("========== 开始推送页面 ==========\n")

os.system("hexo d")

print("========== 推送页面完成 ==========\n")
end = time.perf_counter()
print("本次运行时间：%s 秒" % (end - start))
