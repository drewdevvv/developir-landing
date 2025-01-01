import { renderPage } from './page';
import { handleSubscribe } from './subscribe';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname.startsWith('/media/')) {
      const key = url.pathname.replace('/media/', '');
      const object = await env.MEDIA.get(key);
      
      if (!object) {
        return new Response('Not found', { status: 404 });
      }
      
      return new Response(object.body, {
        headers: {
          'content-type': object.httpMetadata?.contentType || 'application/octet-stream',
          'cache-control': 'public, max-age=31536000',
        },
      });
    }

    if (request.method === 'POST' && url.pathname === '/subscribe') {
      return handleSubscribe(request, env);
    }

    return new Response(renderPage(), {
      headers: { 'Content-Type': 'text/html' }
    });
  }
};