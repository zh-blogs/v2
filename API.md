# API 接口

## 规范

遵守 [RESTful 规范](http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html)

成功 (如文档无示例) 默认返回

```json
{
  "status": true
}
```

失败默认返回

```json
{
  "message": "error-message"
}
```

并按请求类型提供状态码

## 公开

### 获取博客标签列表

> `GET` /tags

#### 返回

博客标签的数组

```json
["综合", "Python"]
```

### 获取博客列表数据

> `GET` /blogs

#### 请求

|   键   |       描述       | 是否必填 |  类型  |                   备注                    |
| :----: | :--------------: | :------: | :----: | :---------------------------------------: |
| search | 筛选博客的关键词 |    否    | string |                                           |
|  tags  |  筛选博客的标签  |    否    | string |        不同标签之间用英文逗号分隔         |
| status |  筛选博客的状态  |    否    | number | `0` 全部，`1` 展示，`-1` 不展示，`2` 推荐 |
| offset |      偏移量      |    否    | number |            用于博客的分页展示             |
|  size  |  返回博客的个数  |    否    | number |          默认为 `-1`，即全量返回          |

#### 返回

```
{
  "total": 1694,
  "blogs": [
    {
      // 使用 uuid4 算法生成的 id
      "id": "1064f634-f899-4048-8b0d-ce9f124d98b4",
      // 表示顺序的数字（非连续）
      "idx": 1,
      // 博客网站的名称
      "name": "卷土",
      // 博客网站的网址
      "url": "https://juantu.cn/",
      // 元素为博客标签的数组
      "tags": ["综合", "Python", "科技", "杂录"],
      // 博客网站的一句话介绍
      "sign": "现只为做成一件事",
      // 博客网站的订阅地址
      "feed": "https://juantu.cn/feed",
      // 指示博客网站是否重复的布尔值
      "repeat": false,
      // 指示博客网站是否审核通过的布尔值
      "enabled": true,
      // 博客网站的网站地图地址
      "sitemap": "https://juantu.cn/sitemap.xml",
      // 博客网站的架构
      "arch": "WordPress",
      // 博客网站加入的时间戳
      "join_time": 1651600790154,
      // 博客网站修改的时间戳
      "update_time": 1656416524808,
      // 用于与 saveweb 互联
      "saveweb_id": "896",
      // 指示博客网站是否为推荐博客的布尔值
      "recommend": false
    }
  ]
}
```

### 获取随机博客数据

> `GET` /blogs/random

#### 请求

|  键   |      描述      | 是否必填 |  类型  |            备注            |
| :---: | :------------: | :------: | :----: | :------------------------: |
| tags  | 筛选博客的标签 |    否    | string | 不同标签之间用英文逗号分隔 |
| count | 获取数据的个数 |    否    | number |         默认为`10`         |

#### 返回

```
[
  {
    // 使用 uuid4 算法生成的 id
    "id": "1064f634-f899-4048-8b0d-ce9f124d98b4",
    // 表示顺序的数字（非连续）
    "idx": 1,
    // 博客网站的名称
    "name": "卷土",
    // 博客网站的网址
    "url": "https://juantu.cn/",
    // 元素为博客标签的数组
    "tags": ["综合", "Python", "科技", "杂录"],
    // 博客网站的一句话介绍
    "sign": "现只为做成一件事",
    // 博客网站的订阅地址
    "feed": "https://juantu.cn/feed",
    // 指示博客网站是否重复的布尔值
    "repeat": false,
    // 指示博客网站是否审核通过的布尔值
    "enabled": true,
    // 博客网站的网站地图地址
    "sitemap": "https://juantu.cn/sitemap.xml",
    // 博客网站的架构
    "arch": "WordPress",
    // 博客网站加入的时间戳
    "join_time": 1651600790154,
    // 博客网站修改的时间戳
    "update_time": 1656416524808,
    // 用于与 saveweb 互联
    "saveweb_id": "896",
    // 指示博客网站是否为推荐博客的布尔值
    "recommend": false
  }
]
```

### 获取架构统计信息

> `GET` /arch

#### 返回

```
[
  {
    // 架构名称
    "name": "WordPress",
    // 架构使用人数
    "count": 285,
    // 架构简介
    "description": "WordPress 是一款能让您建立出色网站、博客或应用程序的开源软件。",
    // 架构官网
    "url": "https://cn.wordpress.org/"
  }
]
```

### 获取顶级域名统计信息

> `GET` /domain

#### 返回

```
[
  {
    // 顶级域名
    "name": "cn",
    // 使用人数
    "count": 290
  }
]
```

## 后台登录

### 登录

> `POST` /login

#### 请求

```json
{
  "username": "jsun969",
  "password": "xxx"
}
```

#### 返回

```json
{
  // JWT
  "token": "xxxxx"
}
```

## 后台

> **Note**  
> 以下请求中 Header 中需包含 authorization 字段 (值为 jwt) 以鉴权

### 鉴权

> `GET` /auth

#### 请求

无请求主体，仅验证 Header 中 token 是否合法

### 新增博客

> `POST` /blog

#### 请求

```
{
  // 博客网站的名称
  "name": "卷土",
  // 博客网站的网址
  "url": "https://juantu.cn/",
  // 元素为博客标签的数组
  "tags": ["综合", "Python", "科技", "杂录"],
  // 博客网站的一句话介绍
  "sign": "现只为做成一件事",
  // 博客网站的订阅地址
  "feed": "https://juantu.cn/feed",
  // 博客网站的网站地图地址
  "sitemap": "https://juantu.cn/sitemap.xml",
  // 博客网站的架构
  "arch": "WordPress"
}
```

### 修改博客信息

> `PATCH` /blog

#### 请求

|  键   |          描述          | 是否必填 |  类型  |    备注    |
| :---: | :--------------------: | :------: | :----: | :--------: |
|  id   |     目标博客的编号     |    是    | number |            |
|  key  |  需要修改的信息项名称  |    是    | string | 例如`name` |
| value | 需要修改的信息项的内容 |    是    | srting | 例如`卷土` |

### 删除博客信息

> `DELETE` /blog

#### 请求

| 键  |      描述      | 是否必填 |  类型  |
| :-: | :------------: | :------: | :----: |
| id  | 目标博客的编号 |    是    | number |

### 删除标签

> `DELETE` /tag

#### 请求

| 键  |   描述   | 是否必填 |  类型  |     备注     |
| :-: | :------: | :------: | :----: | :----------: |
| tag | 目标标签 |    是    | string | 例如`Python` |

### 获取后台配置信息

> `GET` /settings

#### 返回

```json
{
  "key": "admin",
  "value": ""
}
```

### 修改后台配置信息

> `PUT` /setting

#### 请求

|  键   |    描述    | 是否必填 |  类型  |
| :---: | :--------: | :------: | :----: |
|  key  | 要修改的键 |    是    | string |
| value | 要修改的值 |    是    | string |