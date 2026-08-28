import { z } from "zod";

export const SERVICE_OPTIONS = [
  "IT Infrastructure Management",
  "Network & Connectivity Solutions",
  "Enterprise IT Support / AMC",
  "Customized Technology Services",
  "Other Enquiry",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(8, { message: "Enter a valid phone number" })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Phone can contain digits and + - ( ) only" }),
  service: z.enum(SERVICE_OPTIONS, {
    errorMap: () => ({ message: "Select a service" }),
  }),
  message: z
    .string()
    .trim()
    .max(1000, { message: "Message must be less than 1000 characters" })
    .optional()
    .or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
