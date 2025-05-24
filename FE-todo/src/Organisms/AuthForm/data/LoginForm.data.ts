export const LoginFormData = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address",
      },
    },
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter password",
    validation: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters long",
      },
      validate: (value: string) => {
        if (!/[A-Z]/.test(value)) {
          return "Password must contain at least one uppercase letter";
        }
        if (!/[a-z]/.test(value)) {
          return "Password must contain at least one lowercase letter";
        }
        if (!/[0-9]/.test(value)) {
          return "Password must contain at least one number";
        }
        return true;
      },
    },
  },
];
