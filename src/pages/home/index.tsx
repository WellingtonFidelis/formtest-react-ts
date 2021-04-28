import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Home: React.FC = () => {

  const history = useHistory();

  function listCharacters() {
    history.push('/list-character');
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <img src="https://store-images.s-microsoft.com/image/apps.15041.71343510227343465.377174a9-abc8-4da3-aaa6-8874fdb9e2f5.00fc0a9e-295e-40ca-a391-58ed9f83e9a0?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF" className="card-img-top" alt="Naruto Shippuden" />
        <div className="card-body">
          <h5 className="card-title">Homenagem ao grande Narutinho</h5>
          <p className="card-text">
            Esse app foi montado para utilizar integrar com o <a href="https://github.com/WellingtonFidelis/django_backend_test">projeto</a> de API feita com Django.
            </p>
          <p>
            Esse site faz parte de uma arquitetura montada com Apache2, Nginx, UWSGI, para tratativas de acesso, proxy reverso, etc.
            E está hospedado em um servidor com Linux Ubuntu 18.04, por tempo determinado.
            </p>
          <p>
            Para testar, basta clicar no botão abaixo e pronto... Deixei habilitado todas os métodos do CRUD para nos divertirmos.
            </p>
          <Button className="" size="sm" variant="dark" id="buttonNewCharacter" onClick={() => listCharacters()} block>Let's go.</Button>
        </div>
      </div>
    </div>
  )
}

export default Home;
