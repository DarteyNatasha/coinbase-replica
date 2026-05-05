const API_BASE_URL = import.meta.env.VITE_API_URL;

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
      ...options,
      headers,
      credentials: 'include',
    };

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // ========== AUTH ENDPOINTS ==========
  
  register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  getProfile() {
    return this.request('/auth/profile');
  }

  updateProfile(userData) {
    return this.request('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  logout() {
    return this.request('/auth/logout', { method: 'POST' });
  }

  changePassword(passwordData) {
    return this.request('/auth/change-password', {
      method: 'PUT',
      body: JSON.stringify(passwordData),
    });
  }

  // ========== CRYPTO ENDPOINTS ==========
  
  getAllCryptocurrencies(page = 1, limit = 100, search = '') {
    const query = new URLSearchParams({ page, limit, ...(search && { search }) });
    return this.request(`/crypto?${query}`);
  }

  getTopGainers(limit = 10) {
    return this.request(`/crypto/gainers?limit=${limit}`);
  }

  getTopLosers(limit = 10) {
    return this.request(`/crypto/losers?limit=${limit}`);
  }

  getNewListings(limit = 10) {
    return this.request(`/crypto/new?limit=${limit}`);
  }

  getCryptocurrencyById(id) {
    return this.request(`/crypto/${id}`);
  }

  // Add new cryptocurrency (authenticated users only)
  addCryptocurrency(cryptoData) {
    return this.request('/crypto', {
      method: 'POST',
      body: JSON.stringify(cryptoData),
    });
  }

  // Update cryptocurrency (authenticated users only)
  updateCryptocurrency(id, cryptoData) {
    return this.request(`/crypto/${id}`, {
      method: 'PUT',
      body: JSON.stringify(cryptoData),
    });
  }

  // Delete cryptocurrency (authenticated users only)
  deleteCryptocurrency(id) {
    return this.request(`/crypto/${id}`, {
      method: 'DELETE',
    });
  }
}

export default new ApiService();