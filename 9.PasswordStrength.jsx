import React from 'react';

const PasswordStrength = () => {
  const [password, setPassword] = React.useState("");
  const [strength, setStrength] = React.useState("");

  const evaluateStrength = (password) => {
    if (!password) return "";
    if (password.length < 6) return "Weak";
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) return "Medium";
    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) return "Strong";
    return "Strong";
  };

  const handleChange = (event) => {
    const pwd = event.target.value;
    setPassword(pwd);
    setStrength(evaluateStrength(pwd));
  };

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      {strength && <p>Password Strength: {strength}</p>}
    </div>
  );
};

export default PasswordStrength;
