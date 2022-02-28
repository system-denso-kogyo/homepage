import Layout from '../components/layout/layout';
import { IntroductionArea } from '../components';
import { EquipmentArea } from '../components';
import { SystemArea } from '../components';



export const Home = () =>
    <Layout>
        <IntroductionArea {...{
            introduction: {
                description: {
                    title: "",
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫",
                    path: ""
                }
            },
            construct: {
                imageName: "top/Photo-4.png",
                description: {
                    title: "",
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫",
                    path: ""
            }
        },
        system: {
            imageName: "top/Photo-3.png",
                description: {
                    title: "",
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫",
                    path: ""
            }
        }

        }
        }></IntroductionArea>
        <EquipmentArea {...{
            introduction: {
                imageName: "top/Photo-4.png",
                description: {
                    title: "",
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫",
                    path: ""
            }
        },
            achievements: {
                title: "サービス・事業実績一覧",                
                left: [     
                        "ＡＩ監視カメラ工事(設置図面作成・機材調達・ＬＡＮ工事・監視カメラ設置)",
                        "システム工事(音響スタジオ・入退室管理システム・防犯システム工事)",
                        "ＬＡＮ工事(配線図面作成・部材／機材調達・配線工事)",
                        "電気工事(事務所／一般店舗などの図面作成からＯＡフロア施工・電気工事)",
                        "空調設備工事 (空調設備図面作成・機材調達・空調工事)" 
                ],
                right: [
                         "あああああああああああああああああああああああああああああああああ",
                         "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい",
                         "ううううううううううううううううううううううううううううううううう",
                         "えええええええええええええええええええええええええええええええええ",
                         "おおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおお" 
                ]
            }

        }
        }></EquipmentArea>
        <SystemArea {...{
            introduction: {
                imageName: "top/Photo-3.png",
                description: {
                    title: "",
                    description: "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫",
                    path: ""
            }
        },
            achievements: {
                title: "サービス・事業実績一覧",
                left: ["医薬品Ｗｅｂシステム開発・保守","ネットバンキング開発・保守","損保系システム開発・保守","通信系基地局開発・保守","信系料金システム開発・保守"],
                right: ["通信系システム開発・運用","流通系システムコンサル","商社向けECサイト保守","金融系システム開発・保守","営業支援他"]
            }

        }
        }></SystemArea>

    </Layout>

export default Home;

