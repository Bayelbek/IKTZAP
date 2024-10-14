import React, { useState } from 'react';

const HeaderWithNotifications = () => {
  // Количество новых сообщений
  const [messageCount, setMessageCount] = useState(3); // Можно динамически изменять это значение

  // Функция, открывающая вкладку с новостями
  const openMessages = () => {
    window.open('https://example.com/messages', '_blank');
  };

  return (
    <header style={{ padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Мой Сайт</h1>

      <div style={{ position: 'relative', cursor: 'pointer' }} onClick={openMessages}>
        <i className="icon-notifications">🔔</i> {/* Здесь ваша иконка уведомлений */}
        {messageCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-10px',
              backgroundColor: 'red',
              borderRadius: '50%',
              padding: '5px',
              color: 'white',
              fontSize: '12px',
            }}
          >
            {messageCount}
          </span>
        )}
      </div>
    </header>
  );
};

export default HeaderWithNotifications;
