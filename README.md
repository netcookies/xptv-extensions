### 小雅 -- 可连接自己搭建的小雅AList和小雅TvBox

- 前提条件：需要自行搭建小雅相关服务才可连接。（请确认自己的小雅是否可以正常使用
不知如何搭建可前往[**xiaoya官方群**](https://t.me/xiaoyaliu00)进一步了解或去[**xiaoya-alist**](https://github.com/DDS-Derek/xiaoya-alist) 查看。（相关环境：[**Docker](https://joshhu.gitbooks.io/docker_theory_install/content/DockerBible/ubuntuvm.html)，[xiaoya-alist](https://github.com/DDS-Derek/xiaoya-alist)**
- **使用方法**
    1. 添加订阅地址：
        
        
        - 小雅TvBox（推荐，因为搭建后有可视化面板配置起来方便一些。
        
        <aside>
        💡
        
        **国内直连**
        [`https://ghp.xptvhelper.link/https://raw.githubusercontent.com/fangkuia/XPTV/refs/heads/main/AList/xiaoya-tvbox.json`](https://ghp.xptvhelper.link/https://raw.githubusercontent.com/fangkuia/XPTV/refs/heads/main/AList/xiaoya-tvbox.json)
        
        **自行代理**(推荐，但订阅前确保可以连接上GitHub
        [`https://raw.githubusercontent.com/fangkuia/XPTV/refs/heads/main/AList/Xiaoya-tvbox.json`](https://raw.githubusercontent.com/fangkuia/XPTV/refs/heads/main/AList/Xiaoya-tvbox.json)
        
        </aside>
        
    2. 搭建好后在对应资源的配置中点击“自定义配置”输入：
        
        ```json
        //小雅AList-tvbox
        //token为选填，在alist-tvbox - 配置 - 安全订阅 - 安全Token里可以找到
        {
        "url": "",
        "token": ""
        }
        ```
        
        AList_TvBox例：
        
        ![image.png](attachment:85c0aad0-eb1b-418a-a213-76df2c2931d4:add4870d-9535-4940-822c-4ac5bb399fed.png)
        
        ![截屏2024-10-10 4.28.01.png](attachment:df0f82c1-0106-4414-b5cd-da85bf6d5501:%E6%88%AA%E5%B1%8F2024-10-10_4.28.01.png)
        
    3. 保存后返回订阅页再打开即可加载。
    4. 小雅资源需要使用内置播放器才可播放，使用前需去XPTV设置里查看是否使用了内置播放器。
