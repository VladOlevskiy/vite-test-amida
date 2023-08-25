import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './BasketPage.scss';
import { Container } from 'react-bootstrap';
import BasketList from '../../components/BasketList/BasketList';

const BasketPage = ({ myItems, total, removeItem, removeAll }) => {
  return (
    <section className="section-basket">
      <Container>
        <div className="card-basket__top">
          <h2 className="card-basket__top-text">Мій кошик :</h2>
          <h3 className="card-basket__top-text">Загальна сума: {total}грн</h3>
          {myItems.length >= 1 && (
            <Button variant="outline-danger" onClick={() => removeAll()}>
              Видалити ВСЕ з кошика
            </Button>
          )}
          {myItems.length === 0 && (
            <p className="card-basket__top-text">Додайте щось в кошик</p>
          )}
        </div>
        <ul>
          {myItems.length > 0 && (
            <BasketList myItems={myItems} removeItem={removeItem} />
          )}
        </ul>
      </Container>
    </section>
  );
};

export default BasketPage;
