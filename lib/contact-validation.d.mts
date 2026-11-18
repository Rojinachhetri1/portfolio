export type ContactFieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function validateContactFields(fields: {
  name: string;
  email: string;
  message: string;
}): ContactFieldErrors;
