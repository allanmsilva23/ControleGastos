import React, { useEffect } from 'react';
import Routes from './src/navigation/routes';
import { initDB } from './src/database/database';

initDB();

export default function App() {
  return <Routes />;
}