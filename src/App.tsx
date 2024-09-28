import { FormProvider, useForm } from "react-hook-form";
import "./styles/global.css";
import { RegisterFormData, UserType } from "./types/registerForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Suspense, useState } from "react";
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
    // handleSubmit,
    // formState: { isSubmitting },
    trigger,
    reset,
  } = createUserForm;

  async function onNext(data: RegisterFormData) {
    console.log("OI");

    const isValid = await trigger();

    if (isValid) {
      if (step === 1) {
        setUserType(data.userType);
      }

      setStep(step + 1);

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
            <Suspense fallback={<div>Carregando...</div>}>
              {step === 1 && <UserForm.Step1 onNext={onNext} />}
              {step === 2 && (
                <UserForm.Step2
                  onNext={onNext}
                  goBack={goBack}
                  userType={userType}
                />
              )}
              {step === 3 && <UserForm.Step3 goBack={goBack} onNext={onNext} />}
              {step === 4 && (
                <UserForm.Step4
                  goBack={goBack}
                  onNext={createUser}
                  userType={userType}
                />
              )}
            </Suspense>
          </div>
        </div>
      </FormProvider>
    </main>
  );
}

export default App;
