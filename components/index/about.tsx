import { Typography } from 'antd';
const { Paragraph, Link } = Typography;


const links = [
  { name: "寻我 | 优秀个人独立博客收录", url: "https://seekbetter.me/" },
  { name: "中文独立博客列表", url: "https://github.com/timqian/chinese-independent-blogs" },
  { name: "优秀个人独立博客导航", url: "http://www.jetli.com.cn/" },
  { name: "博客联盟", url: "https://blorg.cn/" },
  { name: "BlogFinder - 发现优秀的个人博客", url: "https://bf.zzxworld.com/" },
  { name:"十年之约", url:"https://www.foreverblog.cn/" }, 
];

const linkStyle={ margin:"0 0.2em" };

export function AboutTab() {
  return (
    <Typography>
      <Paragraph>
        我们尝试链接几乎所有的中文博客，并使用这个地址库不定期为中文博客存档。
      </Paragraph>
      <Paragraph>
        您可以在
        <Link href="https://github.com/zh-blogs/zh-blog-database/tree/main/database" style={linkStyle}>
          zh-blogs/zh-blog-database
        </Link>
        中找到本项目中的所有博客信息, 数据每日更新。
      </Paragraph>
      <Paragraph>
        我们的项目博客在
        <Link href="https://blog.zhblogs.ohyee.cc" style={linkStyle}>中文博客列表导航项目博客</Link>
      </Paragraph>
      <Paragraph>
        我们的 Github 仓库地址是
        <Link href="https://github.com/zh-blogs/blog-daohang" style={linkStyle}>
          zh-blogs/blog-daohang
        </Link>
        。如果想为本项目贡献一份力量，可以通过 Github
        联系我们。如果想让我们收录你的网站，可以在本项目的 Github 仓库中提交
        issue。
      </Paragraph>
      <Paragraph>
        由于我们刚开始博客网站的收集工作，一些博客还未收录，你可以向我们提供未收录的博客地址以便我们改进，也可以去别的导航项目，也许你会发现更多。
      </Paragraph>
      <Paragraph>
        <ul>
          {links.map((item) => <li key={item.url}><Link href={item.url}>{item.name}</Link></li>)}
        </ul> 
      </Paragraph>
    </Typography>
  );
}
