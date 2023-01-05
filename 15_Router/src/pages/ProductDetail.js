import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/', { replace: true });
    };

    console.log(params);
    console.log(location);
    console.log(searchParams.get('name'));
    console.log(searchParams.get('name2'));

    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
            <button onClick={clickHandler}>click</button>
        </section>
    );
};

export default ProductDetail;
