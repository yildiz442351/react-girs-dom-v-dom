const Button = (props) => {
  //console.log(props);

  console.log(butonMetni);
  const buttonStyle = {
    backgroundColor:
      butonMetni === "Kullanıcı Girişi"
        ? "greenyellow"
        : butonMetni === "Yönetici Girişi"
        ? "orangered"
        : "yellow",
  };

  return (
    <div className="user-login" style={buttonStyle}>
      style={buttonStyle}
      {butonMetni}
    </div>
  );
};

export default Button;
