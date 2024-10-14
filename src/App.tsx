import "./styles.css";

import React, { useEffect, useState } from "react";
import { fetchSheetData } from "./services/googleSheetsService";

const App: React.FC = () => {
  const [data, setData] = useState<string[][]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const sheetData = await fetchSheetData();
        setData(sheetData);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      <h1>Dados da Planilha do Google</h1>
      <table>
        <thead>
          <tr>
            {data[0]?.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
