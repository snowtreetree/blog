# Dockerfile

## 示例

```bash
FROM nginx
# FROM 基础镜像
RUN echo '测试2' > /usr/share/nginx/html/index
# RUN 执行后面跟着的命令或文件
```

## 构建镜像

```bash
$ docker build -t nginx:test .
# 生成的镜像及tag nginx:test
# . 上下文环境，上面的命令会将当前文件夹中的所有内容打包
```
