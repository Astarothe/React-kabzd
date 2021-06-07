import React, {useState} from 'react';
import { Story } from '@storybook/react';
import {Rating, RatingPropsType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,

};

const emptyStar: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const emptyRating = emptyStar.bind({});

emptyRating.args = {
    value: 3,

}
export const changeRating = emptyStar.bind({});

changeRating.args = {
    value: 5,
}
