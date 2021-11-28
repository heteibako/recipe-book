import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MainNavigation } from "@components/nav/MainNavigation";
import { useRouter } from "next/dist/client/router";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const { route } = useRouter();
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      {route.includes("/dashboard") ? null : <MainNavigation />}
      {getLayout(<Component {...pageProps} />)}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
