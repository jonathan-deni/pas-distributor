import { Button } from 'reactstrap';

const HomeBannerText = ({
  title,
  desc,
  btnText
}) => (
    <div className="homebannertext-container">
      <div className="homebannertext-title">
        {title}
      </div>
      <div className="homebannertext-desc">
        {desc}
      </div>
      <Button color="primary" size="md">{btnText}</Button>
    </div>
  );

export default HomeBannerText;