import jsImg from '../../assets/images/icons/java-script.png';
import phpImg from '../../assets/images/icons/php.png';
import javaImg from '../../assets/images/icons/java.png';
import cImg from '../../assets/images/icons/c.png';
import reactImg from '../../assets/images/icons/react.png';
import cssImg from '../../assets/images/icons/css.png';
import sassImg from '../../assets/images/icons/sass.png';
import tailwindImg from '../../assets/images/icons/tailwind.png';
import sqlImg from '../../assets/images/icons/sql.png';
import mysqlImg from '../../assets/images/icons/mysql.png';
import sqlserverImg from '../../assets/images/icons/sql-server.png';
import gitImg from '../../assets/images/icons/git.png';

import Technology from "./Technology";

export default function Technologies() {
    return (
        <section id="technologies">
            <h2>Tecnologias e Ferramentas</h2>
            <div id="technologies-box">
                <Technology linkRef="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" imgScr={jsImg} alt="Ícone do JavaScript">JavaScript</Technology>
                <Technology linkRef="https://www.php.net/" imgScr={phpImg} alt="Ícone do PHP">PHP</Technology>
                <Technology linkRef="https://www.java.com/pt-br/" imgScr={javaImg} alt="Ícone do Java">Java</Technology>
                <Technology linkRef="https://www.c-language.org/" imgScr={cImg} alt="Ícone do C">C</Technology>
                <Technology linkRef="https://react.dev/" imgScr={reactImg} alt="Ícone do React">React</Technology>
                <Technology linkRef="https://developer.mozilla.org/pt-BR/docs/Web/CSS" imgScr={cssImg} alt="Ícone do CSS">CSS</Technology>
                <Technology linkRef="https://sass-lang.com/" imgScr={sassImg} alt="Ícone do Sass">Sass/SCSS</Technology>
                <Technology linkRef="https://tailwindcss.com/" imgScr={tailwindImg} alt="Ícone do Tailwind">Tailwind</Technology>
                <Technology linkRef="https://www.iso.org/standard/76583.html" imgScr={sqlImg} alt="Ícone do SQL">SQL</Technology>
                <Technology linkRef="https://www.mysql.com/" imgScr={mysqlImg} alt="Ícone do MySQL">MySQL</Technology>
                <Technology linkRef="https://www.microsoft.com/pt-br/sql-server" imgScr={sqlserverImg} alt="Ícone do SQL Server">SQL Server</Technology>
                <Technology linkRef="https://git-scm.com/about" imgScr={gitImg} alt="Ícone do Git">Git</Technology>
            </div>
        </section>
    );
}