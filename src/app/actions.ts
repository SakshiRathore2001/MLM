"use server";

import { contactFormSchema, type ContactFormState, type ContactFormValues } from "@/lib/types";

export async function submitContactForm(
  values: ContactFormValues
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      message: "Invalid form data.",
      issues: validatedFields.error.flatten().fieldErrors.message,
    };
  }

  try {
    // Here you would typically send an email, e.g., using a service like Resend or Nodemailer.
    // For this example, we'll just log the data to the console to simulate the action.
    console.log("New contact form submission:");
    console.log("Name:", validatedFields.data.name);
    console.log("Email:", validatedFields.data.email);
    console.log("Message:", validatedFields.data.message);

    return { message: "Thank you! Your message has been sent successfully." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      issues: ["Server error"],
    };
  }
}
