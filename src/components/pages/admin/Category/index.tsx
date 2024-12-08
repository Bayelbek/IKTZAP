import React from 'react';
import { Link, useParams } from "react-router-dom";


import HeaderCategory from '../headerCategory';
import CategoryMaket from '../Maket';

import { fetchCategories } from "../../../../api/category.ts";
import { Category } from "../../../../models/category.ts";

function Categorys() {
  const {id} = useParams()

  const [items, setItems] = React.useState<Category[]>([]);
  
  React.useEffect(() => {
    fetchCategories(id ? +id : undefined).then((res) => {
      setItems(res);
    });
  }, [id]);

  return (
    <div className="category">
        <HeaderCategory title='Категории' addLink='Add_Category' linkTitle='Добавить'/>
        <ul className='maket_list'>
            {items.map((el) => (
                <li key={el.id}>
                    <CategoryMaket className="CategoryCars" image={`https://api.ikt-zap.ru/storage/images/${el.image_path}`} title={el.title} id={el.id} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Categorys;
