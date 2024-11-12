import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent";
import { DataContextProvider } from "./hooks/useDataContext";
import { AppWrapper } from "./style";

function App() {
  return (
    <AppWrapper>
      <DataContextProvider>
        <Header />
        <MainContent />
      </DataContextProvider>
    </AppWrapper>
  );
}

export default App;
