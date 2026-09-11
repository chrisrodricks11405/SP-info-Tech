import { createServerFn } from "@tanstack/react-start";

import { contactSchema } from "./contact-schema";

export const submitContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message ? data.message : null,
    });

    if (error) {
      console.error("contact submission failed", error.message);
      throw new Error("Could not save your enquiry. Please try again.");
    }

    return { ok: true as const };
  });
