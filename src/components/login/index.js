import { auth, provider } from "../../servicos/config";

const LoginButton = () => {
  const signInWithGoogle = async () => {
    try {
      // Inicia o processo de autenticação com o Google
      const result = await auth.signInWithPopup(provider);
      // Aqui você pode lidar com o resultado da autenticação, por exemplo, redirecionando o usuário para outra página
      console.log(result);
    } catch (error) {
      // Trata qualquer erro que possa ocorrer durante a autenticação
      console.error(error);
    }
  };

  return (
    <button onClick={signInWithGoogle} className="login-button">
      Login com Google
    </button>
  );
};

export default LoginButton;