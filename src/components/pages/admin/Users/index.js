import React from 'react';

import UserMaket from '../Maket';
import HeaderCategory from '../headerCategory';

export default function Users() {

  return (
    <div className="users">
        <HeaderCategory title="Пользователи" />
        <ul className='maket_list'>
            <li>
                <UserMaket image='img/admin.webp' title='Дурусбеков Байэл' position='Админ' />
            </li>
        </ul>
    </div>
  )
}
