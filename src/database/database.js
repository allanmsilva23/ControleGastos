import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('gastos.db');

export const initDB = () => {
  db.execSync(
    `CREATE TABLE IF NOT EXISTS gastos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      descricao TEXT,
      categoria TEXT,
      valor REAL,
      data TEXT
    );`
  );
};

export const insertGasto = (descricao, categoria, valor, data) => {
  const statement = db.prepareSync(
    'INSERT INTO gastos (descricao, categoria, valor, data) VALUES (?, ?, ?, ?)'
  );
  statement.executeSync([descricao, categoria, valor, data]);
};

export const getGastos = () => {
  return db.getAllSync('SELECT * FROM gastos ORDER BY id DESC;');
};