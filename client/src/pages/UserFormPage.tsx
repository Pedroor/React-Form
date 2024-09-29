import { FormProvider } from "react-hook-form";
import { useUserForm } from "../hooks/useUserForm";
import { Suspense } from "react";
import { UserForm } from "../components/UserForm";

export function UserFormPage() {
  const {
    createUser,
    createUserForm,
    goBack,
    onNext,
    step,
    userType,
    resetForm,
    output,
  } = useUserForm();

  return (
    <main className="h-screen flex flex-col items-center justify-center px-4">
      <FormProvider {...createUserForm}>
        <div className="flex flex-col items-center gap-6 w-full max-w-sm mt-6">
          <div className="w-full">
            <UserForm.StepInfo step={step} />
            {step === 0 && (
              <h2 className="text-lg font-bold">
                Usuário cadastrado com sucesso!
              </h2>
            )}
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
