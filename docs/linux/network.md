# Linux 网络
## nmcli 设置静态IP
- 查看网卡设备名称,找到想要配置的网卡名称。例如，假设想要配置的网卡名称是 eth0。
```shell
nmcli device show
```
- 设置静态 IP 地址、子网掩码、网关和 DNS 服务器
```shell
# 设置静态ip地址 /24是子网掩码
sudo nmcli connection modify eth0 ipv4.addresses 192.168.1.100/24
# 设置网关地址
sudo nmcli connection modify eth0 ipv4.gateway 192.168.1.1
# 设置dns服务器地址
sudo nmcli connection modify eth0 ipv4.dns 8.8.8.8
```
- 激活修改后的连接
```shell
sudo nmcli connection up eth0
```