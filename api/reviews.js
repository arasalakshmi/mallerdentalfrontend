export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

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
      return res.status(response.status).json({
        error: await response.text()
      });
    }

    const data = await response.json();
    console.log(data)

    res.status(200).json({
      rating: data.rating,
      totalReviews: data.userRatingCount,
      reviews: (data.reviews || []).map(review => ({
        name: review.authorAttribution?.displayName || 'Anonymous',
        profilePhoto: review.authorAttribution?.photoUri || '',
        rating: review.rating,
        review: review.text?.text || '',
        time: review.relativePublishTimeDescription || ''
      }))
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}