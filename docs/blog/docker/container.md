# 容器

## 容器使用

#### 拉取基础镜像

使用`docker pull ubuntu`载入ubbuntu。`docker images`可以查看到本地所有的镜像。

 ```bash
REPOSITORY                TAG                 IMAGE ID            CREATED             SIZE
node                      8.4                 386940f92d24        2 years ago         673MB
ubuntu                    15.10               9b9cb95443b5        3 years ago         137MB
```

#### 创建容器

可以直接直接使用Ubuntu镜像直接启动一个容器

```bash
docker run -it --name customName ubuntu /bin/bash
# --name customName 可以不设置采用默认，customName为自定义容器名称
# -i 交互操作
# -t 终端
# 退出终端，直接执行exit即可
```

#### 启动容器

查看所有容器

```bash
docker ps -a
# docker ps 查看已启动的容器
```

```bash
CONTAINER ID        IMAGE               COMMAND                   CREATED             STATUS                        PORTS                    NAMES
770204f3b42f        ubuntu              "/bin/bash"               25 minutes ago      Up 20 minutes                                          upbeat_tesla
c2333b6f98a6        ubuntu              "/bin/bash"               39 minutes ago      Up 39 minutes                                          test
924edcea4120        hello-world         "/hello"                  10 months ago       Exited (0) 10 months ago                               magical_boyd
```

通知容器

```bash
$ docker stop 770204f3b42f
# 对应镜像ID即可
```

启动已停止的容器

```bash
$ docker start 770204f3b42f
# 对应镜像ID即可
```

重启容器

```bash
$ docker restart 770204f3b42f
# 对应镜像ID即可
```

后台运行

```bash
$ docker run -itd --name back-test ubuntu /bin/bash
# -d 不进入容器，要进入需使用
# 使用docker exec 进入
```

进入容器

```bash
$ docker exec -it 770204f3b42f /bin/bash
# 对应镜像ID即可
```

## 导出和导入容器

```bash
# 导出容器
$ docker export 770204f3b42f > test.tar

# 导入容器
$ car test.tar | docker import - test/test:v1
```

## 删除容器

```bash
$ docker rm -f 770204f3b42f

```
