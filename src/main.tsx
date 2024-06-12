import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import "@styles/reset.css";
import "@styles/index.css";
import "@/assets/fonts/web/static/pretendard.css";
import "@/assets/fonts/web/static/pretendard-subset.css";
import "@/assets/fonts/web/variable/pretendardvariable.css";
import App from "@/App.tsx";
import { worker } from "@/mocks/browser.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";

const enableMocking = async () => {
  if (import.meta.env.VITE_NODE_ENV === "mocking") {
    await worker.start();
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </QueryClientProvider>
    </CookiesProvider>,
  ),
);
