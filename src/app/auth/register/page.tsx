import { RegisterForm } from "@/components/register-form";

export default function Page() {
  return (
    <div className="container mx-auto max-w-screen-lg space-y-8 px-8 py-16">
      <div className="space-y-8">
        <div className="text-3xl font-bold">Register</div>
      </div>
      <RegisterForm />
    </div>
  );
}
