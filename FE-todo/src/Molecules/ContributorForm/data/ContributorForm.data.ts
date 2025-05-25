export const ContributorFormData = [
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
]

