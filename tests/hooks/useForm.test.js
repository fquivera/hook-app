import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe("Pruebas en el useForm", () => {
  const initialForm = {
    name: "Francisco",
    email: "fquivera@google.com",
    password: "abcd1234",
  };

  test("debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      password: initialForm.password,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("debe de cambiar el nombre del usuario", () => {
    const newValue = "Francisco Antonio";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("Debe realizar el rest del Formulario", () => {
    const newValue = "Francisco Antonio";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toEqual(initialForm.name);
  });

  test("debe de llamar la funcion que setea el estado inicial", () => {});
});
