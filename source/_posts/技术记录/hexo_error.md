---
title: 记一些 Hexo 报错
cover: "../../media/posts_img/hexo_error_index.jpg"
tags:
  - Hexo
  - 踩坑
categories:
  - 技术记录
abbrlink: b36c6159
date: 2019-08-02 18:05:48
---
>说在前面：
>这里主要是记一下平时在 Hexo 遇到的报错，解决之后分享一下解决方法

## YAMLException: can not read a block mapping entry; a multiline key may not be an implicit key at line 6, column 1

解决方法：查看新建要上传的 MarkDown 文件，看看 tags 那里或者其他地方，与后面内容是不是有一个空格。我是排查空格之后就解决了。~~好智障啊~~
