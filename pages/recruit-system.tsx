import Layout from '../components/layout/layout';
import { Title, RecruitSystemInfoArea, RecruitSystemNewGraduateArea, RecruitSystemMidwaytArea } from '../components';

export const Home = () =>
    <Layout>
        <RecruitSystemInfoArea {...{
            recruit: {
                imageName: "recruit-system/Photo-1.png",
                description: {
                    title: "",
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。",
                }
            },
            RecruitmentFlow1: {
                description: {
                    title: "フロー",
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。",
                }
            },
            Arrow: {
                description: {
                    title: "▷"
                }
            },
            RecruitmentFlow2: {
                description: {
                    title: "フロー2",
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。",
                }
            },
            Arrow: {
                description: {
                    title: "▷"
                }
            },
            RecruitmentFlow3: {
                description: {
                    title: "フロー3",
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。",
                }
            },
            Arrow: {
                description: {
                    title: "▷"
                }
            },
            RecruitmentFlow4: {
                description: {
                    title: "フロー4",
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。",
                }
            },
            Arrow: {
                description: {
                    title: "▷"
                }
            }
        }
        }></RecruitSystemInfoArea>
        <RecruitSystemNewGraduateArea {...{
            history: [
                {
                    year: '19XX年',
                    body: [
                        {
                            month: 'XX月',
                            text: '親譲りの無鉄砲で小供の時から損ばかりしている。'
                        },
                        {
                            month: 'XX月',
                            text: '親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二'
                        },
                    ]
                },
                {
                    year: '19XX年',
                    body: [
                        {
                            month: 'XX月',
                            text: '親譲りの無鉄砲で小供の時から損ばかりしている。'
                        },
                        {
                            month: 'XX月',
                            text: '親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二'
                        },
                    ]
                },
                {
                    year: '19XX年',
                    body: [
                        {
                            month: 'XX月',
                            text: '親譲りの無鉄砲で小供の時から損ばかりしている。'
                        },
                        {
                            month: 'XX月',
                            text: '親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二'
                        },
                    ]
                },
                {
                    year: '20XX年',
                    body: [
                        {
                            month: 'XX月',
                            text: '親譲りの無鉄砲で小供の時から損ばかりしている。'
                        },
                        {
                            month: 'XX月',
                            text: '親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二'
                        },
                    ]
                },
                {
                    year: '20XX年',
                    body: [
                        {
                            month: 'XX月',
                            text: '親譲りの無鉄砲で小供の時から損ばかりしている。'
                        },
                        {
                            month: 'XX月',
                            text: '親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二'
                        },
                    ]
                },
                {
                    year: '20XX年',
                    body: [
                        {
                            month: 'XX月',
                            text: '親譲りの無鉄砲で小供の時から損ばかりしている。'
                        },
                        {
                            month: 'XX月',
                            text: '親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二'
                        },
                    ]
                },
            ]
        }}>
        </RecruitSystemNewGraduateArea>
        <RecruitSystemMidwaytArea {...{
            recruit: {
                imageName: "recruit-system/Photo.png",
                description: {
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。",
                }
            }
        }}></RecruitSystemMidwaytArea>
    </Layout >

export default Home;