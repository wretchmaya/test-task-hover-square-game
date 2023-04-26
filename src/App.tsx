import React, { useEffect, useState } from 'react';
import './App.less';
import { Board } from './components/Board/Board';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchModes } from './store/api';
import { ModePicker } from './components/ModePicker/ModePicker';
import { selectErrors, selectIsLoading } from './store/rootReducer';
import { HoveredSquaresList } from './components/HoveredSquaresList/HoveredSquaresList';
import { Preloader } from './components/Preloader/Preloader';

const App = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectIsLoading);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const errors = useAppSelector(selectErrors);

    useEffect(() => {
        dispatch(fetchModes());
    }, []);

    return (
        <div className="App">
            <main>
                {isLoading ? (
                    <Preloader />
                ) : (
                    <>
                        <ModePicker
                            setIsGameStarted={setIsGameStarted}
                            isGameStarted={isGameStarted}
                        />
                        {errors ? (
                            <h1>{errors}</h1>
                        ) : (
                            <div>{isGameStarted && <Board />}</div>
                        )}
                    </>
                )}
            </main>
            <section>{isGameStarted && <HoveredSquaresList />}</section>
        </div>
    );
};

export default App;
