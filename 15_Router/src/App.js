import { Route, Routes, Navigate } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

const App = () => {
    return (
        <div>
            <MainHeader />
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/welcome" />} />
                    <Route path="/welcome/*" element={<Welcome />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:productId" element={<ProductDetail />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;