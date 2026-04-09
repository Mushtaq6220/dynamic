function normalizeApiBaseUrl(value) {
  const normalized = (value || "").trim().replace(/\/+$/, "");

  if (!normalized) {
    return "http://localhost:5000/api";
  }

  return normalized.endsWith("/api") ? normalized : `${normalized}/api`;
}

const API_BASE_URL = normalizeApiBaseUrl(
  process.env.NEXT_PUBLIC_API_ORIGIN || process.env.NEXT_PUBLIC_API_URL
);

async function handleResponse(response) {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Something went wrong");
  }

  return response.json();
}

export async function getPackages() {
  const response = await fetch(`${API_BASE_URL}/packages`, {
    cache: "no-store",
  });

  return handleResponse(response);
}

export async function getFlights() {
  const response = await fetch(`${API_BASE_URL}/flights`, {
    cache: "no-store",
  });

  return handleResponse(response);
}

export async function getGulfFlights() {
  const response = await fetch(`${API_BASE_URL}/flights/gulf`, {
    cache: "no-store",
  });

  return handleResponse(response);
}

export async function getFutureFlights({
  airport = "HYD",
  type = "departure",
  date,
} = {}) {
  const params = new URLSearchParams({
    airport,
    type,
  });

  if (date) {
    params.set("date", date);
  }

  const response = await fetch(`${API_BASE_URL}/future-flights?${params.toString()}`, {
    cache: "no-store",
  });

  return handleResponse(response);
}

export async function searchFutureRouteFlights({
  from = "HYD",
  to,
} = {}) {
  const params = new URLSearchParams({
    from,
  });

  if (to) {
    params.set("to", to);
  }

  const response = await fetch(`${API_BASE_URL}/flights/search?${params.toString()}`, {
    cache: "no-store",
  });

  return handleResponse(response);
}

export async function getInquiries() {
  const response = await fetch(`${API_BASE_URL}/inquiries`, {
    cache: "no-store",
  });

  return handleResponse(response);
}

export async function trackVisa(passportNo) {
  const response = await fetch(
    `${API_BASE_URL}/visa/track?passportNo=${encodeURIComponent(passportNo)}`,
    {
      cache: "no-store",
    }
  );

  return handleResponse(response);
}

export async function createInquiry(payload) {
  const response = await fetch(`${API_BASE_URL}/inquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
}

export async function createPackage(payload) {
  const response = await fetch(`${API_BASE_URL}/packages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
}

export async function createFlight(payload) {
  const response = await fetch(`${API_BASE_URL}/flights`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
}

export async function createVisaApplication(payload) {
  const response = await fetch(`${API_BASE_URL}/visa`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
}
