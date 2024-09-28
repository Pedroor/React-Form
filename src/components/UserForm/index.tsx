import { lazy } from "react";
import Footer from "./Footer";
import StepInfo from "./StepInfo";

const Step1 = lazy(() => import("./Step1"));
const Step2 = lazy(() => import("./Step2/Step2"));
const Step3 = lazy(() => import("./Step3"));
const Step4 = lazy(() => import("./Step4"));

export const UserForm = {
  Footer,
  Step1,
  Step2,
  Step3,
  Step4,
  StepInfo,
};
