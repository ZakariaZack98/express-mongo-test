class CustomError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.message = message;
    this.name = "CustomError";
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
    };
  }
}

module.exports = CustomError;
