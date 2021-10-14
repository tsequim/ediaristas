import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <TextFieldMask
        mask={"99.999-999"}
        variant={"outlined"}
        label={"Digite seu CEP"}
        fullWidth
      />
      <Button variant={"contained"}>Buscar</Button>

      <UserInformation
        name={"Otávio Sequim"}
        picture={"https://github.com/tsequim.png"}
        rating={3}
        description={"Espírito Santo"}
      />
    </div>
  );
};

export default Home;
