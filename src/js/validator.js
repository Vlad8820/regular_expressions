class Validator {
  validateUsername(username) {
    const validChars = /^[a-zA-Z0-9_-]+$/;
    if (!validChars.test(username)) {
      return false;
    }

    const noMoreThanThreeConsecutiveDigits = /\d{4,}/;
    if (noMoreThanThreeConsecutiveDigits.test(username)) {
      return false;
    }

    const startsOrEndsWithInvalidChar = /^[\d_-]|[\d_-]$/;
    if (startsOrEndsWithInvalidChar.test(username)) {
      return false;
    }

    return true;
  }
}

export default Validator;
