import './Promo.css';
import  promo from '../../images/promo.png';

function Promo () {
    return (
<div className="promo">
<img className="promo__picture" src={promo} alt="Промо-изображение"></img>
<h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
</div>
);
}

export default Promo;

