# Jenkins 

## Jenkins 通过Execute shell部署vue项目
```shell
#!/bin/bash

if [ "$PROJECT_NAME" != "vue_project" ];then
	echo "本次推送不是该项目，无需部署"

else
	echo "$PROJECT_NAME"
fi

REMOTE_SERVER="root@192.168.1.110"
function test() {
    # shellcheck disable=SC2181
    docker run --rm -v ./:/app -w /app node:20-alpine sh -c "yarn && yarn build"
    if [ $? -eq 0 ]; then
      echo "安装依赖和打包完成完成"
    else
      echo "安装依赖或者打包失败"
      exit 1
    fi
    #
    ssh -T -i ~/.ssh/id_rsa $REMOTE_SERVER << EOF
		cd /app/vue_project
    	pwd
    	rm -rf ./*
EOF
    cd dist
    scp -r ./* $REMOTE_SERVER:/app/vue_project
    if [ $? -eq 0 ];then
      echo "部署成功"
    else 
      exit 1
    fi
}

if [ "$ENV" == "prod" ];then
  echo "生产"
else
  echo "测试"
  test
fi
```