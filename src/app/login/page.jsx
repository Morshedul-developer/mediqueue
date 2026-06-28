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

    if (error) {
      alert(error.message || "Invalid email or password.");
      return;
    }

    router.push("/");
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
          "linear-gradient(135deg, #fffbf0 0%, #f0f8ff 60%, #e8f4fd 100%)",
      }}
    >
      {/* Dashed outer border */}
      <div className="w-full max-w-105 rounded-[18px] animate__animated animate__fadeIn animate__faster border border-[rgba(253,230,138,0.5)] shadow-lg">
        <div className="bg-white rounded-[18px] overflow-hidden">
          {/* Brand Bar */}
          <div
            className="text-center py-5 px-6 animate__animated animate__fadeInDown"
            style={{
              background: "linear-gradient(90deg, #f5f0e8 0%, #fdf6e3 100%)",
              borderBottom: "1px solid #f0e0b0",
            }}
          >
            <h1
              className="text-[28px] font-extrabold tracking-tight"
              style={{ color: "#7A5200" }}
            >
              SunCart
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
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
              >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />
                <Description>
                  Must be at least 8 characters with 1 uppercase and 1 number
                </Description>
                <FieldError />
              </TextField>
              <div className="flex gap-2">
                <Button
                  type="submit"
                  className="h-11 px-6 rounded-full font-bold text-[#3d2000] transition-all duration-200"
                  style={{ background: "#F5A623" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#e09520")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#F5A623")
                  }
                >
                  <Check />
                  Login
                </Button>

                <Button
                  type="reset"
                  variant="secondary"
                  className="h-11 px-6 rounded-full font-semibold text-[#7A5200] border-[1.5px] border-[#F0B429] bg-white transition-all duration-200 hover:bg-[#fff8ec]"
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
              className="w-full text-[#333] transition-all duration-200 hover:border-[#F0B429] hover:bg-[#fff8ec] rounded-[10px] h-12"
              variant="outline"
              type="button"
            >
              <Icon icon="devicon:google" />
              Sign in with Google
            </Button>

            {/* Register Link */}
            <p className="text-center text-sm text-[#888] mt-6">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-semibold"
                style={{ color: "#F0A500" }}
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
