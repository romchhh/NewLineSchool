import "./InputFreeLesson.css";
export default function InputFreeLessong({
  inputValue,
  setInputValue,
  placeholder,
  type,
}: {
  inputValue: string;
  setInputValue: (value: string) => void;
  placeholder: string;
  type: string;
}) {
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "").replace(/^380/, "").slice(0, 10); 
    if (numbers.length === 0) return ""; 

    const parts = [
      numbers.slice(0, 2),
      numbers.slice(2, 5),
      numbers.slice(5, 7),
      numbers.slice(7, 9),
    ];

    let formatted = "+38(0" + parts[0];
    if (parts[0].length === 2) {
      formatted += `)${parts[1] ?? ""}`;
      if (parts[1]?.length === 3) {
        formatted += `-${parts[2] ?? ""}`;
        if (parts[2]?.length === 2) {
          formatted += `-${parts[3] ?? ""}`;
        }
      }
    }

    return formatted;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, ""); 
    if (type === "tel") {
      setInputValue(formatPhoneNumber(rawValue)); 
    } else {
      setInputValue(e.target.value); 
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && inputValue) {
      e.preventDefault(); 
      const cleaned = inputValue.replace(/[^0-9]/g, "").slice(0, -1); 
      setInputValue(formatPhoneNumber(cleaned)); 
    }
  };

  return (
    <input
      className="home-free-lessons-form-input"
      type={type}
      value={inputValue}
      placeholder={placeholder}
      onChange={handleChange}
      onKeyDown={type === "tel"? handleKeyDown : ()=>{}}
      maxLength={type === "tel" ? 17 : 25}
    />
  );
}
