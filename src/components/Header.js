import {Rocket} from 'phosphor-react';

function Header() {
  return (
		<div className="header">
			<Rocket size={32} className="rocket-icon"/>
			<h1>Lista de Tarefas</h1>
			<Rocket size={32} className="rocket-icon"/>
		</div>
	);
}

export default Header;