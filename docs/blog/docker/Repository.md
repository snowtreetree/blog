# 仓库

[docker hub](https://hub.docker.com/)集中存储镜像的地方。

## 镜像推送

```bash
# 仓库关联
$ docker tag ubuntu:tag snowtreetree/repository_ubuntu
# ubuntu:tag 本地镜像及tag
# snowtreetree/repository_ubuntu 仓库中的镜像

$ docker push snowtreetree/repository_ubuntu
```
