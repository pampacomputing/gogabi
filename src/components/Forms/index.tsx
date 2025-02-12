"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Forms() {
  // Definimos o schema de validação usando Yup:
  const validationSchema = Yup.object({
    nome: Yup.string()
      .min(3, "O nome deve ter mais de 2 caracteres")
      .required("Nome é obrigatório"),
    email: Yup.string()
      // Exige a presença de '@' e que termine em .com
      // Regex bem simples, não cobre todos os casos de e-mail,
      // mas atende ao requisito de ter '@' e terminar em '.com'
      .matches(/^[^\s@]+@[^\s@]+\.com$/, "Digite um e-mail válido (com '@' e terminando em '.com')")
      .required("E-mail é obrigatório"),
    senha: Yup.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required("Senha é obrigatória"),
  });

  // Configuramos o Formik para lidar com os campos, erros e envio:
  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      senha: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Aqui vai o que você deseja fazer ao enviar o formulário
      console.log("Valores do formulário:", values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-[480px] h-[720px] flex flex-col items-center justify-center p-4 text-black gap-4 bg-white opacity-80 rounded"
    >
      {/* Campo Nome */}
      <div className="w-full flex flex-col gap-1">
        <div className="text-md font-bold">Nome</div>
        <TextField
          // Removemos a prop "label"
          // e usamos placeholder + InputLabelProps para não ter label flutuante
          placeholder="Digite seu nome"
          InputLabelProps={{ shrink: false }}
          name="nome"
          value={formik.values.nome}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // importante para habilitar validação ao perder foco
          error={formik.touched.nome && Boolean(formik.errors.nome)}
          helperText={formik.touched.nome && formik.errors.nome}
          fullWidth
        />
      </div>

      {/* Campo Email */}
      <div className="w-full flex flex-col gap-1">
        <div className="text-md font-bold">Email</div>
        <TextField
          placeholder="Digite seu email"
          InputLabelProps={{ shrink: false }}
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
        />
      </div>

      {/* Campo Senha */}
      <div className="w-full flex flex-col gap-1">
        <div className="text-md font-bold">Senha</div>
        <TextField
          placeholder="Digite sua senha"
          InputLabelProps={{ shrink: false }}
          name="senha"
          type="password"
          value={formik.values.senha}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.senha && Boolean(formik.errors.senha)}
          helperText={formik.touched.senha && formik.errors.senha}
          fullWidth
        />
      </div>

      <Button
        type="submit"
        sx={{
          backgroundColor: "#066360",
          color: "white",
          borderRadius: "8px",
          "&:hover": { backgroundColor: "#69B4B1" },
        }}
      >
        Enviar
      </Button>
    </form>
  );
}
