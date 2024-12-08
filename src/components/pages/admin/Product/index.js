import React from 'react';
import axios from 'axios';

import HeaderCategory from '../headerCategory';
import Maket from '../Maket';
import headerCategory from './../headerCategory/index';

function Product() {
    const [categories, setCategories] = React.useState([]);
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        // Получение категорий
        axios.get('https://api.ikt-zap.ru/v1/category').then((res) => {
            setCategories(res.data.payload.list);
        });

        // Получение продуктов
        axios.get('https://api.ikt-zap.ru/v1/product').then((res) => {
            setProducts(res.data.payload.list);
        });
    }, []);

    // Группировка продуктов по категориям
    const groupByCategory = () => {
        return categories.map((category) => {
            const productsInCategory = products.filter(product => product.category_id === category.id);
            return {
                category: category.title,
                products: productsInCategory
            };
        }).filter(group => group.products.length > 0); // Убираем категории без продуктов
    };

    const groupedProducts = groupByCategory();

    return (
        <div className="maket_list">
            <div className="product_item">
            <ul>
                {groupedProducts.map((group, index) => (
                    <div key={index}>
                        {/* Отображаем заголовок категории */}
                        <HeaderCategory title={group.category} linkTitle='Добавить' addLink="add_product" />
                        
                        <li>
                            {/* Отображаем все продукты в категории */}
                            {group.products.map((product, productIndex) => (
                                <Maket
                                    key={productIndex}
                                    className=""
                                    image={`https://api.ikt-zap.ru/storage/images/${product.image_path}`}
                                    title={product.title}
                                />
                            ))}
                        </li>
                    </div>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default Product;
