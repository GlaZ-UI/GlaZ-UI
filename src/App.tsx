import { FC } from 'react';
import Button from './components/Button/Button';
import './App.scss';

interface IAppProps {}

const App: FC<IAppProps> = ({}) => {
	return (
		<div className="App">
			<div className="buttons-box">
				<h1>Button</h1>
				<div className="divider"></div>
				<div className="buttons-box-grid">
					<div>
						<h2>Type</h2>
						<Button type="primary">Primary</Button>
						<Button type="filled">Filled</Button>
						<Button type="outlined">Outlined</Button>
						<Button type="text">Text</Button>
						<Button type="link">Link</Button>
					</div>
					<div>
						<h2>Size</h2>
						<Button type="primary" size="small">
							Small
						</Button>
						<Button type="primary" size="medium">
							Medium
						</Button>
						<Button type="primary" size="large">
							Large
						</Button>
					</div>
					<div>
						<h2>Disabled</h2>
						<Button type="primary" disabled={true}>
							Disabled
						</Button>
					</div>
					<div>
						<h2>Shape</h2>
						<Button type="primary" shape="smooth">
							Smooth
						</Button>
						<Button type="primary" shape="circle">
							Circle
						</Button>
					</div>
					<div>
						<h2>Waves</h2>
						<Button type="primary" wave="hover">
							Hover
						</Button>
						<Button type="primary" wave="active">
							Active
						</Button>
						<Button type="primary" wave="permanent">
							Permanent
						</Button>
						<Button type="primary" wave="none">
							None
						</Button>
					</div>
					<div>
						<h2>Loading</h2>
						<Button type="primary" loading={true}>
							Loading
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
