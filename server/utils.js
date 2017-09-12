// @flow

const isJSON = (string: string): boolean => {
  if (string === null || string === undefined) {
    return false;
  }

  try {
    JSON.parse(string);
  } catch (e) {
    return false;
  }

  return true;
};

export const getFromCache = async ({ redis, key }): Object => {
  return new Promise((resolve, reject) => {
    redis.get(key, (err, value) => {
      if (err) {
        return reject(err);
      }

      let data = value;

      if (isJSON(value)) {
        data = JSON.parse(value);
      }

      return resolve(data);
    });
  });
};

export const cacheHandler = ({ redis }) => {
  return (req, res, next) => {
    return getFromCache({ redis: redis, key: req.url }).then(data => {
      if (data) {
        res.json({ data: data });
      } else {
        next();
      }
    });
  };
};
