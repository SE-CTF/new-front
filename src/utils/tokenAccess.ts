// tokenService.js
const TOKEN_KEY = "secret-key";

const TokenService = {
  saveToken: (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
  },

  getToken: () => {
    return localStorage.getItem(TOKEN_KEY);
  },

  removeToken: () => {
    localStorage.removeItem(TOKEN_KEY);
  },

  isTokenExpired: () => {
    const token = TokenService.getToken();
    if (!token) return true;

    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const expirationDate = new Date(decodedToken.exp * 1000);

    return expirationDate < new Date();
  },
};

export default TokenService;
