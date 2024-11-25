import { FC, useContext } from "react";
import { LoginForm, StyledLogin } from "./style";
import { TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { LoginFormValues } from "./types";
import { loginSchema, LoginSchema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../core/services/authentication_service";
import { LoadingButton } from "@mui/lab";
import { SnackBarContext } from "../../core/contexts/SnackBarContext";
import { AuthContext } from "../../core/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const loginMutation = useMutation({
    mutationFn: login,
  });

  const snackBarContext = useContext(SnackBarContext);
  const { checkAuthStatus } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginFormValues, undefined, LoginSchema>({
    defaultValues: { username: "", password: "" },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (loginForm: LoginSchema) => {
    loginMutation.mutate(loginForm, {
      onSuccess: () => {
        snackBarContext?.setOpen({
          open: true,
          message: "Connexion réussie !",
          type: "success",
        });
        checkAuthStatus();
        navigate(-1);
      },
      onError: () => {
        snackBarContext?.setOpen({
          open: true,
          type: "error",
          message: "Oups, erreur pendant la connexion, veuillez réessayer...",
        });
      },
    });
  };

  return (
    <StyledLogin>
      <LoginForm>
        <Typography variant="h2" sx={{ marginBottom: "2rem" }}>
          Login
        </Typography>
        <Controller
          control={control}
          name="username"
          render={({ field: { value, onChange } }) => (
            <TextField
              label="Utilisateur"
              variant="outlined"
              {...(register("username"), { required: true })}
              error={errors.username?.message !== undefined}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange } }) => (
            <TextField
              label="Mot de passe"
              variant="outlined"
              type="password"
              {...(register("password"), { required: true })}
              error={errors.password?.message !== undefined}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <LoadingButton
          color="primary"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
          loading={loginMutation.isPending}
        >
          Login
        </LoadingButton>
      </LoginForm>
    </StyledLogin>
  );
};

export default Login;
