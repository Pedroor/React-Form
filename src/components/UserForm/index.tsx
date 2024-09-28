import { lazy } from "react";
import Footer from "./Footer";
import StepInfo from "./StepInfo";

const Step1 = lazy(() => import("./Steps/Step1"));
const Step2 = lazy(() => import("./Steps/Step2"));
const Step3 = lazy(() => import("./Steps/Step3"));
const Step4 = lazy(() => import("./Steps/Step4"));

export const UserForm = {
  Footer,
  Step1,
  Step2,
  Step3,
  Step4,
  StepInfo,
};
