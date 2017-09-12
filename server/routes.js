// @flow

export const addRoutes = ({ router, redis }) => {
  if (!redis) {
    throw new Error('Redis client must be provided.');
  }

  // This route should be last
  router.route('/*').get((req, res) => {
    return res.status(404).send();
  });
};
