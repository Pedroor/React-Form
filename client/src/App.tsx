import { FormProvider, useForm } from "react-hook-form";
import "./styles/global.css";
import { RegisterFormData, UserType } from "./types/registerForm.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Suspense, useState } from "react";
import { getUserSchema } from "./utils/functions";
import { UserForm } from "./components/UserForm";

function App() {
  const [step, setStep] = useState(1);
  const [output, setOutput] = useState("");
  const [userType, setUserType] = useState<UserType>(UserType.NONE);
  const createUserForm = useForm<RegisterFormData>({
    resolver: zodResolver(getUserSchema(step, userType)),
    mode: "onChange",
  });

  const {
    // formState: { isSubmitting },
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
    setStep(0);
    setOutput(JSON.stringify(data, null, 2));
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
      {step === 0 && (
        <>
          <pre>{output}</pre>

          <button
            type="button"
            className="w-full h-10 bg-orange-400 text-white py-1 px-3 rounded mt-4"
            onClick={resetForm}
          >
            Resetar
          </button>
        </>
      )}
    </main>
  );
}

export default App;
