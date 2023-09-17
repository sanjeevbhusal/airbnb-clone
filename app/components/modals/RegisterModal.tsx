"use client";

import { useRegisterModal } from "@/app/hooks/useRegisterModal";
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
import { useLoginModal } from "@/app/hooks/useLoginModal";

export function RegisterModal() {
  const { isOpen, onClose, onOpen } = useRegisterModal();
  const loginModal = useLoginModal();

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
      await new Promise((res) => setTimeout(res, 2000));
      await axios.post("/api/register", data);
      toast.success("Account created successfully!");
      onClose();
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const content = (
    <div className="flex flex-col gap-4">
      <ModalHeading title="Welcome to Airbnb" subtitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
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
        label="Signup with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Signup with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      {/* TODO: Implment Login with Facebook's Functionality */}
      <div className="hidden">
        <Button
          outline
          label="Continue with Facebook"
          icon={BiLogoFacebookSquare}
          iconStyle="text-blue-500"
          onClick={() => {}}
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-2 mt-4">
        <span className="text-neutral-500 font-light">
          Already have an account?
        </span>
        <span
          className="text-neutral-800 cursor-pointer hover:underline font-light"
          onClick={() => {
            onClose();
            loginModal.onOpen();
          }}
        >
          Login
        </span>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Signup"
      disabled={isLoading}
      actionLabel="Signup"
      content={content}
      onSubmit={handleSubmit(onSubmit)}
      footerContent={footerContent}
    ></Modal>
  );
}
