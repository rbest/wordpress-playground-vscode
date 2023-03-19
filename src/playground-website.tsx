import { createRoot } from 'react-dom/client';
import BrowserChrome from './playground-website/browser-chrome';

const Website = ({ iframeSrc }) => {
	return (
		<BrowserChrome>
			<iframe src={iframeSrc}></iframe>
		</BrowserChrome>
	);
};

const el = document.getElementById('root');
if ( el ) {
	const iframeSrc = el.dataset.iframeSrc;
	console.log(iframeSrc);
	const root = createRoot(el);
	root.render(
		<Website iframeSrc={ iframeSrc } />
	);
}
