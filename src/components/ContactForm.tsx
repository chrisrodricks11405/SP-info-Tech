import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact } from "@/lib/contact.functions";
import { SERVICE_OPTIONS, contactSchema, type ContactInput } from "@/lib/contact-schema";

export function ContactForm() {
  const send = useServerFn(submitContact);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", service: SERVICE_OPTIONS[0], message: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    setSubmitting(true);
    try {
      await send({ data: values });
      toast.success("Enquiry received", {
        description: "Our team will get back to you shortly.",
      });
      reset();
    } catch {
      toast.error("Could not send your enquiry", {
        description: "Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const errorText = "mt-1.5 text-xs font-medium text-destructive";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" className="mt-2" placeholder="Your name" {...register("name")} />
          {errors.name && <p className={errorText}>{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" className="mt-2" placeholder="+91 98XXXXXXXX" {...register("phone")} />
          {errors.phone && <p className={errorText}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email address</Label>
        <Input id="email" className="mt-2" placeholder="you@company.com" {...register("email")} />
        {errors.email && <p className={errorText}>{errors.email.message}</p>}
      </div>

      <div>
        <Label htmlFor="service">Service interest</Label>
        <select
          id="service"
          className="mt-2 h-9 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          {...register("service")}
        >
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service && <p className={errorText}>{errors.service.message}</p>}
      </div>

      <div>
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea
          id="message"
          rows={4}
          className="mt-2"
          placeholder="Tell us briefly about your requirement"
          {...register("message")}
        />
        {errors.message && <p className={errorText}>{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
        {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Send enquiry
      </Button>
    </form>
  );
}
