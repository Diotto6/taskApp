import { FooterSocials } from "../components/Footer";
import { Grid } from "../components/Grid";
import { GridMain } from "../components/GridMain";
import { NavBarIndex } from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Grid>
        <NavBarIndex />
        <GridMain
          title="Tasked"
          textFirst="Organize seu "
          textMain="trabalho, vida e lazer em um só aplicativo!"
          paragraph="O aplicativo n° 1 para alcançar a organização certa e foco em sua vida, conciliar suas tarefas do dia nunca ficou tão facil!"
        />
        <FooterSocials
          hrefLink="https://www.linkedin.com/in/nicolas-diotto-741404218/"
          hrefInst="https://www.instagram.com/nicodiotto/"
          hrefGit="https://github.com/Diotto6"
        />
      </Grid>
    </>
  );
}
