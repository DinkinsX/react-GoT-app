import React from "react";
import RandomChar from './randomChar';
import renderer from 'react-test-renderer';

describe('Testing <RandomChar/>', () => {
    it('RandomChar has renderer', () => {
        const char = renderer.create(<RandomChar/>).toJSON();
        expect(char).toMatchSnapshot();

    })
});