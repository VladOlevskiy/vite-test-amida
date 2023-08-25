import Button from 'react-bootstrap/Button';
import './BasketList.scss';

const BasketList = ({ myItems, removeItem }) => {
  return (
    <>
      {myItems.length > 0 &&
        myItems.map(item => (
          <li key={item.id + Date.now()}>
            <div className="card-basket">
              <div className="card-basket__img-wrapper">
                <img
                  className="image_basket"
                  src={item.image}
                  alt=""
                  height={'100%'}
                  width={'100%'}
                />
              </div>
              <div className="card-basket__text-wrapper">
                <h2 className="card-basket__title">Бренд : {item.name}</h2>
                <p className="card-basket__text">Ціна : {item.price}грн</p>
              </div>
              <Button
                variant="outline-dark"
                onClick={() => removeItem(item.id)}
              >
                Видалити з кошика
              </Button>
            </div>
          </li>
        ))}
    </>
  );
};

export default BasketList;
