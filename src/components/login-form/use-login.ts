import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const passwordConstraint = z
  .string()
  .trim()
  .min(4, { message: 'Password must be longer than 3 characters' });

const loginSchema = z.object({
  email: z.string().email(),
  password: passwordConstraint,
});

export type LoginFormType = z.infer<typeof loginSchema>;

export const useLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  return { handleSubmit, register, errors };
};
