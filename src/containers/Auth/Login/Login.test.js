import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

test('renders without error', () => {
	const wrapper = shallow(<Login/>);
	const appComponent = wrapper.find('[data-test="component-field"]');
	expect(appComponent.length).toBe(1);
});
