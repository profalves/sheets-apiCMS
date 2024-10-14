import axios from "axios";
import "dotenv/config";

const API_KEY = process.env.REACT_APP_API_KEY;
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const RANGE = process.env.REACT_APP_RANGE;

export const fetchSheetData = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data.values;
  } catch (error) {
    console.error("Erro ao buscar dados da planilha:", error);
    throw error;
  }
};
