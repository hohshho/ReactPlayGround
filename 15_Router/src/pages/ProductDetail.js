import { useParams, useLocation, useSearchParams } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(params);
    console.log(location);
    console.log(searchParams.get('name'));
    console.log(searchParams.get('name2'));

    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
        </section>
    );
};

export default ProductDetail;
