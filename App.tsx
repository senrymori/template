import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {View} from "react-native";
import {setupStore} from "./src/store";

const App: FC = () => {
    const store = setupStore();
    return (
        <Provider store={store}>
            <View></View>
        </Provider>
    );
};

export default App;
