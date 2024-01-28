import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './main.css';
import { Home, Map ,Chat} from './pages';

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import theme from './theme/mantineTheme';
import { NavBar } from './components';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <Suspense fallback={<>Loading</>}>
                <BrowserRouter>
                <NavBar />
                    <Routes>
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Map />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </MantineProvider>
        <MantineProvider theme={theme}></MantineProvider>
    </React.StrictMode>,
);
