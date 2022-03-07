import {ApolloProvider} from "@apollo/client";
import {client} from "./apollo";
import InputMain from "./screens/InputMain";
import Result from "./screens/Result";
import { GlobalStyles } from "./styles";

function App() {
  const inputCheck = true;
  const darkMode = true;
  return (
    <ApolloProvider client={client}>
        <GlobalStyles/>
        {inputCheck ? (
          <InputMain/>
        ) : (
          <Result/>
        )}
    </ApolloProvider>
  );
}

export default App;
