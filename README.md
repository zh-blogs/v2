# 中文博客列表导航项目 v1.0.3 博客分类与推荐
## 新更新：博客分类与推荐
*博客推荐*

我们日后会根据访客的来源博客为你优先显示与其相关的博客，同时我们正在进行优质博客推荐的相关讨论。     

为了更好地获取来源博客，请各位站长将指向本导航的链接换为`https://zhblogs.ohyee.cc/?from=你的博客域名`，例如`https://zhblogs.ohyee.cc/?from=www.yayu.net`。 

我们没有强制站长添加链接，以上是指对站长自愿添加的链接的建议。       

*博客分类*

这个想法从我们项目组群的一个建议开始。

> OhYee 2022/3/16
> 
>就我点 travelling 的体验来说，我更希望可以随机到我想看的分类的博客里（甚至具体到技术领域）

目前，标签搜索已经被开发出来，欢迎大家提出建议。

我们现在正在进行博客标签的添加和指定标签随机跳转工作。
## 说明
我们立志要链接全部的中文独立博客。    
本项目的在线地址是https://zhblogs.ohyee.cc/ ，你可以在网页中点击链接进行串门、交换友链，也可以调查中文独立博客的共性。        
各位大佬可以从https://zhblogs.ohyee.cc/go.html 随机访问博客。        
我们会不定期手动将列表中的博客进行存档，存档的详细信息请见 https://github.com/linlinzzo/blog-daohang/discussions 。    
我们之后会向上游库提交它们没有收录的博客网站，互通有无。（一些有附带条件的上游库，比如`十年之约`，我们将不会提交）

## 项目如何发现博客
根据超链接，我们可以从种子博客中找到十多个不等的网站地址，这些地址中符合要求的会自动成为新的种子博客。     
理论上来说，博主不需要提交网址，就能被我们发现。  
我们同时也会使用一些上游库（随机排序，排序不带有任何含义）。
| 名称      | 网址 | 是否使用|
| ----------- | ----------- | -------|
| timqian/chinese-independent-blogs      | https://github.com/timqian/chinese-independent-blogs    | 没用完|
| 博客志   | http://www.jetli.com.cn/    | 用完了|
| 中文独立博客导航   | https://www.blogwall.cn/nav/    | 没|
| 博客联盟   | https://blorg.cn/    | 没|
| BLOS'空间   | https://c.sady0.com/   | 用完了|
| BlogFinder   | https://bf.zzxworld.com/  | 没用|
|TUNA Blogroll   | https://github.com/tuna/blogroll | 没|
|bloghub   | https://github.com/shidenggui/bloghub/blob/master/backend/assets/blogs-original.csv | 没|
|十年之约   | https://www.foreverblog.cn/blogs.html | 没用完|
|  BlogRoll  |https://github.com/NUAA-Open-Source/BlogRoll |没|

## 如何支持该项目
1. 如果网站名称或地址出现更换或博客失效，请提个 issue。        
2. 可以为本项目做宣传，让更多人知道本项目。         
3. 程序员可以帮忙实现本项目的功能目标，代码类事务目前交由 @OhYee 和 @Mabbs 进行管理。       
### 博客收录标准
1. 是中文网站（在 html 开头声明`lang="zh"`[^1]）。
2. 是博客网站且有3篇及以上的博文（企业官网发布的为了搜索引擎优化的文章不在博文范围内[^2]）。
3. 拥有独立域名（可以证明博客使用的域名的所有权，github.io类型除外）。
4. 尊重科学、公认事实、约定俗成和伦理道德，在给出依据和尊重他人的前提下挑战权威者除外。

在收录博客网站时，我们会以非专业的角度评定网站是否符合收录标准，不能排除存在疏漏的可能性。      
任何人可以根据博客收录标准对任一博客的收录资格提出异议。 

[^1]: 在实际操作中，我们有遇到错标成en的博客，我们也会将其收录。（我们会尝试向站长发送邮件建议站长修正） 
[^2]: 因为一些原因，seo博客需要经过项目组讨论，例如 https://github.com/linlinzzo/blog-daohang/issues/9 。  
## ToDo
- [ ] 指定标签的随机跳转
- [ ] 博客列表响应
- [ ] 列表维护后台

## 数据开发说明
data.json中关于数据的说明:

1. `name`指博客网站的名称（一些较长的备用名会放在一句话介绍）
2. `url`指博客网站的网址（不一定是首页）
3. `tag`指博客网站的标签
4. `sign`指博客网站的一句话介绍(有一些没找到，会放空）
5. `status`指博客的状态（可能不准）

建议调用本仓库中的data.json，因为这个文件一直在更新。
