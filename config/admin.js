module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '07143b9db05186481e580e93e41202d6'),
  },
});
