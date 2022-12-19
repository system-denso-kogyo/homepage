import Layout from '../components/layout/layout';
import { IntroductionArea } from '../components';
import { EquipmentUnit, SystemUnit } from '.';
import { BusinessDetailedUnitArea } from '../components/businessDetailedUnitArea';



export const Home = () =>
    <Layout>
        <IntroductionArea {...{
            introduction:  "社会が求める高度情報化の波は21世紀という時代の要請です。そういう時代の各種プラントの自動化、省力化システムの開発、さまざまな工程での制御システムの設計と製作、さらに電気設備や冷暖房のほか防災用制御システムまで組み込んだトータルなプラント設計・施工など、多様なニーズに、SDKは大きく応えています。若い情熱と、生き生きとした創造力でSDKは、新しい未来を切り開いていきます。",
        }
        }></IntroductionArea>
        <BusinessDetailedUnitArea {...EquipmentUnit}></BusinessDetailedUnitArea>
        <BusinessDetailedUnitArea {...SystemUnit}></BusinessDetailedUnitArea>
    </Layout>

export default Home;

