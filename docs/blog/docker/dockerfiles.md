# Dockerfile

## 示例

```bash
FROM nginx
# FROM 基础镜像，必须以FORM作为命令的开始，注释和pareser-directives 除外
# https://docs.docker.com/engine/reference/builder/#parser-directives
RUN echo '测试2' > /usr/share/nginx/html/index
# RUN 执行后面跟着的命令或文件
```

## 构建镜像

```bash
$ docker build -f /path/to/a/Dockerfile -t nginx:test .
# 生成的镜像及tag nginx:test
# . 上下文环境，上面的命令会将当前文件夹中的所有内容打包
# -t 指定仓库 ，可以设置多个仓库，-t test/rep -t test/rep2
# -f 指定 dockfile 文件
```
