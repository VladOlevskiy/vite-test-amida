import ShoesList from "../../components/ShoesList/ShoesList";
import "./ShoesPage.scss";

const ShoesPage = ({ array, onChange }) => {
  return (
    <section className="section-shoes">
      <ShoesList array={array} onChange={onChange} />
    </section>
  );
};

export default ShoesPage;
