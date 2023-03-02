module.exports = {
  siteUrl:
    process.env.NODE_ENV === "production"
      ? "https://sushi-man.cz"
      : "http://localhost:3000",
};
