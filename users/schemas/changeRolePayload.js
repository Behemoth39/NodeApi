const { roles } = require("../../config.js");

module.exports = {
  type: "object",
  properties: {
    role: {
      type: "string",
      enum: Object.values(roles),
    },
  },
  additionalProperties: false,
};
