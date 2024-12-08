import React  from 'react';
import { Link, useParams } from "react-router-dom";

import axios from 'axios';

import HeaderCategory from '../headerCategory';
import CategoryMaket from '../Maket';

import { fetchCategories } from "../../../../api/category.ts";
import { Category } from "../../../../models/category.ts";
    
function SubCategory() {

    const [subCategory, setSubCategory] = React.useState([])

    React.useEffect(() => {
      axios.get('https://api.ikt-zap.ru/v1/category/all').then((res) => {
        setSubCategory(res.data.payload.list)
      })
    }, [ ])

    console.log(subCategory)

    return (
      <div className="subCategory">
          <HeaderCategory title='Подкатегории' linkTitle='Добавить' addLink='Add_SubCategory'/>
          <ul className='maket_list'>
              {subCategory.filter(el => el.parent_id !== null).map((el) => (
                <li key={el.id}>
                  <CategoryMaket className="CategoryCars" image={`https://api.ikt-zap.ru/storage/images/${el.image_path}`} title={el.title} position={subCategory.map((el2) => el.parent_id == el2.id ? el2.title : null)}  id={el.id}/>
              </li>
              ))}
          </ul>
      </div>
      ) 
    }

export default SubCategory;
    