import { NextPage } from "next";
import Link from "next/link";
import React from "react";

import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { Tabs, Tab, Card } from "@/components/antd";
import { Flex } from "@/components/flex";
import { AboutTab } from "@/components/index/about";
import { Blogs } from "@/components/index/blogs";
import { Charts } from "@/components/index/charts";
import { RandomBlogs } from "@/components/index/random";
import { Side } from "@/components/layout/side";

import { useQuery, shouldString } from "@/utils";
import { Context } from "@/utils";

const Home: NextPage<{
  inititalQuery: { [key: string]: string | string[] };
}> = (props) => {
  const { inititalQuery } = props;
  const [query, setQuery] = useQuery({ tab: "random", ...inititalQuery });
  const { tab } = query;
  const tabs: Tab<any>[] = React.useMemo(
    () =>
      [
        {
          key: "random",
          tab: "随机博客推荐",
          render: () => <RandomBlogs />,
        },
        {
          key: "blog_list",
          tab: "博客列表",
          render: () => <Blogs />,
        },
        {
          key: "charts",
          tab: "数据图表",
          render: () => <Charts />,
        },
        { key: "about", tab: "关于", render: () => <AboutTab /> },
      ] as Tab[],
    [],
  );
  const ctx = React.useContext(Context);
  const { width } = ctx;
  const isBigScreen = React.useMemo(() => {
    return width > 960;
  }, [width]);

  return (
    <Flex direction="TB" fullWidth>
      <Card bordered={false} shadow>
        <Flex
          direction="LR"
          mainAxis="flex-start"
          subAxis="center"
          mainSize="large"
        >
          <Flex.Item style={{ textAlign: "center", margin: "auto" }}>
            <img src="/logo.png" alt="logo" width={150} />
          </Flex.Item>
          <Flex.Item style={{ flex: "auto" }}>
            <Flex direction="TB" fullWidth mainSize="large">
              <span style={{ fontSize: "2em", fontWeight: "bold" }}>
                中文博客列表导航项目
              </span>
              <Flex direction="LR" subSize="large">
                <span>尝试链接几乎所有的中文博客</span>
                <Link href="/manager/join" passHref>
                  <Button type="primary" icon={<PlusOutlined />}>
                    申请加入
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Flex.Item>
        </Flex>
      </Card>

      <Flex
        direction={isBigScreen ? "LR" : "TB"}
        subAxis="flex-start"
        mainSize="large"
        subSize="large"
        wrap={false}
      >
        <Flex.Item
          style={
            isBigScreen
              ? { flex: "auto", width: "calc(100% - 300px - 50px)" }
              : { width: "100%" }
          }
        >
          <Card bordered={false} shadow>
            <Tabs<any>
              tabs={tabs}
              activeKey={shouldString(tab, "random")}
              onChange={(tab) => setQuery({ ...query, tab })}
            />
          </Card>
        </Flex.Item>
        <Flex.Item style={{ width: isBigScreen ? 300 : "100%" }}>
          <Card bordered={false} shadow>
            <Side />
          </Card>
        </Flex.Item>
      </Flex>
    </Flex>
  );
};

Home.getInitialProps = async (ctx) => {
  console.log(ctx.query);

  return {
    inititalQuery: ctx.query as { [key: string]: string | string[] },
  };
};

export default Home;
