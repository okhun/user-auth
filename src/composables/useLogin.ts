import { useField, useForm } from "vee-validate";
import { type InferType, object, string } from "yup";
import { useAuthStore } from "@/store/auth";

export const useLogin = () => {
  const store = useAuthStore();
  const { login } = store;
  const errorMessage = "Field is requied";

  const formSchema = object({
    username: string().required(errorMessage),
    password: string().min(6, errorMessage).required(errorMessage),
  });
  type FormType = InferType<typeof formSchema>;

  const { handleSubmit } = useForm<FormType>({
    validationSchema: formSchema,
    initialValues: { username: "", password: "" },
  });
  const username = useField<FormType["username"]>("username");
  const password = useField<FormType["password"]>("password");

  const handleFormSubmit = handleSubmit((values) => {
    login(values);
  });

  return { username, password, handleFormSubmit };
};
