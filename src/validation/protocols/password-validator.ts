export interface PasswordValidator {
  isValid: (password: string, rules: {}) => boolean
}
