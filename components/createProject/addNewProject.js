import React, { useState, useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { NewProject } from './NewProject'
import { Upcoming } from './Upcoming'
import { Category } from './Category'
import { TagCrew } from './TagCrew/'
import { Complete } from './Complete'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const AddProjectNav = createStackNavigator();

export const addNewProject = ({ navigation: { goBack } }) => {
  return (
    <>
            <AddProjectNav.Navigator >
                <AddProjectNav.Screen name="Complete" component={Complete} options={{ headerShown: false}} />
                <AddProjectNav.Screen name="Tagcrew" component={TagCrew} options={{ headerShown: false}} />
                <AddProjectNav.Screen name="NewProject" component={NewProject} options={{ headerShown: false}} />
                <AddProjectNav.Screen name="Upcoming" component={Upcoming} options={{ headerShown: false}} />
                <AddProjectNav.Screen name="Category" component={Category} options={{ headerShown: false}} />
            </AddProjectNav.Navigator>

    </>
  );
};
