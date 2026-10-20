import type { PortfolioData } from "../data/profile";

const API_BASE_URL = (import.meta.env.VITE_API_URL ?? "/api/v1").replace(/\/$/, "");

export type ContactMessagePayload = {
  name: string;
  email: string;
  message: string;
  website?: string;
};

type ApiErrorPayload = {
  message?: string;
  errors?: Record<string, string[]>;
};

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly errors?: Record<string, string[]>,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function readError(response: Response): Promise<ApiError> {
  let payload: ApiErrorPayload = {};

  try {
    payload = (await response.json()) as ApiErrorPayload;
  } catch {
    // The backend may return an empty body for some errors.
  }

  if (response.status === 429) {
    return new ApiError(
      "Trop de messages envoyés. Merci de réessayer dans une minute.",
      response.status,
      payload.errors,
    );
  }

  const firstValidationError = payload.errors
    ? Object.values(payload.errors).flat().find(Boolean)
    : undefined;

  return new ApiError(
    firstValidationError ??
      payload.message ??
      "Une erreur est survenue. Merci de réessayer dans un instant.",
    response.status,
    payload.errors,
  );
}

export async function fetchPortfolio(signal?: AbortSignal): Promise<PortfolioData> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/portfolio`, {
      headers: { Accept: "application/json" },
      signal,
    });
  } catch (reason) {
    if (signal?.aborted) throw reason;

    throw new ApiError("Le serveur de contenu est indisponible.", 0);
  }

  if (!response.ok) {
    throw await readError(response);
  }

  const payload = (await response.json()) as { data?: PortfolioData };

  if (!payload.data) {
    throw new ApiError("Réponse invalide du serveur.", response.status);
  }

  return payload.data;
}

export async function sendContactMessage(
  payload: ContactMessagePayload,
): Promise<{ message: string }> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ApiError(
      "Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.",
      0,
    );
  }

  if (!response.ok) {
    throw await readError(response);
  }

  return (await response.json()) as { message: string };
}
