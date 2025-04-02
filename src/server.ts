import { AngularAppEngine, createRequestHandler } from '@angular/ssr'
import { getContext } from '@netlify/angular-runtime/context.mjs'

const angularAppEngine = new AngularAppEngine()

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext()

  // Puedes agregar rutas de API aquí
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hola desde la API' });
  // }

  const result = await angularAppEngine.handle(request, context)
  return result || new Response('Not found', { status: 404 })
}

/**
 * Handler principal usado en Netlify.
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler)
