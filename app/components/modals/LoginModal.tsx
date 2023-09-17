"use client";

import { useLoginModal } from "@/app/hooks/useLoginModal";
import { Modal } from "./Modal";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { ModalHeading } from "./ModalHeading";
import { Input } from "../inputs/Input";
import { toast } from "react-hot-toast";
import { Button } from "../Button";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { signIn } from "next-auth/react";

export function LoginModal() {
  const { isOpen, onClose, onOpen } = useLoginModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      await axios.post("/api/login", data);
      toast.success("Login successfull!");
      onClose();
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const content = (
    <div className="flex flex-col gap-4">
      <ModalHeading title="Welcome Back" subtitle="Login to your account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4">
      <Button
        outline
        label="Login with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Login with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      {/* TODO: Implment Login with Facebook's Functionality */}
      <div className="hidden">
        <Button
          outline
          label="Login with Facebook"
          icon={BiLogoFacebookSquare}
          iconStyle="text-blue-500"
          onClick={() => {}}
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-2 mt-4">
        <span className="text-neutral-500 font-light">
          Do not have an account?
        </span>
        <Link href="/signup">
          <span className="text-neutral-800 cursor-pointer hover:underline font-light">
            Signup
          </span>
        </Link>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Login"
      disabled={isLoading}
      actionLabel="Login"
      content={content}
      onSubmit={handleSubmit(onSubmit)}
      footerContent={footerContent}
    ></Modal>
  );
}
