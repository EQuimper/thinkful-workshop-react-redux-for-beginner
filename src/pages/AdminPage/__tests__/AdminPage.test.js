import React from 'react';
import renderer from 'react-test-renderer';

import AdminPage from '../';

const todos = [
  'todo1',
  'todo2',
  'todo3',
];

it('renders correctly', () => {
  const tree = renderer.create(
    <AdminPage todos={todos} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
