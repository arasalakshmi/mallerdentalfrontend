import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import AppServerModule from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);
// server.get('/api/reviews', async (req, res) => {
//   const apiKey = process.env['GOOGLE_API_KEY'];
//   const placeId = process.env['GOOGLE_PLACE_ID'];

//   if (!apiKey || !placeId) {
//     return res.status(500).json({
//       error: 'Missing GOOGLE_API_KEY or GOOGLE_PLACE_ID'
//     });
//   }

//   try {
//     const response = await fetch(
//       `https://places.googleapis.com/v1/places/${placeId}?fields=displayName,rating,userRatingCount,reviews&key=${apiKey}`
//     );

//     if (!response.ok) {
//       return res.status(response.status).json({
//         error: await response.text()
//       });
//     }

//     const data = await response.json();

//     return res.json({
//       rating: data.rating,
//       totalReviews: data.userRatingCount,
//       reviews: (data.reviews || []).map((review: any) => ({
//         name: review.authorAttribution?.displayName || 'Anonymous',
//         profilePhoto: review.authorAttribution?.photoUri || '',
//         rating: review.rating,
//         review: review.text?.text || '',
//         time: review.relativePublishTimeDescription || ''
//       }))
//     });

//   } catch (err: any) {
//     return res.status(500).json({
//       error: err.message
//     });
//   }
// });
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap: AppServerModule,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}



function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}


run();


// Google Reviews API
