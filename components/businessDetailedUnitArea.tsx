import { Col, Container, Row } from "@mverissimoo/emotion-grid";
import { Image } from ".";
import { Achievements, AchievementsProps } from "./elements/achievements";
import { DescriptionParagraph } from "./elements/description";


export interface BusinessDetailedUnitAreaProps {
    name: string,
    title: string
    subtitle: string
    description: string
    texts: string[]
    achievements?: AchievementsProps
    imageName: string
    path: string
}

export const BusinessDetailedUnitArea: React.FC<BusinessDetailedUnitAreaProps> = (article) =>  {
    return <Container fluid css={{
        marginTop: '80px',
        borderBottom: '1px solid #457b9d',
        paddingBottom: '40px'
    }} id={article.name}>
        <h1 css={{ textAlign: "left" }}>{article.title}
            {article.subtitle !== undefined && <span css={{
                'margin-left':'10px', fontSize:'1.3rem'}}>{article.subtitle}</span>}
        </h1>
        <Row justify={"center"} css={{ marginTop: '40px' }}>
            <Col sm={3}>
                <Image width={'100%'} src={article.imageName}></Image>
            </Col>
            <Col sm={3}>
                <DescriptionParagraph description={article.description}></DescriptionParagraph>
                {article.texts.map(line => <DescriptionParagraph description={line}></DescriptionParagraph>)}
            </Col>
        </Row>
        {article.achievements !== undefined && 
            <Achievements title="サービス・事業実績" achievements={article.achievements.achievements}></Achievements> }
    </Container>
}