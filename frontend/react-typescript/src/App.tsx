import NavigationBar from './components/NavigationBar';
import {QueryClientProvider, QueryClient} from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
        <QueryClientProvider client={queryClient}><NavigationBar/></QueryClientProvider> 
    </div>
  );
}

export default App;
