// middleware.js
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es'], // Idiomas soportados
  defaultLocale: 'en'     // Idioma por defecto
});

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)'], // Aplica el middleware a todas las rutas excepto las especificadas
};
