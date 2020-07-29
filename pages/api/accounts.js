export default async function(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const accountsResponse = await fetch('https://api.up.com.au/api/v1/accounts', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_UP_API_KEY}`,
          },
        }).then(r => r.json());
        res.status(200).json(accountsResponse);
      } catch (error) {
        res.status(error.status || 500).end(error.message);
      }
      break;
    default:
      res.status(405).json({
        message: `The ${req.method} request method is not allowed on this route.`,
      });
      break;
  }
}
