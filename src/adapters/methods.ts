import { PathServices } from "@/services/pathServices";
import { MethodsAxios } from "./adapters-axios";

export class UseMethods extends MethodsAxios {}

export const useMethods = new UseMethods(PathServices.URL);
