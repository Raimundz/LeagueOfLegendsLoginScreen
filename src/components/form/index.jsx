import { FormContainer } from "./styles";
import { AiOutlineArrowRight } from "react-icons/ai";
function LoginForm() {
  return (
    <FormContainer>
      <img
        src="https://download.logo.wine/logo/Riot_Games/Riot_Games-Logo.wine.png"
        className="riotLogo"
      />
      <h1>Fazer Login</h1>
      <input type="text" placeholder="Nome de usuário" className="username" />
      <input type="password" placeholder="Senha" className="password" />

      <label className="checkboxLabel">
        <input type="checkbox" id="checkboxLogin" />
        Manter login
      </label>
      <button type="submit" className="submitButton">
        <AiOutlineArrowRight size={40} />
      </button>
      <a
        href="https://recovery.riotgames.com/pt-br?region=BR1"
        target={"_blank"}
      >
        Não consegue iniciar sessão?
      </a>
      <a
        className="createAccount"
        href="https://signup.leagueoflegends.com/pt-br/signup/index#/"
        target={"_blank"}
      >
        Criar conta
      </a>
    </FormContainer>
  );
}

export default LoginForm;
