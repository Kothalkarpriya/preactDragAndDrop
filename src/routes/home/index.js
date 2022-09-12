import { h } from 'preact';
import style from './style.css';
import Items from '../../components/Items';

const Home = () => (
	<div class={style.home}>
		<h1>Drag and Drop feature</h1>
		<Items />
	</div>
);

export default Home;
