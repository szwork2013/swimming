import React, {
  Component,
  PropTypes,
} from 'react';
import styles from './TicketList.less';
import ReactSwipe from 'react-swipes';

const renderContent = () => (
  <div></div>
);

class TicketList extends Component {
  render() {
    let opt = {
      distance: 90, // 每次移动的距离，卡片的真实宽度
      swTouchend: (ev) => {
        let data = {
          moved: ev.moved,
          originalPoint: ev.originalPoint,
          newPoint: ev.newPoint,
          cancelled: ev.cancelled
        }
      }
    }
    return (
      <section className={styles.TicketTop}>
        <div className={styles.viewport}>
          <ReactSwipe className={styles.top_img_container} options={opt}>
            <img className={styles.top_img} src='http://oiu42aq9j.bkt.clouddn.com/swim_ticket1.png'/>
            <img className={styles.top_img} src='http://oiu42aq9j.bkt.clouddn.com/swim_ticket2.png'/>
            <img className={styles.top_img} src='http://oiu42aq9j.bkt.clouddn.com/swim_ticket3.png'/>
            <img className={styles.top_img} src='http://oiu42aq9j.bkt.clouddn.com/swim_ticket4.png'/>
          </ReactSwipe>
        </div>
        {renderContent(1)}
      </section>
    );
  }
}

TicketList.propTypes = {};
TicketList.defaultProps = {};

export default TicketList;
