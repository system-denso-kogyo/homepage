
import { CMSListResult, CMSResult } from '../util/cmsResult';
import { Container, Row, Col } from '@mverissimoo/emotion-grid';
import dayjs from 'dayjs';

interface Article extends CMSResult {
    title: string
    body: string
    visibility: boolean
}

export interface InformationProps extends CMSListResult {
    contents: Article[]
}

export const Information: React.FC<InformationProps> = ({ contents }: InformationProps) => {
    return <Container>
        <h1 css={{ textAlign: 'center' }}>お知らせ</h1>
        {contents.map((article: Article) =>
            <li css={{
                listStyleType: 'none',
                marginBottom: '40px'
            }}>
                <Row>
                    <Col sm={2} css={{ textAlign: 'right' }}>{dayjs(article.createdAt).format('YYYY年MM月DD日')}</Col>
                    <Col sm={6}>{article.title}</Col>
                </Row>
            </li>
        )}
    </Container>
}