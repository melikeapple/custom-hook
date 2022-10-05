import { FormWrapper } from "./FormWrapper";

type UserData = {
  email: string;
  password: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function AccountForm({ email, password, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
