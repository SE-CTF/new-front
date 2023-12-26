const TOKEN_KEY = "django-insecure-on0o@ckw6blrw^une2u%lqix7c&$32gn$oz-##@82f_u40af2z";

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

  decodeToken : () => {
    const token = TokenService.getToken();
    if (!token) return null;
    return JSON.parse(atob(token.split(".")[1]))

  }
};

export default TokenService;
