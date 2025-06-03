import { Accordion, AccordionTab } from 'primereact/accordion';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const CardLivro = ({ titulo, autor, genero, sinopse }) => (
  <div className="mb-4 mt-4 w-2xl p-4 bg-[#ECE0D1] shadow-lg rounded-lg">
    <Accordion>
      <AccordionTab header={titulo}>
        <p><strong>Autor:</strong> {autor}</p>
        <p><strong>Gênero:</strong> {genero}</p>
        <p><strong>Sinopse:</strong> {sinopse}</p>
      </AccordionTab>
    </Accordion>
  </div>
);

export default CardLivro;

