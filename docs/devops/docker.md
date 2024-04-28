# Docker

## docker配置
- 配置docker日志和数据存储目录
```text
# 用vim打开配置文件
vim /etc/docker/daemon.json
# 加入以下内容
   "data-root": "/home/docker", // docker的数据存储路径 
    "log-driver": "json-file", // 日志驱动格式
    "log-opts": {
        "max-file": "3", // 每个容器最大文件格式个数
        "max-size": "500m"  // 最大的日志文件大小
    }
```


## docker 编译应用项目
### docker 编译vue项目
```shell
cd your_project_dir # cd 到你的项目路径下
docker run --rm -v ./:/app -w /app node:20-alpine sh -c "yarn && yarn build" 
```