import { QueryClient, QueryClientProvider } from "react-query";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./assets/fonts/font.css";

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { CookiesProvider } from "react-cookie";

export const SERVER_URL = "http://localhost";

const httpLink = createHttpLink({
  uri: `${SERVER_URL}:8080/graphql`,
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("accessToken");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <ApolloProvider client={client}>
      <CookiesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CookiesProvider>
    </ApolloProvider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
