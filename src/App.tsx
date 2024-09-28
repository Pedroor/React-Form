import { FormProvider, useForm } from "react-hook-form";
import "./styles/global.css";
import { RegisterFormData, UserType } from "./types/registerForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { getUserSchema } from "./utils/functions";
import { UserForm } from "./components/UserForm";
function App() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType>(UserType.NONE);
  const createUserForm = useForm<RegisterFormData>({
    resolver: zodResolver(getUserSchema(step, userType)),
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    trigger,
    watch,
    reset,
  } = createUserForm;

  const watchedUserType = watch("userType");

  async function onNext(data: RegisterFormData) {
    const isValid = await trigger(); // Valida o step atual

    if (isValid) {
      // Step 1: Armazena o tipo de usuário
      if (step === 1) {
        setUserType(data.userType);
      }

      // Avança para o próximo step
      setStep(step + 1);

      // Atualiza o schema do próximo step
      reset({}, { keepValues: true });
    }
  }

  async function goBack() {
    setStep(step - 1);
  }

  async function createUser(data: RegisterFormData) {
    console.log(data);
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center px-4">
      <FormProvider {...createUserForm}>
        <div className="flex flex-col items-center gap-6 w-full max-w-sm mt-6">
          <div className="w-full">
            <UserForm.StepInfo step={step} />
            {step === 1 && <UserForm.Step1 onNext={onNext} />}
            {step === 2 && (
              <UserForm.Step2.Step
                onNext={onNext}
                goBack={goBack}
                userType={userType}
              />
            )}
          </div>
        </div>
      </FormProvider>
    </main>
  );
}

export default App;
