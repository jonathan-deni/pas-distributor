import {
    Col,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardText,
} from 'reactstrap';

const ColCard = ({
    imgSrc,
    title
}) => (
        <Col className="colcard-col">
            <Card>
                <CardBody>
                    <img src={imgSrc} className="colcard-img"></img>
                    <CardTitle>
                        <h3>{title}</h3>
                    </CardTitle>
                </CardBody>
            </Card>
        </Col>
    );

export default ColCard;