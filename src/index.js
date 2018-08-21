import React from 'react'
import {render} from 'react-dom'
import styles from "./styles.css";
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

console.log(styles);

class App extends React.Component {
  render() {
    return <div className={cx('app')}>
      <div className={cx('game')}>
        <ul className={cx('players', 'badges-list')}>
          <li className={cx('player-name', 'badges-list-item')}>SimonXYZ</li>
          <li className={cx('player-name', 'badges-list-item')}>AlexInKind</li>
          <li className={cx('player-name', 'badges-list-item')}>Another</li>
        </ul>
        <div className={cx('round')}>
          <div className={cx('turns')}>
            <div className={cx('turn')}>
              <div className={cx('letter')}>T</div>
              <div className={cx('letter')}>U</div>
              <div className={cx('letter')}>B</div>
            </div>
            <div className={cx('turn')}>
              <div className={cx('letter')}>H</div>
              <div className={cx('letter')}>U</div>
              <div className={cx('letter')}>B</div>
            </div>
            <div className={cx('turn')}>
              <div className={cx('letter')}>H</div>
              <div className={cx('letter')}>O</div>
              <div className={cx('letter')}>B</div>
            </div>
            <div className={cx('turn')}>
              <div className={cx('letter')}>R</div>
              <div className={cx('letter')}>O</div>
              <div className={cx('letter')}>B</div>
            </div>
          </div>
          <div className="new-turn">
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className="page">
      </div>
    </div>
  }
}

render(<App/>, document.getElementById('container'))
