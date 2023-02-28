import reactIcon from '../assets/react.svg';
import viteIcon from '/vite.svg';
import { t } from 'i18next';
function Acordeon() {
  return (
    <div>
      <h1>
        {t('home.title')}
      </h1>
      <img src={reactIcon} alt="react-icon" />
      <p>This is vite icon: </p>
      <img src={viteIcon} alt="vite-icon" />
    </div>
  )
}

export default Acordeon;
