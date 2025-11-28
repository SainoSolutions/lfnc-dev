const BASE_URL = 'https://lfnc-dev-backend.onrender.com';

async function apiRequest(endpoint, method = 'GET', body = null, headers = {}) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        }
    }
    if (body) {
        options.body = JSON.stringify(body);
    }
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, options);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "API Error");
        }
        return await response.json();
    } catch (error) {
            console.error("API Request Error:", error);
            throw error;
    }
}
export const api = {
    get: (endpoint) => apiRequest(endpoint, 'GET'),
    post: (endpoint, body) => apiRequest(endpoint, 'POST', body),
    put: (endpoint, body) => apiRequest(endpoint, 'PUT', body),
    delete: (endpoint) => apiRequest(endpoint, 'DELETE')
}