import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { StateMock } from '@react-mock/state';
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer';

import IDCheckerScene from '../IDCheckerScene';

interface IDCheckerSceneProps {
  isWebcamOn: boolean;
  isRejected: boolean;
  imageSource: string;
}

const mockIDCheckerSceneState = ({ isWebcamOn, isRejected, imageSource }: IDCheckerSceneProps) =>
  <StateMock state={{ isWebcamOn, isRejected, imageSource }}>
    <IDCheckerScene />
  </StateMock>


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IDCheckerScene/>, div);
})

it('matches snapshot', () => {
  const tree = renderer.create(<IDCheckerScene/>).toJSON();
  expect(tree).toMatchSnapshot();
})

it('matches snapshot when click TAKE PICTURE button', () => {
  const tree = renderer.create(mockIDCheckerSceneState({ isWebcamOn: true, isRejected: undefined, imageSource: '' })).toJSON();
  expect(tree).toMatchSnapshot();
})

it('matches snapshot when rejects picture', () => {
  const tree = renderer.create(mockIDCheckerSceneState({ isWebcamOn: false, isRejected: true, imageSource: 'image' })).toJSON();
  expect(tree).toMatchSnapshot();
})

it('matches snapshot when accepts picture', () => {
  const tree = renderer.create(mockIDCheckerSceneState({ isWebcamOn: false, isRejected: false, imageSource: 'image' })).toJSON();
  expect(tree).toMatchSnapshot();
})