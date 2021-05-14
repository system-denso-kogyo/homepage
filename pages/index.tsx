import React from "react";
import Layout from '../components/layout/layout';
import { VideoArea, Information } from '../components';

export const Home = () => {
    return <React.Fragment>
        <Layout>
            <VideoArea>
                <div css={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#ffffff59'
                }}>
                    <Information {...{
                        contents: [
                            {
                                id: "jp1_7a1ru",
                                createdAt: "2021-05-03T05:38:10.305Z",
                                updatedAt: "2021-05-14T02:43:36.046Z",
                                publishedAt: "2021-05-14T02:43:36.046Z",
                                revisedAt: "2021-05-14T02:43:36.046Z",
                                title: "２０２２年度の新卒サイトを開設しました。（就活サイトTSUNORUはこちらから） ",
                                body: "<p>testtest</p>",
                                visibility: true
                            },
                            {
                                id: "jp1_7a1ru",
                                createdAt: "2021-05-03T05:38:10.305Z",
                                updatedAt: "2021-05-14T02:43:36.046Z",
                                publishedAt: "2021-05-14T02:43:36.046Z",
                                revisedAt: "2021-05-14T02:43:36.046Z",
                                title: "２０２１年度の新卒採用は終了しました。 ",
                                body: "<p>testtest</p>",
                                visibility: true
                            },
                            {
                                id: "jp1_7a1ru",
                                createdAt: "2021-05-03T05:38:10.305Z",
                                updatedAt: "2021-05-14T02:43:36.046Z",
                                publishedAt: "2021-05-14T02:43:36.046Z",
                                revisedAt: "2021-05-14T02:43:36.046Z",
                                title: "ＩＴ＆女性に特化した転職・求人サイトに登録しました。",
                                body: "<p>testtest</p>",
                                visibility: true
                            }
                        ],
                        totalCount: 1,
                        offset: 0,
                        limit: 10
                    }
                    }></Information>
                </div>
            </VideoArea>
        </Layout>
    </React.Fragment>
}

export default Home;