import Layout from '../components/layout/layout';
import { Title, OverviewArea } from '../components';

export const Home = () =>
    <Layout>
        <Title text={'企業情報'} css={{ paddingTop: '60px' }}></Title>
        <OverviewArea {...{
            overview: [
                {
                    title: '社名',
                    description: 'システム電装工業 株式会社　　System Denso Kogyo Co.,Ltd'
                },
                {
                    title: '代表者',
                    description: '西山　敦雄'
                },
                {
                    title: '本社所在地',
                    description: `〒110-0012
                    東京都台東区竜泉1- 9 - 2
                    →アクセス
                    TEL. 03-5603-6131`},
                {
                    title: '資本金',
                    description: '50,000,000円　授権資本金120,000,000円'
                },
                {
                    title: '設立',
                    description: '1982年2月17日'
                },
                {
                    title: '取引銀行',
                    description: 'りそな銀行 日暮里支店　　みずほ銀行 尾久支店'
                },
                {
                    title: '事業内容',
                    description: `情報システムの受託開発・運用・保守
                    設備工事（LAN工事、電気工事、空調工事、その他各種工事）`
                },

                {
                    title: '許認可番号',
                    description: `建設業許可番号　都(般-２８) 084723
                    労働者派遣事業　派13- 309555`
                },
                {
                    title: '主要取引先',
                    description: `日本ユニシス株式会社　ユニアデックス株式会社　沖電気工業株式会社
                    株式会社ＯＫＩソフトウェア　ジャパンシステム株式会社
                    株式会社セントラル情報センター　株式会社ＳＫ２　株式会社ティエム2
                    株式会社エス・イー・シー・ハイテック　株式会社TOKAIコミュニケーションズ
                    株式会社日本データコントロール　他`
                }
            ]
        }}></OverviewArea>
    </Layout >

export default Home;