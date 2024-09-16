import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import * as XLSX from 'xlsx';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../../css/pages/ExcelComponent.css/ExcelComponent.css'; // Подключаем CSS стили

const ExcelAgGrid = () => {
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([]);
  const gridRef = useRef(null); // Для доступа к данным таблицы ag-Grid

  // Функция импорта данных из Excel
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

      // Преобразование данных
      const sheetData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

      // Установка колонок
      const cols = sheetData[0].map((col, idx) => ({
        headerName: col,
        field: `col${idx}`,
        editable: true,
      }));
      setColumnDefs(cols);

      // Установка данных
      const rows = sheetData.slice(1).map((row) => {
        const rowData = {};
        row.forEach((cell, idx) => {
          rowData[`col${idx}`] = cell;
        });
        return rowData;
      });
      setRowData(rows);
    };

    reader.readAsBinaryString(file);
  };

  // Функция экспорта данных в Excel
  const exportToExcel = () => {
    const api = gridRef.current.api;
    const rowData = [];
    
    // Извлечение данных из ag-Grid
    api.forEachNode((rowNode) => {
      rowData.push(rowNode.data);
    });

    // Преобразование данных в формат для Excel
    const worksheet = XLSX.utils.json_to_sheet(rowData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Сохранение файла
    XLSX.writeFile(workbook, 'exported_data.xlsx');
  };

  return (
    <div className="container">
      <h1>Импорт и экспорт данных Excel</h1>

      {/* Кнопка для загрузки файла Excel */}
      <input type="file" onChange={handleFileUpload} />

      {/* Кнопка для экспорта данных в Excel */}
      <button onClick={exportToExcel}>
        Экспортировать в Excel
      </button>

      {/* Таблица ag-Grid */}
      <div className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef} // Используем ref для доступа к данным таблицы
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
            sortable: true,
            filter: true,
          }}
          enableSorting={true}
          enableFilter={true}
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};

export default ExcelAgGrid;
