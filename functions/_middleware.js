export async function onRequest({ request, next }) {
  const response = await next();
  
  // Clone the response so we can modify headers
  const newResponse = new Response(response.body, response);
  
  // Add security headers
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  newResponse.headers.set('X-Frame-Options', 'DENY');
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return newResponse;
} 