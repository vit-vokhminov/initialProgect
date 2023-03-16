import { Button } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { counterActions, counterReducer } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import {
    DynamicReducerModule,
    ReducersList,
} from '@/shared/lib/components/DynamicReducerModule/DynamicReducerModule';

const initialReducers: ReducersList = {
    counter: counterReducer,
};

export const Counter = () => {
    const dispatch = useAppDispatch();

    const counterValue = useSelector(getCounterValue);

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    };

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <DynamicReducerModule reducers={initialReducers}>
            <div>
                <h1 data-testid='value-title'>{counterValue}</h1>
                <Button data-testid='decrement-btn' onClick={handleDecrement}>
                    decrement
                </Button>
                <Button onClick={handleIncrement} data-testid='increment-btn'>
                    increment
                </Button>
            </div>
        </DynamicReducerModule>
    );
};
