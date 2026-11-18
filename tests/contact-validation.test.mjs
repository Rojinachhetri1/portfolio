import assert from "node:assert/strict";
import test from "node:test";
import { validateContactFields } from "../lib/contact-validation.mjs";

test("requires a name, valid email, and message", () => {
  assert.deepEqual(validateContactFields({ name: " ", email: "", message: "" }), {
    name: "Enter your name.",
    email: "Enter your email address.",
    message: "Enter a message.",
  });
});

test("rejects malformed email addresses", () => {
  const errors = validateContactFields({
    name: "Visitor",
    email: "not-an-email",
    message: "Hello",
  });

  assert.deepEqual(errors, { email: "Enter a valid email address." });
});

test("accepts valid details after trimming whitespace", () => {
  assert.deepEqual(
    validateContactFields({
      name: "  Visitor ",
      email: " visitor@example.com ",
      message: " Hello ",
    }),
    {},
  );
});
