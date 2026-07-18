import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const apiKey = process.env['GOOGLE_API_KEY'];
  const placeId = process.env['GOOGLE_PLACE_ID'];

  if (!apiKey || !placeId) {
    return res.status(500).json({
      error: 'Missing GOOGLE_API_KEY or GOOGLE_PLACE_ID'
    });
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=displayName,rating,userRatingCount,reviews&key=${apiKey}`
    );

    if (!response.ok) {
      const error = await response.text();
      return res.status(response.status).json({ error });
    }

    const data = await response.json();

    const reviews = (data.reviews || []).map((review: any) => ({
      name: review.authorAttribution?.displayName || 'Anonymous',
      profilePhoto: review.authorAttribution?.photoUri || '',
      rating: review.rating,
      review: review.text?.text || '',
      time: review.relativePublishTimeDescription || ''
    }));

    return res.status(200).json({
      rating: data.rating,
      totalReviews: data.userRatingCount,
      reviews
    });

  } catch (error) {
    return res.status(500).json({
      error: 'Failed to fetch Google Reviews',
      details: error
    });
  }
}