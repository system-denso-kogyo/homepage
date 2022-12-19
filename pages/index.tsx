import Layout from '../components/layout/layout';
import { VideoArea, Information, AboutArea, BusinessArea } from '../components';
import { RecruitArea } from '../components/recruitArea';
import { BusinessDetailedUnitAreaProps } from '../components/businessDetailedUnitArea';

export const Home = () =>
    <Layout>
        <VideoArea {...{
            videos: [
                {
                    source: 'top/sdk_pr_top.mp4',
                    destination: '/'
                },
                {
                    source: 'top/sdk_pr_system.mp4',
                    destination: 'business#system'
                },
                {
                    source: 'top/sdk_pr_equipment.mp4',
                    destination: 'business#equipment'
                }
            ]
        }}>
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
        <AboutArea {...{
            articles: [
                {
                    imageName: "top/Photo.png",
                    description: {
                        title: "会社の歴史　Company history",
                        description: "　当社は１９８２年２月に東京都に工事業者として開業しました。その後はシステム開発事業を新設し他社との差別化を図ってまいりました。工事部門は各種システムや制御装置の据え付けなどのほか、プラントの設計・施工に関する諸工事を行ってきました。また、システム開発部門は各産業分野の多様なニーズに対応し、システム化の調査・開発を一貫して行ってきました。",
                        path: ""
                    }
                },
                {
                    imageName: "top/Photo-1.png",
                    description: {
                        title: "会社の未来　The future of the company",
                        description: "　ＳＤＫは情報技術と設備工事で人々の生活をあらゆる面でより良い方向に変化させることを目指します。そのために今を第二創業期として位置付け変化に対応する企業から変化を起こす企業へと生まれ変わります。",
                        path: "/company"
                    }
                },
                {
                    imageName: "top/Photo-2.png",
                    description: {
                        title: "わが社の情報",
                        description: "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな",
                        path: "/profile"
                    }
                },
            ]
        }
        }></AboutArea>
        <BusinessArea {...{
            system: {
                imageName: SystemArticle.imageName,
                description: {...SystemArticle}
            },
            construct: {
                imageName: EquipmentArticle.imageName,
                description: {...EquipmentArticle}
            },
        }
        }></BusinessArea>
        <RecruitArea {...{
            recruit: {
                imageName: "top/Photo-5.png",
                description: {
                    title: "求む！",
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。",
                }
            },
            system: {
                imageName: "top/Photo-6.png",
                description: {
                    title: "システム事業",
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出して",
                    path: "/recruit-system"
                }
            },
            construct: {
                imageName: "top/Photo-7.png",
                description: {
                    title: "工事事業",
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出して",
                    path: "/recruit-equipment"
                }
            }
        }
        }></RecruitArea>
    </Layout>

export const SystemUnit : BusinessDetailedUnitAreaProps = {
    name: 'system',
    title: "システム開発事業",
    subtitle: "System development business",
    description: "これまで金融・医療・通信・流通・自治体・学校関係など様々な業種に対応したWeb系システムや汎用機系システムまでを対応してきました。",
    texts: [
        "最近では特に医療系やECサイトのWebシステムの開発・運用を得意としています。また、システムコンサルティングとして、お客様の現行運用を分析し､「業務改革」･「戦略ある経営化」など､情報システムに係わる幅広い分野に対して､お客様の抱える課題に取り組み､真の問題解決となるソリューションを提案してきました。",
        "今後は従来の技術に加えECサイト、通信キャリア、医薬品ソリューション、コンビニエンスのシステム開発におけるPM、PMO、SE、プログラミングに注力することで社会貢献を目指します。"
    ],
    achievements: {
        achievements:[
            {
                items:[
                    "医薬品Ｗｅｂシステム", "ネットバンキング", "損保系システム", "通信系基地局", "信系料金システム", "金融系システム", 
                ]
            },
            {
                items:[
                    "通信系システム開発・運用", "流通系システムコンサル",  "商社向けECサイト保守",  "営業支援他"
                ]
            }
        ]
    },
    imageName: "top/Photo-3.png",
    path: "/business#system"
}

export const EquipmentUnit : BusinessDetailedUnitAreaProps = {
    name: 'equipment',
    title: "設備工事事業",
    subtitle: "Equipment construction business",
    description: "各種システムや制御装置の据え付けなどのほか、プラントの設計・施工に関する諸工事を行います。",
    texts: [],
    achievements: {
        achievements: [
            { 
                head: "システム工事",
                description: "スタジオ・入退館・防犯等の特殊設備の設計・施工を行います。",
                items: [
                    "音響スタジオ工事　大学、企業内のスタジオ工事（ラック・機器・施工）",
                    "入退館管理システム工事　事業所内入退館システムの施工",
                    "防犯システム工事　監視カメラによる防犯システムの施工"
                ]
            },
            {
                head: "LAN工事",
                description: "部材・機器の調達及び配線図面作成並びに、LAN配線工事、Wifi工事を行います。構内全体、ビル内、事務所内等の規模に拘らず工事を行います。"
            },
            {
                head: "電気工事",
                description: "事務所内及び一般店舗の電気工事を行います。OAフロアー施工（図面作成・機器調達・施工）",
                items:[ "電源コンセント", "照明他", "電気工事" ]
            },
            {
                head: "空調設備工事",
                description: "電算室・事務所内・ビル内空調設備施工（図面、機材調達、施工）工事を行います。"
            },        
            {
                head: "AIカメラの代理店",
                description: "兼松サステック株式会社様と協同でAIカメラの代理店を行っています。兼松サステック株式会社様はHanwha Techwinの日本正規総代理店として国内に年間約4000件の導入実績があります。",
                items: ["アパート", "飲食チェーン", "信用金庫", "カラオケ", "銀行等"]
            }
        ]
    },
    imageName: 'top/equipment1.jpg',
    path: "/business#equipment"
}

export default Home;