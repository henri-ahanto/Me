import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { fallbackPortfolio } from "./profile";
import type { PortfolioData } from "./profile";
import { fetchPortfolio } from "../lib/api";

type PortfolioStatus = "loading" | "ready" | "error";

type PortfolioContextValue = {
  data: PortfolioData;
  status: PortfolioStatus;
  error: string | null;
};

const PortfolioContext = createContext<PortfolioContextValue>({
  data: fallbackPortfolio,
  status: "loading",
  error: null,
});

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData>(fallbackPortfolio);
  const [status, setStatus] = useState<PortfolioStatus>("loading");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchPortfolio(controller.signal)
      .then((payload) => {
        setData(payload);
        setStatus("ready");
      })
      .catch((reason: unknown) => {
        if (controller.signal.aborted) return;

        setError(reason instanceof Error ? reason.message : "Impossible de charger le contenu.");
        setStatus("error");
      });

    return () => controller.abort();
  }, []);

  const value = useMemo(() => ({ data, status, error }), [data, status, error]);

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio(): PortfolioContextValue {
  return useContext(PortfolioContext);
}
