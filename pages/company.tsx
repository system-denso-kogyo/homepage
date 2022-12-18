import Layout from '../components/layout/layout';
import { Title, PhilosophyArea } from '../components';

export const Home = () =>
    <Layout>
        <Title text={'企業理念'} css={{ paddingTop: '60px' }}></Title>
        <PhilosophyArea {...{
            philosophy: [
                {
                    description: 'お客様の未来を常に創造し受容されること'
                },
                {
                    description: '社員一人一人が改善を継続すること'
                },
                {
                    description: '仕事で得た諸財産は社会へ還元すること'
                }
            ]
        }}>
        </PhilosophyArea>
    </Layout>

export default Home;