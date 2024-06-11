module.exports = {
  port: 3000,
  jwtSecret: "VerySecretKey",
  jwtExpirationInSeconds: 60 * 60,
  roles: {
    USER: "user",
    ADMIN: "admin",
  },
};
