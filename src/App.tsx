import { FC } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Tabs from './components/Tabs/Tabs';
import Paragraph from './components/Typography/Paragraph/Paragraph';
import Text from './components/Typography/Text/Text';
import Title from './components/Typography/Title/Title';

interface IAppProps {}

const App: FC<IAppProps> = () => {
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
			<div className="typography-box">
				<h1>Typography - Paragraph</h1>
				<div className="divider"></div>
				<h2>Sizes</h2>
				<div className="divider"></div>
				<h2>Small</h2>
				<Paragraph fontSize="small">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc ultricies vulputate tellus, vitae vulputate metus
					sollicitudin vitae. Sed interdum eros eu turpis consectetur
					bibendum. Nam sed tincidunt leo. Etiam interdum nunc et
					velit vehicula ullamcorper. Orci varius natoque penatibus et
					magnis dis parturient montes, nascetur ridiculus mus.
					Phasellus non erat a nisi cursus placerat id et nulla. Ut
					gravida porta consectetur.
				</Paragraph>
				<div className="divider"></div>
				<h2>Medium</h2>
				<Paragraph fontSize="medium">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc ultricies vulputate tellus, vitae vulputate metus
					sollicitudin vitae. Sed interdum eros eu turpis consectetur
					bibendum. Nam sed tincidunt leo. Etiam interdum nunc et
					velit vehicula ullamcorper. Orci varius natoque penatibus et
					magnis dis parturient montes, nascetur ridiculus mus.
					Phasellus non erat a nisi cursus placerat id et nulla. Ut
					gravida porta consectetur.
				</Paragraph>
				<div className="divider"></div>
				<h2>Large</h2>
				<Paragraph fontSize="large">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc ultricies vulputate tellus, vitae vulputate metus
					sollicitudin vitae. Sed interdum eros eu turpis consectetur
					bibendum. Nam sed tincidunt leo. Etiam interdum nunc et
					velit vehicula ullamcorper. Orci varius natoque penatibus et
					magnis dis parturient montes, nascetur ridiculus mus.
					Phasellus non erat a nisi cursus placerat id et nulla. Ut
					gravida porta consectetur.
				</Paragraph>
				<div className="divider"></div>
				<h2>Types</h2>
				<div className="divider"></div>
				<h2>Default</h2>
				<Paragraph type="default">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc ultricies vulputate tellus, vitae vulputate metus
					sollicitudin vitae. Sed interdum eros eu turpis consectetur
					bibendum. Nam sed tincidunt leo. Etiam interdum nunc et
					velit vehicula ullamcorper. Orci varius natoque penatibus et
					magnis dis parturient montes, nascetur ridiculus mus.
					Phasellus non erat a nisi cursus placerat id et nulla. Ut
					gravida porta consectetur.
				</Paragraph>
				<div className="divider"></div>
				<h2>Code</h2>
				<Paragraph type="code">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc ultricies vulputate tellus, vitae vulputate metus
					sollicitudin vitae. Sed interdum eros eu turpis consectetur
					bibendum. Nam sed tincidunt leo. Etiam interdum nunc et
					velit vehicula ullamcorper. Orci varius natoque penatibus et
					magnis dis parturient montes, nascetur ridiculus mus.
					Phasellus non erat a nisi cursus placerat id et nulla. Ut
					gravida porta consectetur.
				</Paragraph>
				<h1>Typography - Text</h1>
				<div className="divider"></div>
				<div className="typography-text-box">
					<div>
						<h2>Sizes</h2>
						<Text fontSize="small">small</Text>
						<Text fontSize="medium">medium</Text>
						<Text fontSize="large">large</Text>
					</div>
					<div>
						<h2>Underline</h2>
						<Text underline fontSize="medium">
							Underline
						</Text>
					</div>
					<div>
						<h2>lineThrough</h2>
						<Text lineThrough fontSize="medium">
							lineThrough
						</Text>
					</div>
					<div>
						<h2>overline</h2>
						<Text overLine fontSize="medium">
							overline
						</Text>
					</div>
					<div>
						<h2>Modes</h2>
						<Text status="default" fontSize="medium">
							default
						</Text>
						<Text status="success" fontSize="medium">
							success
						</Text>
						<Text status="warning" fontSize="medium">
							warning
						</Text>
						<Text status="error" fontSize="medium">
							error
						</Text>
						<Text status="info" fontSize="medium">
							info
						</Text>
					</div>
					<div></div>
				</div>
				<Paragraph>
					Lorem ipsum dolor sit <Text status="info">amet</Text>,
					consectetur adipiscing elit. Nunc ultricies vulputate
					tellus, vitae vulputate metus sollicitudin vitae. Sed
					interdum eros eu turpis consectetur bibendum.{' '}
					<Text underline>Nam sed tincidunt</Text> leo. Etiam interdum
					nunc et velit vehicula ullamcorper. Orci varius natoque
					penatibus et magnis dis parturient montes, nascetur
					ridiculus mus. Phasellus non erat a nisi cursus placerat id
					et nulla. Ut gravida porta consectetur.
				</Paragraph>
				<Title level={1}>Level 1</Title>
				<Title level={2}>Level 2</Title>
				<Title level={3}>Level 3</Title>
				<Title level={4}>Level 4</Title>
				<Title level={5}>Level 5</Title>
				<Title level={6}>Level 6</Title>
				<Tabs
					tabs={[
						{
							component: <Title level={1}>Tab 1</Title>,
							title: 'default',
							key: 'tab1',
						},
						{
							component: <Title level={1}>Tab 2</Title>,
							title: 'loading',
							key: 'tab2',
							loading: true,
						},
						{
							component: <Title level={1}>Tab 3</Title>,
							title: 'disabled',
							key: 'tab3',
							disabled: true,
						},
					]}
				/>

				<Input />
				<Input label="asd" />
				<Input status="error" />
				<Input status="warning" />
				<Input status="success" />
				<Input required />
				<Input label="asd" required />
				<Input disabled value={'disabled input'} />
			</div>
		</div>
	);
};

export default App;
