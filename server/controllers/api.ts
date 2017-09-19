import * as graph from 'fbgraph';

// * GET /api/facebook - Facebook API example.
export const getFacebook = (req, res, next) => {
  const token = req.user.tokens.find(tkn => tkn.kind === 'facebook');
  graph.setAccessToken(token.accessToken);
  graph.get(`${req.user.facebook}?fields=id,name,email,gender,link`, (err, results) => {
    if (err) { return next(err); }
    res.json('api/facebook', { results });
  });
};

