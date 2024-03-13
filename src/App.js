import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

export default function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const handleSidebarExpansion = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className="App">
      <Header handleSidebarExpansion={handleSidebarExpansion} />
      <Sidebar sidebarExpanded={sidebarExpanded} />
      <nav>Meu Sidebar</nav>
      <GlobalStyles />
    </div>
  );
}
