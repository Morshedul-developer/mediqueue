"use client";

import { Button, Link } from "@heroui/react";
import { IoHomeOutline } from "react-icons/io5";
import {
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import "animate.css";
import { Check } from "lucide-react";
import { Icon } from "@iconify/react";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData);
    console.log({ email, password });

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (data) {
      router.push("/");
    }
    if (error) {
      alert(error.message || "Invalid email or password.");
      return;
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 35%, #EEF2FF 100%)",
      }}
    >
      {/* Dashed outer border */}
      <div className="w-full max-w-107.5 overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-2xl animate__animated animate__fadeIn animate__faster">
        <div className="bg-white rounded-[18px] overflow-hidden">
          {/* Brand Bar */}
          <div
            className="text-center py-5 px-6 animate__animated animate__fadeInDown"
            style={{
              background: "linear-gradient(90deg, #eff6ff 0%, #dbeafe 100%)",
              borderBottom: "1px solid #bfdbfe",
            }}
          >
            <h1
              className="text-[28px] font-extrabold tracking-tight"
              style={{ color: "#2563eb" }}
            >
              MediQueue
            </h1>
          </div>

          {/* Card Body */}
          <div className="px-7 pt-8 pb-6">
            {/* Heading */}
            <div className="text-center mb-7 animate__animated animate__fadeInUp animate__faster">
              <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-2">
                Login
              </h2>
              <p className="text-sm text-[#888]">
                Soak up the savings. Sign in to your account.
              </p>
            </div>

            {/* HeroUI Form */}
            <Form onSubmit={handleLogin} className="flex flex-col gap-4">
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
              >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>
              <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 6) {
                    return "Password must be at least 6 characters";
                  }

                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }

                  if (!/[a-z]/.test(value)) {
                    return "Password must contain at least one lowercase letter";
                  }

                  return null;
                }}
              >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <Description>
                  Must be at least 6 characters with 1 uppercase and 1 lowercase
                </Description>
                <FieldError />
              </TextField>
              <div className="flex justify-end w-full">
                <Link
                  href="#"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="flex gap-2">
                <Button
                  type="submit"
                  className="h-11 px-6 rounded-full font-bold text-white bg-primary hover:opacity-90 transition-all duration-200"
                >
                  <Check />
                  Login
                </Button>

                <Button
                  type="reset"
                  variant="secondary"
                  className="h-11 px-6 rounded-full font-semibold border border-primary text-primary bg-white transition-all duration-200 hover:bg-primary hover:text-blue-700"
                >
                  Reset
                </Button>
              </div>
            </Form>

            {/* OR Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-[#e5e5e5]" />
              <span className="text-[13px] text-[#bbb]">OR</span>
              <div className="flex-1 h-px bg-[#e5e5e5]" />
            </div>

            {/* Google Button */}
            <Button
              onClick={handleGoogleLogin}
              className="w-full h-12 rounded-[10px] text-slate-700 border border-slate-300 hover:border-primary hover:bg-blue-50 transition-all duration-200"
              variant="outline"
              type="button"
            >
              <Icon icon="devicon:google" />
              Sign in with Google
            </Button>

            {/* Register Link */}
            <p className="mt-6 text-center text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-primary hover:text-blue-700 transition-colors"
              >
                Register
              </Link>
            </p>
          </div>

          {/* Return to Home */}
          <div
            className="flex items-center justify-center gap-2 py-4 text-[13px] text-[#999]"
            style={{ borderTop: "1px solid #f0f0f0" }}
          >
            <IoHomeOutline className="text-base" />
            <Link href="/" className="text-[#999] hover:text-[#666]">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
