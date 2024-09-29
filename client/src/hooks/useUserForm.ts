import { useState } from "react";
import { RegisterFormData, UserType } from "../types/registerForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { getUserSchema } from "../utils/functions";
import { postRegister } from "../services/userForm.service";

export function useUserForm() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType>(UserType.NONE);
  const [output, setOutput] = useState("");

  const createUserForm = useForm<RegisterFormData>({
    resolver: zodResolver(getUserSchema(step, userType)),
    mode: "onChange",
  });

  const {
    formState: { isSubmitting },
    trigger,
    reset,
  } = createUserForm;

  async function onNext(data: RegisterFormData) {
    const isValid = await trigger();

    if (isValid) {
      if (step === 1) {
        setUserType(data.userType);
      }
      setStep(step + 1);

      reset({}, { keepValues: true });
    }
  }

  function resetForm() {
    setStep(1);
    reset();
  }

  async function goBack() {
    setStep(step - 1);
  }

  async function createUser(data: RegisterFormData) {
    try {
      const response = await postRegister(data);
      setOutput(JSON.stringify(response.data, null, 2));
      setStep(0);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(
        "Erro ao cadastrar usuário:",
        error.response?.data || error.message
      );
      alert("Erro ao cadastrar usuário");
    }
  }

  return {
    createUserForm,
    step,
    userType,
    onNext,
    goBack,
    resetForm,
    createUser,
    isSubmitting,
    output,
  };
}
