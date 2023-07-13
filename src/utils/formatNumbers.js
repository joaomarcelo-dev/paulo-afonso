export   const formatPhoneNumber = (value) => {
  const cleanedValue = value.replace(/\D/g, '');
  let formattedPhoneNumber = cleanedValue;

  if (cleanedValue.length > 2) {
    formattedPhoneNumber = `(${formattedPhoneNumber.slice(0, 2)}) ${formattedPhoneNumber.slice(2)}`;
  }

  if (cleanedValue.length > 7) {
    formattedPhoneNumber = `${formattedPhoneNumber.slice(0, 10)}-${formattedPhoneNumber.slice(10)}`;
  }

  return formattedPhoneNumber;
};

export const formatCPF = (value) => {
  // Remove todos os caracteres não numéricos
  const cleanedValue = value.replace(/\D/g, '');

  // Aplica a formatação do CPF
  
  let formattedCPF = cleanedValue;
  

  if (cleanedValue.length > 3) {
    formattedCPF = `${formattedCPF.slice(0, 3)}.${formattedCPF.slice(3)}`;
  }

  if (cleanedValue.length > 6) {
    formattedCPF = `${formattedCPF.slice(0, 7)}.${formattedCPF.slice(7)}`;
  }

  if (cleanedValue.length > 9) {
    formattedCPF = `${formattedCPF.slice(0, 11)}-${formattedCPF.slice(11)}`;
  }

  return formattedCPF;
};