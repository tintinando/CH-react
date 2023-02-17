import { addDoc } from "firebase/firestore/lite";
import { useState } from "react";
import { dbCheckout } from "../components/firebase/Firebase";

export const useForm = (initialForm, validateForm, cart) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    // crea mensajes de validación al salir de un campo
    setErrors(validateForm(form));
  };

  const handleSubmit = async (e) => {
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      const docRef = await addDoc(dbCheckout, {
        ts: Date.now(),
        user: { ...form },
        cart,
      });
      setForm(initialForm);
      setResponse("Finalizó exitosamente. Id de compra " + docRef.id);
      setLoading(false);
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
