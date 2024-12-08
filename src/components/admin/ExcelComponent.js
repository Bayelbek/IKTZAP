import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import "../../components/admin/ExcelComponent.css"


const ExcelPage = () => {
  const [excelData, setExcelData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [fileName, setFileName] = useState("exported_data"); // Имя файла без расширения

  // Функция для импорта файла Excel
  const handleImport = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });

      // Устанавливаем заголовки и данные отдельно
      setHeaders(jsonData[0]); // Первая строка - это заголовки
      setExcelData(jsonData.slice(1)); // Остальные строки - это данные
    };

    reader.readAsArrayBuffer(file);
  };

  // Функция для изменения данных в ячейке
  const handleCellChange = (rowIndex, colIndex, value) => {
    const newData = [...excelData];
    newData[rowIndex][colIndex] = value;
    setExcelData(newData);
  };

  // Функция для экспорта данных в файл Excel
  const handleExport = () => {
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...excelData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Проверка и добавление расширения .xlsx, если оно отсутствует
    const finalFileName = fileName.endsWith('.xlsx') ? fileName : `${fileName}.xlsx`;
    XLSX.writeFile(workbook, finalFileName);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Импорт и Экспорт Excel с редактированием</h1>

      {/* Поле для загрузки файла Excel */}
      <input type="file" accept=".xlsx, .xls" onChange={handleImport} />

      {/* Поле для ввода имени файла */}
      <div style={{ marginTop: '20px' }}>
        <label>Имя файла для экспорта:</label>
        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="Введите имя файла"
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </div>

      {/* Кнопка для экспорта данных в файл Excel */}
      <button
        onClick={handleExport}
        disabled={!excelData.length}
        style={{ marginTop: '20px', backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}
      >
        Экспортировать в Excel
      </button>

      {/* Таблица с данными из Excel */}
      {excelData.length > 0 && (
        <table border="1" style={{ marginTop: '20px', width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {excelData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((val, colIndex) => (
                  <td key={colIndex}>
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                      style={{ width: '100%' }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExcelPage;
