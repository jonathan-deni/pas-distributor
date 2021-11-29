import {
    Row,
    Container
} from 'reactstrap';
import ColCard from '../ColCard';

const GridCard = ({
    colsPerRow,
    data
}) => (
        <div className="gridcard-container">
            <Container fluid>
                <Row xs={colsPerRow}>
                    {
                        data.map((value) => {
                            return (
                                <ColCard imgSrc={value.src} title={value.altText}/>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );

export default GridCard;