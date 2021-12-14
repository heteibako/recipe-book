import "../styles/globals.css";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {MainNavigation} from "@components/nav/MainNavigation";
import {useRouter} from "next/dist/client/router";
import {SessionProvider} from "next-auth/react"

const queryClient = new QueryClient();

function MyApp({Component, session, pageProps}) {
    const {route} = useRouter();
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <QueryClientProvider client={queryClient}>
            <SessionProvider session={session}>
                {route.includes("/dashboard") ? null : <MainNavigation/>}
                {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default MyApp;
