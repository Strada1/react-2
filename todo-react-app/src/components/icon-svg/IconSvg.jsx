import { ICON } from '../../core/constants';
import './IconSvg.css';

function IconSvg({ icon, option }) {
  return (
    <svg className={`${ICON.PREFIX} ${ICON.PREFIX}-${icon} ${option ?? icon}`}>
      <use href={`${ICON.SPRITE}${ICON.HASHTAG}${icon}`} />
    </svg>
  );
}

export { IconSvg };
