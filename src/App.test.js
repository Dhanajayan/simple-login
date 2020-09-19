import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders without error', () => {
	const wrapper = shallow(<App/>);
	const appLayout = wrapper.find('[data-test="component-layout"]');
	expect(appLayout.length).toBe(1);
});
