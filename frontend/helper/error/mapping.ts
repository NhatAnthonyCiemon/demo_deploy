export const mapAuthErrorMessage = (errorCode: string): string => {
    switch (errorCode) {
        case "USER_EMAIL_ALREADY_EXISTS":
            return "The email address is already in use by another account.";
        case "PASSWORD_REQUIREMENTS_NOT_MET":
            return "The password does not meet the requirements.";
        case "EMAIL_PASSWORD_MISMATCH":
            return "The email or password is incorrect.";
        case "INVALID_TOTP_CODE":
            return "The provided TOTP code is invalid.";
        default:
            return "An unknown error occurred.";
    }
};
